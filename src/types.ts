export type MotivationType = 
  | 'lancer_activite'
  | 'competence'
  | 'revenu_complementaire'
  | 'reconversion';

export type DisponibiliteType = 
  | 'entiere'
  | 'a_confirmer';

export type EngagementFinancierType = 
  | 'pret_rapidement'
  | 'discuter_dabord';

export interface QualificationFormData {
  // Champs standards
  nom: string;
  telephone: string; // WhatsApp
  email: string;

  // Champs de qualification
  motivation: MotivationType | '';
  disponibilite: DisponibiliteType | '';
  engagementFinancier: EngagementFinancierType | '';

  // Champ facultatif
  remarque?: string;
}

export type AudienceType = 'formation' | 'entreprise' | 'particulier';

export interface FormData {
  audience: AudienceType;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  projectType?: string;
  estimatedVolume?: string;
  occasion?: string;
  ideaOrMessage?: string;
  profileType?: 'lyceen' | 'etudiant' | 'professionnel' | '';
  preferredAvailability?: string;
  generalMessage: string;
}

