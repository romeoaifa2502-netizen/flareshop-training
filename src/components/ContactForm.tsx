import React, { useState } from 'react';
import { AudienceType, FormData } from '../types';
import { CheckCircle2, Send } from 'lucide-react';

interface ContactFormProps {
  selectedAudience: AudienceType;
  onAudienceChange: (audience: AudienceType) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  selectedAudience,
  onAudienceChange,
}) => {
  const [formData, setFormData] = useState<FormData>({
    audience: selectedAudience,
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    projectType: '',
    estimatedVolume: '',
    occasion: '',
    ideaOrMessage: '',
    profileType: '',
    preferredAvailability: '',
    generalMessage: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync external audience changes
  React.useEffect(() => {
    setFormData((prev) => ({ ...prev, audience: selectedAudience }));
  }, [selectedAudience]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAudienceSelect = (audience: AudienceType) => {
    onAudienceChange(audience);
    setFormData((prev) => ({ ...prev, audience }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate swift validation and submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      audience: selectedAudience,
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      projectType: '',
      estimatedVolume: '',
      occasion: '',
      ideaOrMessage: '',
      profileType: '',
      preferredAvailability: '',
      generalMessage: '',
    });
  };

  return (
    <section 
      id="contact" 
      className="section section-bg-alt"
      aria-labelledby="contact-title"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 id="contact-title">
            Discutons de votre projet
          </h2>
          <div className="prose">
            <p>
              Partagez-nous votre besoin, votre événement ou votre intérêt pour la formation. Nous vous répondrons avec soin et réactivité.
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-[760px]">
          {submitted ? (
            <div 
              className="card-on-alt p-8 sm:p-10 text-center"
              role="alert"
            >
              <div 
                className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-4"
                style={{ backgroundColor: 'var(--color-rose-100)', color: 'var(--color-rose-600)' }}
              >
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-ink-900)' }}>
                Merci pour votre demande !
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-ink-600)' }}>
                Votre message a bien été transmis à l'équipe FlareShop. Nous étudions votre projet avec attention et reviendrons vers vous très rapidement.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="btn-secondary"
              >
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <form 
              id="flare-contact-form"
              onSubmit={handleSubmit}
              className="card-on-alt p-6 sm:p-10"
            >
              {/* Champ 1 (obligatoire, sélecteur) : « Je suis... » */}
              <div className="mb-8">
                <label 
                  className="block text-sm font-semibold mb-3"
                  style={{ color: 'var(--color-ink-900)' }}
                >
                  Je suis... <span style={{ color: 'var(--color-rose-600)' }}>*</span>
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    id="audience-select-entreprise"
                    onClick={() => handleAudienceSelect('entreprise')}
                    className="p-3 text-sm font-medium rounded-lg border text-center transition-all cursor-pointer"
                    style={{
                      backgroundColor: formData.audience === 'entreprise' ? 'var(--color-rose-600)' : 'var(--color-surface)',
                      color: formData.audience === 'entreprise' ? '#FFFFFF' : 'var(--color-ink-900)',
                      borderColor: formData.audience === 'entreprise' ? 'var(--color-rose-600)' : 'var(--color-border)',
                      boxShadow: formData.audience === 'entreprise' ? 'var(--shadow-subtle)' : 'none',
                    }}
                    aria-pressed={formData.audience === 'entreprise'}
                  >
                    Une entreprise
                  </button>

                  <button
                    type="button"
                    id="audience-select-particulier"
                    onClick={() => handleAudienceSelect('particulier')}
                    className="p-3 text-sm font-medium rounded-lg border text-center transition-all cursor-pointer"
                    style={{
                      backgroundColor: formData.audience === 'particulier' ? 'var(--color-rose-600)' : 'var(--color-surface)',
                      color: formData.audience === 'particulier' ? '#FFFFFF' : 'var(--color-ink-900)',
                      borderColor: formData.audience === 'particulier' ? 'var(--color-rose-600)' : 'var(--color-border)',
                      boxShadow: formData.audience === 'particulier' ? 'var(--shadow-subtle)' : 'none',
                    }}
                    aria-pressed={formData.audience === 'particulier'}
                  >
                    Un particulier
                  </button>

                  <button
                    type="button"
                    id="audience-select-formation"
                    onClick={() => handleAudienceSelect('formation')}
                    className="p-3 text-sm font-medium rounded-lg border text-center transition-all cursor-pointer"
                    style={{
                      backgroundColor: formData.audience === 'formation' ? 'var(--color-rose-600)' : 'var(--color-surface)',
                      color: formData.audience === 'formation' ? '#FFFFFF' : 'var(--color-ink-900)',
                      borderColor: formData.audience === 'formation' ? 'var(--color-rose-600)' : 'var(--color-border)',
                      boxShadow: formData.audience === 'formation' ? 'var(--shadow-subtle)' : 'none',
                    }}
                    aria-pressed={formData.audience === 'formation'}
                  >
                    Intéressé(e) par la formation
                  </button>
                </div>
              </div>

              {/* Champs communs : Nom, Email, Téléphone */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
                <div>
                  <label 
                    htmlFor="fullName"
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: 'var(--color-ink-900)' }}
                  >
                    Nom complet <span style={{ color: 'var(--color-rose-600)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full px-3.5 py-2.5 rounded-md border text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rose-600)]"
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      borderColor: 'var(--color-border-strong)',
                      color: 'var(--color-ink-900)',
                    }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email"
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: 'var(--color-ink-900)' }}
                  >
                    Email <span style={{ color: 'var(--color-rose-600)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemple@email.com"
                    className="w-full px-3.5 py-2.5 rounded-md border text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rose-600)]"
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      borderColor: 'var(--color-border-strong)',
                      color: 'var(--color-ink-900)',
                    }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: 'var(--color-ink-900)' }}
                  >
                    Téléphone <span style={{ color: 'var(--color-rose-600)' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+229 XX XX XX XX"
                    className="w-full px-3.5 py-2.5 rounded-md border text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rose-600)]"
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      borderColor: 'var(--color-border-strong)',
                      color: 'var(--color-ink-900)',
                    }}
                  />
                </div>
              </div>

              {/* Champs conditionnels (affichés en JS selon le sélecteur) */}
              
              {/* Conditionnel 1 : Entreprise */}
              {formData.audience === 'entreprise' && (
                <div 
                  id="conditional-fields-entreprise" 
                  className="p-5 rounded-lg border mb-6 space-y-4 transition-all"
                  style={{ 
                    backgroundColor: 'var(--color-surface-alt)', 
                    borderColor: 'var(--color-border)' 
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label 
                        htmlFor="companyName" 
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: 'var(--color-ink-900)' }}
                      >
                        Nom de l'entreprise
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Raison sociale"
                        className="w-full px-3.5 py-2 rounded-md border text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rose-600)]"
                        style={{
                          backgroundColor: 'var(--color-surface)',
                          borderColor: 'var(--color-border)',
                          color: 'var(--color-ink-900)',
                        }}
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="projectType" 
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: 'var(--color-ink-900)' }}
                      >
                        Type de projet
                      </label>
                      <input
                        type="text"
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        placeholder="Ex: Fin d'année, séminaire..."
                        className="w-full px-3.5 py-2 rounded-md border text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rose-600)]"
                        style={{
                          backgroundColor: 'var(--color-surface)',
                          borderColor: 'var(--color-border)',
                          color: 'var(--color-ink-900)',
                        }}
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="estimatedVolume" 
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: 'var(--color-ink-900)' }}
                      >
                        Volume estimé
                      </label>
                      <input
                        type="text"
                        id="estimatedVolume"
                        name="estimatedVolume"
                        value={formData.estimatedVolume}
                        onChange={handleChange}
                        placeholder="Ex: 50 box, 200 coffrets..."
                        className="w-full px-3.5 py-2 rounded-md border text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rose-600)]"
                        style={{
                          backgroundColor: 'var(--color-surface)',
                          borderColor: 'var(--color-border)',
                          color: 'var(--color-ink-900)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Conditionnel 2 : Particulier */}
              {formData.audience === 'particulier' && (
                <div 
                  id="conditional-fields-particulier" 
                  className="p-5 rounded-lg border mb-6 space-y-4 transition-all"
                  style={{ 
                    backgroundColor: 'var(--color-surface-alt)', 
                    borderColor: 'var(--color-border)' 
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label 
                        htmlFor="occasion" 
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: 'var(--color-ink-900)' }}
                      >
                        Occasion
                      </label>
                      <input
                        type="text"
                        id="occasion"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        placeholder="Anniversaire, remerciement, amour..."
                        className="w-full px-3.5 py-2 rounded-md border text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rose-600)]"
                        style={{
                          backgroundColor: 'var(--color-surface)',
                          borderColor: 'var(--color-border)',
                          color: 'var(--color-ink-900)',
                        }}
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="ideaOrMessage" 
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: 'var(--color-ink-900)' }}
                      >
                        Votre idée ou message
                      </label>
                      <input
                        type="text"
                        id="ideaOrMessage"
                        name="ideaOrMessage"
                        value={formData.ideaOrMessage}
                        onChange={handleChange}
                        placeholder="Contenu souhaité, thème ou note spéciale"
                        className="w-full px-3.5 py-2 rounded-md border text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rose-600)]"
                        style={{
                          backgroundColor: 'var(--color-surface)',
                          borderColor: 'var(--color-border)',
                          color: 'var(--color-ink-900)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Conditionnel 3 : Formation */}
              {formData.audience === 'formation' && (
                <div 
                  id="conditional-fields-formation" 
                  className="p-5 rounded-lg border mb-6 space-y-4 transition-all"
                  style={{ 
                    backgroundColor: 'var(--color-surface-alt)', 
                    borderColor: 'var(--color-border)' 
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label 
                        htmlFor="profileType" 
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: 'var(--color-ink-900)' }}
                      >
                        Vous êtes
                      </label>
                      <select
                        id="profileType"
                        name="profileType"
                        value={formData.profileType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2 rounded-md border text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rose-600)]"
                        style={{
                          backgroundColor: 'var(--color-surface)',
                          borderColor: 'var(--color-border)',
                          color: 'var(--color-ink-900)',
                        }}
                      >
                        <option value="">Sélectionnez votre statut</option>
                        <option value="lyceen">Lycéen</option>
                        <option value="etudiant">Étudiant</option>
                        <option value="professionnel">Professionnel</option>
                      </select>
                    </div>

                    <div>
                      <label 
                        htmlFor="preferredAvailability" 
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: 'var(--color-ink-900)' }}
                      >
                        Disponibilités souhaitées
                      </label>
                      <input
                        type="text"
                        id="preferredAvailability"
                        name="preferredAvailability"
                        value={formData.preferredAvailability}
                        onChange={handleChange}
                        placeholder="Ex: Prochaine session, soirs, semaine..."
                        className="w-full px-3.5 py-2 rounded-md border text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rose-600)]"
                        style={{
                          backgroundColor: 'var(--color-surface)',
                          borderColor: 'var(--color-border)',
                          color: 'var(--color-ink-900)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Champ final : Message libre */}
              <div className="mb-8">
                <label 
                  htmlFor="generalMessage" 
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: 'var(--color-ink-900)' }}
                >
                  Message libre
                </label>
                <textarea
                  id="generalMessage"
                  name="generalMessage"
                  rows={4}
                  value={formData.generalMessage}
                  onChange={handleChange}
                  placeholder="Précisez votre demande, vos questions ou tout détail utile à la bonne compréhension de votre projet..."
                  className="w-full px-3.5 py-2.5 rounded-md border text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-rose-600)]"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border-strong)',
                    color: 'var(--color-ink-900)',
                  }}
                />
              </div>

              {/* CTA bouton : « Envoyer ma demande » */}
              <div>
                <button
                  type="submit"
                  id="contact-submit-button"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Transmission en cours...' : 'Envoyer ma demande'}</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
