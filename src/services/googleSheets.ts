import { QualificationFormData } from '../types';

export interface CandidateRecord {
  id: string;
  timestamp: string;
  nom: string;
  telephone: string;
  email: string;
  motivation: string;
  disponibilite: string;
  engagementFinancier: string;
  remarque?: string;
  status?: string;
  syncedToSheet?: boolean;
}

const STORAGE_KEY_CANDIDATES = 'flareshop_candidatures_v1';
const STORAGE_KEY_SPREADSHEET_ID = 'flareshop_google_sheet_id_v1';

export const MOTIVATION_LABELS: Record<string, string> = {
  lancer_activite: 'Lancer mon activité rentable de box cadeaux',
  competence: 'Acquérir une compétence créative & technique rare',
  revenu_complementaire: 'Générer un revenu complémentaire rapide',
  reconversion: 'Projet de reconversion professionnelle'
};

export const DISPONIBILITE_LABELS: Record<string, string> = {
  entiere: '100% disponible sur les 7 jours de session',
  a_confirmer: 'Disponible sous réserve d’aménagement'
};

export const ENGAGEMENT_LABELS: Record<string, string> = {
  pret_rapidement: 'Prêt(e) à régler l’acompte sous 48h si retenu(e)',
  discuter_dabord: 'Souhaite d’abord échanger avec un conseiller'
};

/**
 * Get active Google Spreadsheet ID stored in client preferences
 */
export const getStoredSpreadsheetId = (): string => {
  try {
    return localStorage.getItem(STORAGE_KEY_SPREADSHEET_ID) || '';
  } catch {
    return '';
  }
};

/**
 * Save Google Spreadsheet ID
 */
export const setStoredSpreadsheetId = (id: string): void => {
  try {
    localStorage.setItem(STORAGE_KEY_SPREADSHEET_ID, id.trim());
  } catch (e) {
    console.error('Failed to save spreadsheet ID:', e);
  }
};

/**
 * Extract spreadsheet ID from full Google Sheets URL or raw ID
 */
export const extractSpreadsheetId = (input: string): string => {
  if (!input) return '';
  const trimmed = input.trim();
  const match = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match && match[1]) {
    return match[1];
  }
  return trimmed;
};

/**
 * Get all local candidates
 */
export const getLocalCandidates = (): CandidateRecord[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CANDIDATES);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

/**
 * Save candidate locally
 */
export const saveCandidateLocally = (formData: QualificationFormData): CandidateRecord => {
  const list = getLocalCandidates();
  const now = new Date();
  const timestamp = now.toLocaleString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const newRecord: CandidateRecord = {
    id: `cand_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    timestamp,
    nom: formData.nom.trim(),
    telephone: formData.telephone.trim(),
    email: formData.email.trim(),
    motivation: MOTIVATION_LABELS[formData.motivation] || formData.motivation,
    disponibilite: DISPONIBILITE_LABELS[formData.disponibilite] || formData.disponibilite,
    engagementFinancier: ENGAGEMENT_LABELS[formData.engagementFinancier] || formData.engagementFinancier,
    remarque: formData.remarque?.trim() || '',
    status: 'Nouvelle candidature',
    syncedToSheet: false
  };

  list.unshift(newRecord);
  try {
    localStorage.setItem(STORAGE_KEY_CANDIDATES, JSON.stringify(list));
  } catch (e) {
    console.error('Failed to persist locally:', e);
  }

  return newRecord;
};

/**
 * Mark a local candidate as synced
 */
export const markCandidateAsSynced = (candidateId: string): void => {
  const list = getLocalCandidates();
  const updated = list.map(c => c.id === candidateId ? { ...c, syncedToSheet: true } : c);
  try {
    localStorage.setItem(STORAGE_KEY_CANDIDATES, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update sync state:', e);
  }
};

/**
 * Create a new Google Spreadsheet with structured columns and styling
 */
export const createCandidaturesSpreadsheet = async (accessToken: string): Promise<{ id: string; url: string }> => {
  const payload = {
    properties: {
      title: `Candidatures Formation FlareShop — Atelier Boîtes Cadeaux`
    },
    sheets: [
      {
        properties: {
          title: 'Candidats',
          gridProperties: {
            frozenRowCount: 1
          }
        },
        data: [
          {
            startRow: 0,
            startColumn: 0,
            rowData: [
              {
                values: [
                  { userEnteredValue: { stringValue: 'Horodatage' } },
                  { userEnteredValue: { stringValue: 'Nom & Prénom' } },
                  { userEnteredValue: { stringValue: 'Numéro WhatsApp' } },
                  { userEnteredValue: { stringValue: 'Adresse Email' } },
                  { userEnteredValue: { stringValue: 'Motivation / Objectif' } },
                  { userEnteredValue: { stringValue: 'Disponibilité (7 Jours)' } },
                  { userEnteredValue: { stringValue: 'Engagement Financier' } },
                  { userEnteredValue: { stringValue: 'Remarques / Projet' } },
                  { userEnteredValue: { stringValue: 'Statut de traitement' } }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `Erreur de création Google Sheets (${response.status})`);
  }

  const data = await response.json();
  const spreadsheetId = data.spreadsheetId;
  const spreadsheetUrl = data.spreadsheetUrl || `https://docs.google.com/spreadsheets/d/${spreadsheetId}`;

  // Save as active sheet
  setStoredSpreadsheetId(spreadsheetId);

  return {
    id: spreadsheetId,
    url: spreadsheetUrl
  };
};

/**
 * Append a single candidate to the active Google Spreadsheet
 */
export const appendCandidateToSheet = async (
  accessToken: string,
  spreadsheetId: string,
  candidate: CandidateRecord
): Promise<boolean> => {
  const row = [
    candidate.timestamp,
    candidate.nom,
    candidate.telephone,
    candidate.email,
    candidate.motivation,
    candidate.disponibilite,
    candidate.engagementFinancier,
    candidate.remarque || '—',
    candidate.status || 'Nouvelle candidature'
  ];

  // Try appending to 'Candidats' sheet or fallback to first sheet
  const range = encodeURIComponent('Candidats!A:I');
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      values: [row]
    })
  });

  if (!response.ok) {
    // If sheet 'Candidats' wasn't found, try generic Sheet1!A:I or A:I
    const fallbackUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A:I:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
    const fallbackRes = await fetch(fallbackUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ values: [row] })
    });

    if (!fallbackRes.ok) {
      const err = await fallbackRes.json().catch(() => ({}));
      throw new Error(err?.error?.message || 'Échec de l’écriture dans Google Sheets.');
    }
  }

  markCandidateAsSynced(candidate.id);
  return true;
};

/**
 * Read candidate rows from Google Sheets
 */
export const fetchCandidatesFromSheet = async (
  accessToken: string,
  spreadsheetId: string
): Promise<string[][]> => {
  const range = encodeURIComponent('Candidats!A2:I');
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`;

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  if (!response.ok) {
    // Fallback to Sheet1 or general range
    const fallbackRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A2:I`, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
    if (!fallbackRes.ok) {
      const err = await fallbackRes.json().catch(() => ({}));
      throw new Error(err?.error?.message || 'Impossible de lire les données Google Sheets.');
    }
    const data = await fallbackRes.json();
    return data.values || [];
  }

  const data = await response.json();
  return data.values || [];
};
