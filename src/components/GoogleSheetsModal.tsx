import React, { useState, useEffect } from 'react';
import { 
  X, 
  Table, 
  ExternalLink, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  User as UserIcon, 
  LogOut, 
  FileSpreadsheet, 
  Send, 
  MessageCircle, 
  Clock, 
  Search, 
  Download,
  PlusCircle,
  Sparkles
} from 'lucide-react';
import { User } from 'firebase/auth';
import { 
  googleSignIn, 
  logoutGoogle, 
  getAccessToken, 
  initAuth 
} from '../services/googleAuth';
import { 
  getStoredSpreadsheetId, 
  setStoredSpreadsheetId, 
  extractSpreadsheetId, 
  getLocalCandidates, 
  createCandidaturesSpreadsheet, 
  appendCandidateToSheet,
  fetchCandidatesFromSheet,
  CandidateRecord 
} from '../services/googleSheets';

interface GoogleSheetsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleSheetsModal: React.FC<GoogleSheetsModalProps> = ({ isOpen, onClose }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [spreadsheetId, setSpreadsheetId] = useState<string>(getStoredSpreadsheetId());
  const [customSheetInput, setCustomSheetInput] = useState<string>('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [isCreatingSheet, setIsCreatingSheet] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [localCandidates, setLocalCandidates] = useState<CandidateRecord[]>([]);
  const [sheetRows, setSheetRows] = useState<string[][]>([]);
  const [isLoadingSheet, setIsLoadingSheet] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'local' | 'sheet'>('local');

  // Initialize Auth state
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, currentToken) => {
        setUser(currentUser);
        setToken(currentToken);
      },
      () => {
        setUser(null);
        setToken(null);
      }
    );

    return () => unsubscribe();
  }, []);

  // Reload local candidates when modal opens
  useEffect(() => {
    if (isOpen) {
      setLocalCandidates(getLocalCandidates());
      setSpreadsheetId(getStoredSpreadsheetId());
      setFeedback(null);
    }
  }, [isOpen]);

  // Load sheet data if token & spreadsheetId available
  const loadSheetData = async (activeToken?: string, activeId?: string) => {
    const t = activeToken || token;
    const id = activeId || spreadsheetId;
    if (!t || !id) return;

    setIsLoadingSheet(true);
    try {
      const rows = await fetchCandidatesFromSheet(t, id);
      setSheetRows(rows);
      setFeedback({
        type: 'success',
        message: `${rows.length} candidature(s) récupérée(s) depuis Google Sheets.`
      });
    } catch (err: any) {
      console.error('Erreur lecture Google Sheets:', err);
      setFeedback({
        type: 'error',
        message: err.message || 'Impossible de lire les données de la feuille Google Sheets.'
      });
    } finally {
      setIsLoadingSheet(false);
    }
  };

  const handleSignIn = async () => {
    setIsConnecting(true);
    setFeedback(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setToken(res.accessToken);
        setFeedback({
          type: 'success',
          message: `Connecté avec succès : ${res.user.displayName || res.user.email}`
        });

        // If sheet ID already exists, try loading it
        const currentId = getStoredSpreadsheetId();
        if (currentId) {
          loadSheetData(res.accessToken, currentId);
        }
      }
    } catch (err: any) {
      setFeedback({
        type: 'error',
        message: err.message || 'Échec de la connexion à Google.'
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const handleSignOut = async () => {
    await logoutGoogle();
    setUser(null);
    setToken(null);
    setSheetRows([]);
    setFeedback({
      type: 'info',
      message: 'Vous êtes maintenant déconnecté.'
    });
  };

  const handleCreateAutoSheet = async () => {
    if (!token) {
      setFeedback({ type: 'error', message: 'Veuillez d’abord vous connecter à Google.' });
      return;
    }

    setIsCreatingSheet(true);
    setFeedback(null);
    try {
      const result = await createCandidaturesSpreadsheet(token);
      setSpreadsheetId(result.id);
      setFeedback({
        type: 'success',
        message: 'Feuille Google Sheets créée avec succès ! Les colonnes ont été configurées.'
      });

      // Synchroniser immédiatement les candidatures locales existantes
      const currentList = getLocalCandidates();
      if (currentList.length > 0) {
        for (const candidate of currentList) {
          await appendCandidateToSheet(token, result.id, candidate);
        }
        setLocalCandidates(getLocalCandidates());
        await loadSheetData(token, result.id);
      }
    } catch (err: any) {
      setFeedback({
        type: 'error',
        message: err.message || 'Échec de création de la feuille Google Sheets.'
      });
    } finally {
      setIsCreatingSheet(false);
    }
  };

  const handleConnectExistingSheet = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = extractSpreadsheetId(customSheetInput);
    if (!cleanId) {
      setFeedback({ type: 'error', message: 'Veuillez entrer un ID ou un lien de feuille Google Sheets valide.' });
      return;
    }

    setStoredSpreadsheetId(cleanId);
    setSpreadsheetId(cleanId);
    setCustomSheetInput('');
    setFeedback({
      type: 'success',
      message: `Feuille Google Sheets associée : ${cleanId}`
    });

    if (token) {
      await loadSheetData(token, cleanId);
    }
  };

  const handleSyncAllCandidates = async () => {
    if (!token) {
      setFeedback({ type: 'error', message: 'Veuillez vous connecter à Google pour synchroniser.' });
      return;
    }
    if (!spreadsheetId) {
      setFeedback({ type: 'error', message: 'Veuillez d’abord créer ou connecter une feuille Google Sheets.' });
      return;
    }

    setIsSyncing(true);
    setFeedback(null);
    try {
      const candidates = getLocalCandidates();
      const unsynced = candidates.filter(c => !c.syncedToSheet);

      if (unsynced.length === 0) {
        setFeedback({ type: 'info', message: 'Toutes les candidatures sont déjà synchronisées.' });
        setIsSyncing(false);
        return;
      }

      let count = 0;
      for (const item of unsynced) {
        await appendCandidateToSheet(token, spreadsheetId, item);
        count++;
      }

      setLocalCandidates(getLocalCandidates());
      await loadSheetData(token, spreadsheetId);
      setFeedback({
        type: 'success',
        message: `${count} candidature(s) synchronisée(s) avec succès vers Google Sheets !`
      });
    } catch (err: any) {
      setFeedback({
        type: 'error',
        message: err.message || 'Erreur pendant la synchronisation vers Google Sheets.'
      });
    } finally {
      setIsSyncing(false);
    }
  };

  const exportCSV = () => {
    const list = getLocalCandidates();
    if (list.length === 0) {
      setFeedback({ type: 'info', message: 'Aucune donnée à exporter.' });
      return;
    }

    const headers = ["Date", "Nom", "WhatsApp", "Email", "Motivation", "Disponibilite", "Engagement", "Remarque"];
    const rows = list.map(c => [
      `"${c.timestamp}"`,
      `"${c.nom.replace(/"/g, '""')}"`,
      `"${c.telephone}"`,
      `"${c.email}"`,
      `"${c.motivation.replace(/"/g, '""')}"`,
      `"${c.disponibilite.replace(/"/g, '""')}"`,
      `"${c.engagementFinancier.replace(/"/g, '""')}"`,
      `"${(c.remarque || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers.join(';'), ...rows.map(r => r.join(';'))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `candidatures_flareshop_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  const filteredCandidates = localCandidates.filter(c => 
    c.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.telephone.includes(searchTerm) ||
    c.email.toLowerCase().includes(searchTerm)
  );

  const sheetUrl = spreadsheetId ? `https://docs.google.com/spreadsheets/d/${spreadsheetId}` : '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-[#F0DDE3] w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* En-tête Modal */}
        <div className="px-6 py-5 border-b border-[#F0DDE3] bg-[#FDF6F8] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E85D8A]/10 text-[#E85D8A] flex items-center justify-center font-bold">
              <FileSpreadsheet size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#1A1A1A]">
                  Gestionnaire des Candidatures & Google Sheets
                </h2>
                <span className="text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-[#E85D8A]/10 text-[#E85D8A]">
                  Espace FlareShop
                </span>
              </div>
              <p className="text-xs text-[#6B6B6B]">
                Enregistrez et consultez les informations des personnes qui postulent à la formation
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-[#F0DDE3] text-[#6B6B6B] hover:text-black hover:bg-neutral-50 flex items-center justify-center transition-colors shadow-xs"
            aria-label="Fermer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Message de notification / feedback */}
        {feedback && (
          <div className={`px-6 py-2.5 text-xs font-medium flex items-center justify-between gap-3 ${
            feedback.type === 'success' ? 'bg-emerald-50 text-emerald-800 border-b border-emerald-100' :
            feedback.type === 'error' ? 'bg-rose-50 text-rose-800 border-b border-rose-100' :
            'bg-sky-50 text-sky-800 border-b border-sky-100'
          }`}>
            <div className="flex items-center gap-2">
              {feedback.type === 'success' && <CheckCircle2 size={15} className="text-emerald-600" />}
              {feedback.type === 'error' && <AlertCircle size={15} className="text-rose-600" />}
              {feedback.type === 'info' && <AlertCircle size={15} className="text-sky-600" />}
              <span>{feedback.message}</span>
            </div>
            <button onClick={() => setFeedback(null)} className="text-neutral-400 hover:text-neutral-700 font-bold">×</button>
          </div>
        )}

        {/* Contenu principal avec défilement */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">

          {/* Section 1 : Statut de Connexion Google */}
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {user ? (
                user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || 'Utilisateur'} className="w-11 h-11 rounded-full border-2 border-[#E85D8A]" />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-[#E85D8A] text-white flex items-center justify-center font-bold">
                    <UserIcon size={20} />
                  </div>
                )
              ) : (
                <div className="w-11 h-11 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center">
                  <UserIcon size={20} />
                </div>
              )}

              <div>
                <p className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider">Compte Google</p>
                {user ? (
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A]">{user.displayName || 'Administrateur FlareShop'}</p>
                    <p className="text-xs text-[#6B6B6B]">{user.email}</p>
                  </div>
                ) : (
                  <p className="text-sm text-neutral-600">Non connecté à votre compte Google</p>
                )}
              </div>
            </div>

            {user ? (
              <button
                onClick={handleSignOut}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                <LogOut size={14} />
                <span>Se déconnecter</span>
              </button>
            ) : (
              /* Bouton officiel Google GSI */
              <button 
                onClick={handleSignIn}
                disabled={isConnecting}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-semibold border border-neutral-300 shadow-xs hover:shadow-md transition-all active:scale-[0.99]"
              >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
                <span>{isConnecting ? 'Connexion en cours...' : 'Se connecter avec Google'}</span>
              </button>
            )}
          </div>

          {/* Section 2 : Feuille Google Sheets Active */}
          <div className="p-5 rounded-2xl border border-[#F0DDE3] bg-[#FDF6F8]/60 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <FileSpreadsheet size={18} className="text-[#E85D8A]" />
                <h3 className="text-sm font-bold text-[#1A1A1A]">Feuille de calcul Google Sheets</h3>
                {spreadsheetId && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    <CheckCircle2 size={12} /> Connectée
                  </span>
                )}
              </div>

              {spreadsheetId && (
                <a
                  href={sheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-[#E85D8A]/30 text-[#E85D8A] hover:bg-[#E85D8A] hover:text-white text-xs font-semibold transition-all shadow-xs"
                >
                  <span>Ouvrir dans Google Sheets</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>

            {spreadsheetId ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs bg-white p-3.5 rounded-xl border border-neutral-200">
                <div className="truncate">
                  <span className="font-semibold text-neutral-500">ID du tableur : </span>
                  <span className="font-mono text-neutral-800 select-all">{spreadsheetId}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => loadSheetData()}
                    disabled={isLoadingSheet || !token}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border border-neutral-200 hover:bg-neutral-100 text-neutral-700 transition-colors"
                  >
                    <RefreshCw size={12} className={isLoadingSheet ? 'animate-spin' : ''} />
                    <span>Actualiser</span>
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm('Voulez-vous dissocier cette feuille Google Sheets ?')) {
                        setStoredSpreadsheetId('');
                        setSpreadsheetId('');
                        setSheetRows([]);
                      }
                    }}
                    className="text-xs text-rose-600 hover:underline px-2 py-1"
                  >
                    Dissocier
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-[#6B6B6B]">
                  Vous n'avez pas encore de feuille connectée. Vous pouvez en générer une automatiquement avec les colonnes et le formatage idéal, ou coller le lien d'une feuille existante :
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleCreateAutoSheet}
                    disabled={isCreatingSheet || !user}
                    className="btn-cta-primary text-xs py-2.5 px-4 font-bold flex items-center justify-center gap-2 shrink-0"
                  >
                    <PlusCircle size={15} />
                    <span>{isCreatingSheet ? 'Création en cours...' : 'Créer la feuille automatique FlareShop'}</span>
                  </button>

                  <form onSubmit={handleConnectExistingSheet} className="flex-1 flex gap-2">
                    <input
                      type="text"
                      placeholder="Ou collez le lien ou l'ID d'une feuille Google Sheets"
                      value={customSheetInput}
                      onChange={(e) => setCustomSheetInput(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs rounded-xl border border-neutral-300 bg-white focus:outline-none focus:border-[#E85D8A]"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs font-semibold transition-colors"
                    >
                      Lier
                    </button>
                  </form>
                </div>

                {!user && (
                  <p className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200">
                    💡 Connectez-vous d’abord avec votre compte Google au-dessus pour créer ou accéder à votre feuille.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Section 3 : Tableau des Candidatures */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('local')}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                    activeTab === 'local' 
                      ? 'bg-[#E85D8A] text-white shadow-xs' 
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  Candidatures enregistrées ({localCandidates.length})
                </button>
                {spreadsheetId && (
                  <button
                    onClick={() => {
                      setActiveTab('sheet');
                      if (sheetRows.length === 0 && token) loadSheetData();
                    }}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                      activeTab === 'sheet' 
                        ? 'bg-[#E85D8A] text-white shadow-xs' 
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    Vue Google Sheets ({sheetRows.length})
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                {/* Recherche */}
                <div className="relative">
                  <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Rechercher nom, tél..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-neutral-200 focus:outline-none focus:border-[#E85D8A] w-36 sm:w-48"
                  />
                </div>

                {/* Bouton de Synchronisation */}
                <button
                  onClick={handleSyncAllCandidates}
                  disabled={isSyncing || !user || !spreadsheetId}
                  title="Synchroniser vers Google Sheets"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs disabled:opacity-40 transition-colors"
                >
                  <Send size={12} className={isSyncing ? 'animate-spin' : ''} />
                  <span>{isSyncing ? 'Synchronisation...' : 'Synchroniser'}</span>
                </button>

                {/* Export CSV de sécurité */}
                <button
                  onClick={exportCSV}
                  title="Exporter au format CSV"
                  className="p-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-100 text-neutral-600 transition-colors"
                >
                  <Download size={15} />
                </button>
              </div>
            </div>

            {/* Affichage des candidatures locales */}
            {activeTab === 'local' && (
              <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-xs">
                {filteredCandidates.length === 0 ? (
                  <div className="p-8 text-center text-neutral-400 space-y-2">
                    <Table size={32} className="mx-auto text-neutral-300" />
                    <p className="text-sm font-medium text-neutral-600">Aucune candidature enregistrée pour le moment</p>
                    <p className="text-xs text-neutral-400">
                      Les candidatures soumises via le formulaire apparaîtront immédiatement ici et seront enregistrées dans votre Google Sheet.
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto max-h-72">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#FDF6F8] border-b border-[#F0DDE3] text-neutral-700 font-bold sticky top-0">
                        <tr>
                          <th className="py-3 px-3">Date</th>
                          <th className="py-3 px-3">Candidat(e)</th>
                          <th className="py-3 px-3">Contact</th>
                          <th className="py-3 px-3">Objectif</th>
                          <th className="py-3 px-3">Disponibilité</th>
                          <th className="py-3 px-3">Statut Sheet</th>
                          <th className="py-3 px-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {filteredCandidates.map((c) => (
                          <tr key={c.id} className="hover:bg-neutral-50/80 transition-colors">
                            <td className="py-2.5 px-3 whitespace-nowrap text-neutral-500 font-mono text-[11px]">
                              {c.timestamp}
                            </td>
                            <td className="py-2.5 px-3 font-semibold text-[#1A1A1A] whitespace-nowrap">
                              {c.nom}
                            </td>
                            <td className="py-2.5 px-3 space-y-0.5 whitespace-nowrap">
                              <a 
                                href={`https://wa.me/${c.telephone.replace(/\D/g, '')}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="font-mono text-emerald-700 hover:underline flex items-center gap-1 font-semibold"
                              >
                                <MessageCircle size={12} className="text-[#25D366]" />
                                <span>{c.telephone}</span>
                              </a>
                              <span className="text-neutral-500 block text-[11px] truncate max-w-[140px]">{c.email}</span>
                            </td>
                            <td className="py-2.5 px-3 text-neutral-700 max-w-[180px] truncate" title={c.motivation}>
                              {c.motivation}
                            </td>
                            <td className="py-2.5 px-3 text-neutral-600 whitespace-nowrap">
                              {c.disponibilite}
                            </td>
                            <td className="py-2.5 px-3 whitespace-nowrap">
                              {c.syncedToSheet ? (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                                  ✓ Sur Sheet
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                                  En attente
                                </span>
                              )}
                            </td>
                            <td className="py-2.5 px-3 text-right whitespace-nowrap">
                              <a
                                href={`https://wa.me/${c.telephone.replace(/\D/g, '')}?text=Bonjour%20${encodeURIComponent(c.nom)},%20je%20suis%20Tiffany%20de%20l'%C3%A9quipe%20FlareShop.%20J'ai%20bien%20re%C3%A7u%20votre%20candidature%20pour%20la%20formation%20!`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#25D366]/10 text-[#1EBE5D] hover:bg-[#25D366] hover:text-white text-[11px] font-bold transition-colors"
                              >
                                <MessageCircle size={11} />
                                <span>Échanger</span>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Affichage de la vue Google Sheets */}
            {activeTab === 'sheet' && (
              <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-xs">
                {isLoadingSheet ? (
                  <div className="p-8 text-center text-neutral-400 space-y-2">
                    <RefreshCw size={24} className="mx-auto animate-spin text-[#E85D8A]" />
                    <p className="text-xs text-neutral-500">Chargement des données depuis Google Sheets...</p>
                  </div>
                ) : sheetRows.length === 0 ? (
                  <div className="p-8 text-center text-neutral-400 space-y-2">
                    <FileSpreadsheet size={32} className="mx-auto text-neutral-300" />
                    <p className="text-sm font-medium text-neutral-600">Aucune ligne trouvée dans la feuille Google Sheets</p>
                    <p className="text-xs text-neutral-400">Cliquez sur « Synchroniser » pour exporter vos premières candidatures.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto max-h-72">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#FDF6F8] border-b border-[#F0DDE3] text-neutral-700 font-bold sticky top-0">
                        <tr>
                          <th className="py-2.5 px-3">Date</th>
                          <th className="py-2.5 px-3">Nom</th>
                          <th className="py-2.5 px-3">WhatsApp</th>
                          <th className="py-2.5 px-3">Email</th>
                          <th className="py-2.5 px-3">Motivation</th>
                          <th className="py-2.5 px-3">Disponibilité</th>
                          <th className="py-2.5 px-3">Statut</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {sheetRows.map((row, idx) => (
                          <tr key={idx} className="hover:bg-neutral-50">
                            <td className="py-2 px-3 text-neutral-500 font-mono text-[11px] whitespace-nowrap">{row[0] || '—'}</td>
                            <td className="py-2 px-3 font-semibold text-neutral-800 whitespace-nowrap">{row[1] || '—'}</td>
                            <td className="py-2 px-3 font-mono text-neutral-700 whitespace-nowrap">{row[2] || '—'}</td>
                            <td className="py-2 px-3 text-neutral-600 whitespace-nowrap">{row[3] || '—'}</td>
                            <td className="py-2 px-3 text-neutral-600 max-w-[180px] truncate">{row[4] || '—'}</td>
                            <td className="py-2 px-3 text-neutral-600 whitespace-nowrap">{row[5] || '—'}</td>
                            <td className="py-2 px-3 whitespace-nowrap">
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700">
                                {row[8] || 'Reçue'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

        {/* Pied de modal */}
        <div className="px-6 py-4 border-t border-[#F0DDE3] bg-neutral-50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span>Données hébergées en toute sécurité sur votre propre Google Drive & Sheets</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-neutral-900 hover:bg-black text-white font-semibold transition-colors w-full sm:w-auto"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
