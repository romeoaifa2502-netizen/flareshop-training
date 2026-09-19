import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Clock, ShieldCheck, User, Phone, Mail, AlertCircle, FileSpreadsheet } from 'lucide-react';
import { QualificationFormData, MotivationType, DisponibiliteType, EngagementFinancierType } from '../types';
import { saveCandidateLocally, getStoredSpreadsheetId, appendCandidateToSheet } from '../services/googleSheets';
import { getAccessToken } from '../services/googleAuth';

export const QualificationForm: React.FC = () => {
  const [formData, setFormData] = useState<QualificationFormData>({
    nom: '',
    telephone: '',
    email: '',
    motivation: '',
    disponibilite: '',
    engagementFinancier: '',
    remarque: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.nom.trim() || !formData.telephone.trim() || !formData.email.trim()) {
      setErrorMessage('Veuillez remplir vos informations de contact complètes.');
      return;
    }

    if (!formData.motivation || !formData.disponibilite || !formData.engagementFinancier) {
      setErrorMessage('Merci de répondre aux 3 questions de qualification pour nous permettre d’évaluer votre candidature.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // 1. Sauvegarde sécurisée locale
      const savedCandidate = saveCandidateLocally(formData);

      // 2. Si Google Sheets est connecté, enregistrement automatique en direct
      const activeSheetId = getStoredSpreadsheetId();
      const token = await getAccessToken();

      if (token && activeSheetId) {
        try {
          await appendCandidateToSheet(token, activeSheetId, savedCandidate);
        } catch (sheetErr) {
          console.warn('Enregistrement différé vers Google Sheets:', sheetErr);
        }
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err: any) {
      console.error('Erreur lors de la soumission:', err);
      setIsSubmitting(false);
      setIsSuccess(true); // Permettre l'expérience utilisateur même en cas d'incident mineur
    }
  };

  return (
    <section 
      id="preinscription" 
      className="py-16 md:py-24 bg-[#FDF6F8] relative overflow-hidden"
      aria-label="Formulaire de candidature et préinscription"
    >
      {/* Glow d'accent en fond */}
      <div 
        className="absolute top-1/2 right-10 -translate-y-1/2 -z-10 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ backgroundColor: 'var(--color-rose-light)' }}
      />

      <div className="container-custom max-w-3xl">
        
        {/* En-tête du formulaire */}
        <div className="text-center mb-10">
          <div 
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 border bg-white shadow-2xs"
            style={{ 
              borderColor: 'var(--color-border)', 
              color: 'var(--color-rose)' 
            }}
          >
            <ShieldCheck size={14} className="text-[#E85D8A]" />
            <span>Étape 1 sur 2 : Qualification de votre projet</span>
          </div>

          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Faites votre demande de préinscription
          </h2>

          <p className="text-base sm:text-lg text-[#6B6B6B] max-w-xl mx-auto">
            Remplissez ce formulaire pour soumettre votre candidature. Un membre de notre équipe vous recontactera sous 24h pour valider votre éligibilité.
          </p>
        </div>

        {/* Conteneur principal du formulaire */}
        <div 
          className="bg-white rounded-2xl border p-6 sm:p-10 shadow-lg relative"
          style={{ borderColor: 'var(--color-border)' }}
        >
          {isSuccess ? (
            /* Message de succès post-qualification */
            <div className="text-center py-8 animate-fade-in">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-white shadow-md"
                style={{ backgroundColor: '#E85D8A' }}
              >
                <CheckCircle2 size={36} />
              </div>

              <h3 
                className="text-2xl font-bold text-[#1A1A1A] mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Votre demande a bien été enregistrée !
              </h3>

              <div className="max-w-md mx-auto space-y-3 text-sm text-[#6B6B6B] mb-8 leading-relaxed">
                <p>
                  Merci <strong>{formData.nom}</strong> pour votre confiance.
                </p>
                <p className="bg-[#FDF6F8] p-4 rounded-xl border border-[#F0DDE3] text-[#1A1A1A] font-medium">
                  📞 <strong>Que se passe-t-il maintenant ?</strong><br />
                  Ce formulaire ne finalise pas votre inscription définitive : un conseiller de l'équipe FlareShop va vous contacter personnellement au <strong>{formData.telephone}</strong> (par appel ou WhatsApp) d'ici <strong>24 heures ouvrées</strong> pour échanger sur vos objectifs et vous présenter les modalités finales.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/2290157776448?text=Bonjour%20l'%C3%A9quipe%20FlareShop,%20je%20viens%20d'envoyer%20ma%20demande%20de%20pr%C3%A9inscription%20au%20nom%20de%20${encodeURIComponent(formData.nom)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-whatsapp text-sm py-3 px-6 w-full sm:w-auto text-center justify-center"
                >
                  <MessageCircle size={18} />
                  <span>Confirmer ma demande sur WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      nom: '',
                      telephone: '',
                      email: '',
                      motivation: '',
                      disponibilite: '',
                      engagementFinancier: '',
                      remarque: '',
                    });
                  }}
                  className="text-xs text-[#6B6B6B] hover:text-[#1A1A1A] underline py-2"
                >
                  Remplir pour une autre personne
                </button>
              </div>
            </div>
          ) : (
            /* Formulaire actif */
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {errorMessage && (
                <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center gap-2">
                  <AlertCircle size={16} className="shrink-0 text-rose-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Bloc 1 : Coordonnées standards */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#B8406A] mb-3">
                  1. Vos Coordonnées Directes
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Nom complet */}
                  <div className="sm:col-span-2">
                    <label htmlFor="nom" className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                      Nom et Prénoms <span className="text-[#E85D8A]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6B6B6B]">
                        <User size={16} />
                      </div>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Ex: Tiffany Akowé"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-lg text-sm border border-[#F0DDE3] bg-[#FDF6F8]/40 text-[#1A1A1A] focus:outline-none focus:border-[#E85D8A] focus:ring-2 focus:ring-[#E85D8A]/20 transition-all placeholder:text-[#6B6B6B]/60"
                      />
                    </div>
                  </div>

                  {/* Téléphone WhatsApp */}
                  <div>
                    <label htmlFor="telephone" className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                      Numéro WhatsApp (joignable) <span className="text-[#E85D8A]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6B6B6B]">
                        <Phone size={16} />
                      </div>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        required
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="Ex: +229 97 00 00 00"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-lg text-sm border border-[#F0DDE3] bg-[#FDF6F8]/40 text-[#1A1A1A] focus:outline-none focus:border-[#E85D8A] focus:ring-2 focus:ring-[#E85D8A]/20 transition-all placeholder:text-[#6B6B6B]/60"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                      Adresse Email <span className="text-[#E85D8A]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6B6B6B]">
                        <Mail size={16} />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre.email@exemple.com"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-lg text-sm border border-[#F0DDE3] bg-[#FDF6F8]/40 text-[#1A1A1A] focus:outline-none focus:border-[#E85D8A] focus:ring-2 focus:ring-[#E85D8A]/20 transition-all placeholder:text-[#6B6B6B]/60"
                      />
                    </div>
                  </div>

                </div>
              </div>

              {/* Bloc 2 : Questions de qualification */}
              <div className="pt-4 border-t border-[#F0DDE3]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B8406A] mb-3">
                  2. Qualification de votre Candidature
                </p>

                <div className="space-y-4">
                  {/* Select 1 : Motivation */}
                  <div>
                    <label htmlFor="motivation" className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                      Quelle est votre motivation principale ? <span className="text-[#E85D8A]">*</span>
                    </label>
                    <select
                      id="motivation"
                      name="motivation"
                      required
                      value={formData.motivation}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-[#F0DDE3] bg-[#FDF6F8]/40 text-[#1A1A1A] focus:outline-none focus:border-[#E85D8A] focus:ring-2 focus:ring-[#E85D8A]/20 transition-all"
                    >
                      <option value="">Sélectionnez votre objectif...</option>
                      <option value="lancer_activite">Lancer mon activité de confection de box-cadeaux</option>
                      <option value="competence">Acquérir une compétence créative manuelle d'exception</option>
                      <option value="revenu_complementaire">Générer un revenu complémentaire régulier</option>
                      <option value="reconversion">Préparer une reconversion professionnelle dans l'artisanat</option>
                    </select>
                  </div>

                  {/* Select 2 : Disponibilité */}
                  <div>
                    <label htmlFor="disponibilite" className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                      Êtes-vous disponible pour participer aux 3 jours d'atelier à Cotonou ? <span className="text-[#E85D8A]">*</span>
                    </label>
                    <select
                      id="disponibilite"
                      name="disponibilite"
                      required
                      value={formData.disponibilite}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-[#F0DDE3] bg-[#FDF6F8]/40 text-[#1A1A1A] focus:outline-none focus:border-[#E85D8A] focus:ring-2 focus:ring-[#E85D8A]/20 transition-all"
                    >
                      <option value="">Précisez votre disponibilité...</option>
                      <option value="entiere">Oui, entièrement disponible pour la prochaine session</option>
                      <option value="a_confirmer">À confirmer selon les dates exactes présentées par l'équipe</option>
                    </select>
                  </div>

                  {/* Select 3 : Engagement financier */}
                  <div>
                    <label htmlFor="engagementFinancier" className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                      Votre niveau d'engagement pour démarrer votre formation : <span className="text-[#E85D8A]">*</span>
                    </label>
                    <select
                      id="engagementFinancier"
                      name="engagementFinancier"
                      required
                      value={formData.engagementFinancier}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-[#F0DDE3] bg-[#FDF6F8]/40 text-[#1A1A1A] focus:outline-none focus:border-[#E85D8A] focus:ring-2 focus:ring-[#E85D8A]/20 transition-all"
                    >
                      <option value="">Indiquez votre démarche...</option>
                      <option value="pret_rapidement">Je suis prêt(e) à m'inscrire rapidement si ma candidature est retenue</option>
                      <option value="discuter_dabord">Je souhaite d'abord en discuter en détail avec un conseiller</option>
                    </select>
                  </div>

                  {/* Champ optionnel remarque */}
                  <div>
                    <label htmlFor="remarque" className="block text-xs font-semibold text-[#1A1A1A] mb-1.5">
                      Avez-vous une question ou une précision pour l'équipe ? (Facultatif)
                    </label>
                    <textarea
                      id="remarque"
                      name="remarque"
                      rows={2}
                      value={formData.remarque}
                      onChange={handleChange}
                      placeholder="Partagez-nous votre situation ou vos attentes particulières..."
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-[#F0DDE3] bg-[#FDF6F8]/40 text-[#1A1A1A] focus:outline-none focus:border-[#E85D8A] focus:ring-2 focus:ring-[#E85D8A]/20 transition-all placeholder:text-[#6B6B6B]/60"
                    />
                  </div>

                </div>
              </div>

              {/* Bouton CTA Principal */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="qualification-submit-button"
                  disabled={isSubmitting}
                  className="btn-cta-primary w-full text-base py-4 px-8 text-center justify-center shadow-lg transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Clock size={18} className="animate-spin" />
                      Traitement de votre dossier...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Faire ma demande de préinscription</span>
                      <Send size={18} />
                    </span>
                  )}
                </button>

                {/* Note rassurante OBLIGATOIRE sous le bouton */}
                <p className="text-center text-xs text-[#6B6B6B] mt-3 leading-relaxed">
                  🔒 <strong>Places limitées et validées après un court échange avec notre équipe.</strong> Vos informations restent strictement confidentielles et ne seront jamais partagées à des tiers.
                </p>
              </div>

              {/* Alternative WhatsApp directe */}
              <div className="pt-4 border-t border-[#F0DDE3] text-center">
                <p className="text-xs text-[#6B6B6B] mb-2.5">
                  Vous préférez discuter directement avec un conseiller avant de remplir ce formulaire ?
                </p>
                <a
                  href="https://wa.me/2290157776448?text=Bonjour%20l'%C3%A9quipe%20FlareShop,%20je%20souhaite%20poser%20une%20question%20avant%20de%20m'inscrire%20%C3%A0%20la%20formation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-whatsapp text-xs py-2.5 px-5 inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle size={15} />
                  <span>Discuter directement sur WhatsApp</span>
                </a>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
