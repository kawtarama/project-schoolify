import React from 'react';
import { MessageSquare, Target, Zap } from "lucide-react";
const QuoteSection = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    schoolType: '',
    studentsCount: '',
    currentSystem: '',
    features: [],
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        features: checked 
          ? [...prev.features, value]
          : prev.features.filter(feature => feature !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      console.log('Demande de devis:', formData);
      alert('Votre demande de devis a été envoyée avec succès ! Notre équipe vous contactera sous 24h.');
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        schoolName: '',
        schoolType: '',
        studentsCount: '',
        currentSystem: '',
        features: [],
        budget: '',
        timeline: '',
        message: ''
      });
    }, 1500);
  };

  const featuresOptions = [
    'Gestion des élèves',
    'Suivi des notes',
    'Communication parents',
    'Planning des cours',
    'Transport scolaire',
    'Gestion financière',
    'Bibliothèque numérique',
    'Application mobile',
    'Rapports et statistiques'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Demandez votre devis personnalisé
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Obtenez une estimation gratuite adaptée aux besoins de votre établissement. 
            Réponse garantie sous 24h.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] p-8 md:p-12 rounded-3xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Section 1: Informations personnelles */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span 
                  className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3"
                  style={{ backgroundColor: '#00adee' }}
                >
                  1
                </span>
                Vos informations
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
                    style={{ '--focus-color': '#00adee' }}
                    onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    required
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
                    onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    required
                    placeholder="jean.dupont@ecole.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
                    onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fonction
                  </label>
                  <select
                    name="position"
                    value={formData.position || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
                    onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="directeur">Directeur/Directrice</option>
                    <option value="secretaire">Secrétaire</option>
                    <option value="informatique">Responsable informatique</option>
                    <option value="enseignant">Enseignant(e)</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Informations établissement */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span 
                  className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3"
                  style={{ backgroundColor: '#1b75bb' }}
                >
                  2
                </span>
                Votre établissement
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom de l'établissement *
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
                    onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    required
                    placeholder="École Primaire Saint-Martin"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Type d'établissement *
                  </label>
                  <select
                    name="schoolType"
                    value={formData.schoolType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
                    onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    required
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="maternelle">École maternelle</option>
                    <option value="primaire">École primaire</option>
                    <option value="college">Collège</option>
                    <option value="lycee">Lycée</option>
                    <option value="prive">École privée</option>
                    <option value="universite">Université</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre d'élèves *
                  </label>
                  <select
                    name="studentsCount"
                    value={formData.studentsCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
                    onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    required
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="1-50">1-50 élèves</option>
                    <option value="51-200">51-200 élèves</option>
                    <option value="201-500">201-500 élèves</option>
                    <option value="501-1000">501-1000 élèves</option>
                    <option value="1000+">Plus de 1000 élèves</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Système actuel
                  </label>
                  <select
                    name="currentSystem"
                    value={formData.currentSystem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
                    onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="aucun">Aucun système</option>
                    <option value="excel">Fichiers Excel</option>
                    <option value="papier">Gestion papier</option>
                    <option value="autre-logiciel">Autre logiciel</option>
                    <option value="systeme-maison">Système développé en interne</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Fonctionnalités souhaitées */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span 
                  className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3"
                  style={{ backgroundColor: '#fdc500' }}
                >
                  3
                </span>
                Fonctionnalités souhaitées
              </h3>
              <p className="text-gray-600 mb-4">Sélectionnez les fonctionnalités qui vous intéressent :</p>
              <div className="grid md:grid-cols-3 gap-4">
                {featuresOptions.map((feature, index) => (
                  <label 
                    key={index} 
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-white/50 cursor-pointer transition-all duration-200 hover:shadow-md"
                  >
                    <input
                      type="checkbox"
                      name="features"
                      value={feature}
                      checked={formData.features.includes(feature)}
                      onChange={handleChange}
                      className="mr-3 w-4 h-4 rounded transition-colors"
                      style={{ accentColor: '#00adee' }}
                    />
                    <span className="text-gray-700 font-medium text-sm">{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 4: Budget et Timeline */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span 
                  className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3"
                  style={{ backgroundColor: '#1b75bb' }}
                >
                  4
                </span>
                Budget et délais
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Budget mensuel envisagé
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
                    onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="0-50">0€ - 50€</option>
                    <option value="50-100">50€ - 100€</option>
                    <option value="100-200">100€ - 200€</option>
                    <option value="200-500">200€ - 500€</option>
                    <option value="500+">Plus de 500€</option>
                    <option value="discuter">À discuter</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Délai de mise en œuvre souhaité
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
                    onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="urgent">Urgent (moins d'1 mois)</option>
                    <option value="1-3-mois">1 à 3 mois</option>
                    <option value="3-6-mois">3 à 6 mois</option>
                    <option value="6-12-mois">6 à 12 mois</option>
                    <option value="pas-presse">Pas pressé</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 5: Message */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span 
                  className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3"
                  style={{ backgroundColor: '#fdc500' }}
                >
                  5
                </span>
                Message (optionnel)
              </h3>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Décrivez vos besoins spécifiques
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
                  onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                  placeholder="Décrivez vos défis actuels, vos attentes spécifiques, ou toute information qui nous aiderait à mieux comprendre vos besoins..."
                ></textarea>
              </div>
            </div>

            {/* Bouton de soumission */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                  isSubmitting ? 'cursor-wait' : 'hover:shadow-xl'
                }`}
                style={{ backgroundColor: isSubmitting ? '#6b7280' : '#00adee' }}
                onMouseEnter={(e) => !isSubmitting && (e.target.style.backgroundColor = '#1b75bb')}
                onMouseLeave={(e) => !isSubmitting && (e.target.style.backgroundColor = '#00adee')}
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block animate-spin mr-2">⏳</span>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                     Envoyer ma demande de devis
                  </>
                )}
              </button>
              <p className="text-sm text-gray-500 mt-4">
                * Champs obligatoires. Réponse garantie sous 24h ouvrées.
              </p>
            </div>
          </form>
        </div>

        {/* Section avantages */}
         <div className="mt-16">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
           Ce que vous obtiendrez
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Consultation gratuite */}
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#00adee" }}
            >
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Consultation gratuite</h4>
            <p className="text-gray-600 text-sm">
              Un expert vous contacte pour analyser vos besoins spécifiques
            </p>
          </div>

          {/* Proposition sur mesure */}
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#1b75bb" }}
            >
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Proposition sur mesure</h4>
            <p className="text-gray-600 text-sm">
              Devis personnalisé avec fonctionnalités adaptées à votre établissement
            </p>
          </div>

          {/* Réponse rapide */}
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#fdc500" }}
            >
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Réponse rapide</h4>
            <p className="text-gray-600 text-sm">
              Devis détaillé et démonstration personnalisée sous 24h
            </p>
          </div>
        </div>
      </div>
    </div>

        {/* Témoignage */}
        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4" style={{ borderColor: '#00adee' }}>
            <p className="text-gray-600 italic mb-4">
              "Grâce à SCHOOLIFY, nous avons économisé 15h de travail administratif par semaine. 
              Le retour sur investissement a été immédiat !"
            </p>
            <div className="flex items-center justify-center space-x-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#00adee' }}
              >
                <span className="text-white font-bold">MD</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Sokaina Sayouri</div>
                <div className="text-gray-500 text-sm">Directrice, schoolify</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;