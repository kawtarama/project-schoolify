// import React from 'react';
// import { MessageSquare, Target, Zap } from "lucide-react";
// const QuoteSection = () => {
//   const [formData, setFormData] = React.useState({
//     name: '',
//     email: '',
//     phone: '',
//     schoolName: '',
//     schoolType: '',
//     studentsCount: '',
//     currentSystem: '',
//     features: [],
//     budget: '',
//     timeline: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = React.useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
    
//     if (type === 'checkbox') {
//       setFormData(prev => ({
//         ...prev,
//         features: checked 
//           ? [...prev.features, value]
//           : prev.features.filter(feature => feature !== value)
//       }));
//     } else {
//       setFormData(prev => ({
//         ...prev,
//         [name]: value
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulation d'envoi
//     setTimeout(() => {
//       console.log('Demande de devis:', formData);
//       alert('Votre demande de devis a été envoyée avec succès ! Notre équipe vous contactera sous 24h.');
//       setIsSubmitting(false);
      
//       // Reset form
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         schoolName: '',
//         schoolType: '',
//         studentsCount: '',
//         currentSystem: '',
//         features: [],
//         budget: '',
//         timeline: '',
//         message: ''
//       });
//     }, 1500);
//   };

//   const featuresOptions = [
//     'Gestion des élèves',
//     'Suivi des notes',
//     'Communication parents',
//     'Planning des cours',
//     'Transport scolaire',
//     'Gestion financière',
//     'Bibliothèque numérique',
//     'Application mobile',
//     'Rapports et statistiques'
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Demandez votre devis personnalisé
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Obtenez une estimation gratuite adaptée aux besoins de votre établissement. 
//             Réponse garantie sous 24h.
//           </p>
//         </div>

//         <div className="bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] p-8 md:p-12 rounded-3xl shadow-xl">
//           <form onSubmit={handleSubmit} className="space-y-8">
            
//             {/* Section 1: Informations personnelles */}
//             <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl">
//               <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                 <span 
//                   className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3"
//                   style={{ backgroundColor: '#00adee' }}
//                 >
//                   1
//                 </span>
//                 Vos informations
//               </h3>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Nom complet *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
//                     style={{ '--focus-color': '#00adee' }}
//                     onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
//                     onBlur={(e) => e.target.style.boxShadow = 'none'}
//                     required
//                     placeholder="Jean Dupont"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Email professionnel *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
//                     onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
//                     onBlur={(e) => e.target.style.boxShadow = 'none'}
//                     required
//                     placeholder="jean.dupont@ecole.com"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Téléphone
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
//                     onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
//                     onBlur={(e) => e.target.style.boxShadow = 'none'}
//                     placeholder="+33 1 23 45 67 89"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Fonction
//                   </label>
//                   <select
//                     name="position"
//                     value={formData.position || ''}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
//                     onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
//                     onBlur={(e) => e.target.style.boxShadow = 'none'}
//                   >
//                     <option value="">Sélectionnez...</option>
//                     <option value="directeur">Directeur/Directrice</option>
//                     <option value="secretaire">Secrétaire</option>
//                     <option value="informatique">Responsable informatique</option>
//                     <option value="enseignant">Enseignant(e)</option>
//                     <option value="autre">Autre</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Section 2: Informations établissement */}
//             <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl">
//               <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                 <span 
//                   className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3"
//                   style={{ backgroundColor: '#1b75bb' }}
//                 >
//                   2
//                 </span>
//                 Votre établissement
//               </h3>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Nom de l'établissement *
//                   </label>
//                   <input
//                     type="text"
//                     name="schoolName"
//                     value={formData.schoolName}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
//                     onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
//                     onBlur={(e) => e.target.style.boxShadow = 'none'}
//                     required
//                     placeholder="École Primaire Saint-Martin"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Type d'établissement *
//                   </label>
//                   <select
//                     name="schoolType"
//                     value={formData.schoolType}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
//                     onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
//                     onBlur={(e) => e.target.style.boxShadow = 'none'}
//                     required
//                   >
//                     <option value="">Sélectionnez...</option>
//                     <option value="maternelle">École maternelle</option>
//                     <option value="primaire">École primaire</option>
//                     <option value="college">Collège</option>
//                     <option value="lycee">Lycée</option>
//                     <option value="prive">École privée</option>
//                     <option value="universite">Université</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Nombre d'élèves *
//                   </label>
//                   <select
//                     name="studentsCount"
//                     value={formData.studentsCount}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
//                     onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
//                     onBlur={(e) => e.target.style.boxShadow = 'none'}
//                     required
//                   >
//                     <option value="">Sélectionnez...</option>
//                     <option value="1-50">1-50 élèves</option>
//                     <option value="51-200">51-200 élèves</option>
//                     <option value="201-500">201-500 élèves</option>
//                     <option value="501-1000">501-1000 élèves</option>
//                     <option value="1000+">Plus de 1000 élèves</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Système actuel
//                   </label>
//                   <select
//                     name="currentSystem"
//                     value={formData.currentSystem}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
//                     onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
//                     onBlur={(e) => e.target.style.boxShadow = 'none'}
//                   >
//                     <option value="">Sélectionnez...</option>
//                     <option value="aucun">Aucun système</option>
//                     <option value="excel">Fichiers Excel</option>
//                     <option value="papier">Gestion papier</option>
//                     <option value="autre-logiciel">Autre logiciel</option>
//                     <option value="systeme-maison">Système développé en interne</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Section 3: Fonctionnalités souhaitées */}
//             <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl">
//               <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                 <span 
//                   className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3"
//                   style={{ backgroundColor: '#fdc500' }}
//                 >
//                   3
//                 </span>
//                 Fonctionnalités souhaitées
//               </h3>
//               <p className="text-gray-600 mb-4">Sélectionnez les fonctionnalités qui vous intéressent :</p>
//               <div className="grid md:grid-cols-3 gap-4">
//                 {featuresOptions.map((feature, index) => (
//                   <label 
//                     key={index} 
//                     className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-white/50 cursor-pointer transition-all duration-200 hover:shadow-md"
//                   >
//                     <input
//                       type="checkbox"
//                       name="features"
//                       value={feature}
//                       checked={formData.features.includes(feature)}
//                       onChange={handleChange}
//                       className="mr-3 w-4 h-4 rounded transition-colors"
//                       style={{ accentColor: '#00adee' }}
//                     />
//                     <span className="text-gray-700 font-medium text-sm">{feature}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Section 4: Budget et Timeline */}
//             <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl">
//               <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                 <span 
//                   className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3"
//                   style={{ backgroundColor: '#1b75bb' }}
//                 >
//                   4
//                 </span>
//                 Budget et délais
//               </h3>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Budget mensuel envisagé
//                   </label>
//                   <select
//                     name="budget"
//                     value={formData.budget}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
//                     onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
//                     onBlur={(e) => e.target.style.boxShadow = 'none'}
//                   >
//                     <option value="">Sélectionnez...</option>
//                     <option value="0-50">0€ - 50€</option>
//                     <option value="50-100">50€ - 100€</option>
//                     <option value="100-200">100€ - 200€</option>
//                     <option value="200-500">200€ - 500€</option>
//                     <option value="500+">Plus de 500€</option>
//                     <option value="discuter">À discuter</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Délai de mise en œuvre souhaité
//                   </label>
//                   <select
//                     name="timeline"
//                     value={formData.timeline}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
//                     onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
//                     onBlur={(e) => e.target.style.boxShadow = 'none'}
//                   >
//                     <option value="">Sélectionnez...</option>
//                     <option value="urgent">Urgent (moins d'1 mois)</option>
//                     <option value="1-3-mois">1 à 3 mois</option>
//                     <option value="3-6-mois">3 à 6 mois</option>
//                     <option value="6-12-mois">6 à 12 mois</option>
//                     <option value="pas-presse">Pas pressé</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Section 5: Message */}
//             <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl">
//               <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                 <span 
//                   className="w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3"
//                   style={{ backgroundColor: '#fdc500' }}
//                 >
//                   5
//                 </span>
//                 Message (optionnel)
//               </h3>
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Décrivez vos besoins spécifiques
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="5"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all"
//                   onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00adee`}
//                   onBlur={(e) => e.target.style.boxShadow = 'none'}
//                   placeholder="Décrivez vos défis actuels, vos attentes spécifiques, ou toute information qui nous aiderait à mieux comprendre vos besoins..."
//                 ></textarea>
//               </div>
//             </div>

//             {/* Bouton de soumission */}
//             <div className="text-center pt-6">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
//                   isSubmitting ? 'cursor-wait' : 'hover:shadow-xl'
//                 }`}
//                 style={{ backgroundColor: isSubmitting ? '#6b7280' : '#00adee' }}
//                 onMouseEnter={(e) => !isSubmitting && (e.target.style.backgroundColor = '#1b75bb')}
//                 onMouseLeave={(e) => !isSubmitting && (e.target.style.backgroundColor = '#00adee')}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <span className="inline-block animate-spin mr-2">⏳</span>
//                     Envoi en cours...
//                   </>
//                 ) : (
//                   <>
//                      Envoyer ma demande de devis
//                   </>
//                 )}
//               </button>
//               <p className="text-sm text-gray-500 mt-4">
//                 * Champs obligatoires. Réponse garantie sous 24h ouvrées.
//               </p>
//             </div>
//           </form>
//         </div>

//         {/* Section avantages */}
//          <div className="mt-16">
//       <div className="bg-white p-8 rounded-2xl shadow-lg">
//         <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
//            Ce que vous obtiendrez
//         </h3>
//         <div className="grid md:grid-cols-3 gap-6">
//           {/* Consultation gratuite */}
//           <div className="text-center">
//             <div
//               className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
//               style={{ backgroundColor: "#00adee" }}
//             >
//               <MessageSquare className="w-8 h-8 text-white" />
//             </div>
//             <h4 className="font-bold text-gray-900 mb-2">Consultation gratuite</h4>
//             <p className="text-gray-600 text-sm">
//               Un expert vous contacte pour analyser vos besoins spécifiques
//             </p>
//           </div>

//           {/* Proposition sur mesure */}
//           <div className="text-center">
//             <div
//               className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
//               style={{ backgroundColor: "#1b75bb" }}
//             >
//               <Target className="w-8 h-8 text-white" />
//             </div>
//             <h4 className="font-bold text-gray-900 mb-2">Proposition sur mesure</h4>
//             <p className="text-gray-600 text-sm">
//               Devis personnalisé avec fonctionnalités adaptées à votre établissement
//             </p>
//           </div>

//           {/* Réponse rapide */}
//           <div className="text-center">
//             <div
//               className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
//               style={{ backgroundColor: "#fdc500" }}
//             >
//               <Zap className="w-8 h-8 text-white" />
//             </div>
//             <h4 className="font-bold text-gray-900 mb-2">Réponse rapide</h4>
//             <p className="text-gray-600 text-sm">
//               Devis détaillé et démonstration personnalisée sous 24h
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>

//         {/* Témoignage */}
//         <div className="mt-12 text-center">
//           <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4" style={{ borderColor: '#00adee' }}>
//             <p className="text-gray-600 italic mb-4">
//               "Grâce à SCHOOLIFY, nous avons économisé 15h de travail administratif par semaine. 
//               Le retour sur investissement a été immédiat !"
//             </p>
//             <div className="flex items-center justify-center space-x-3">
//               <div 
//                 className="w-12 h-12 rounded-full flex items-center justify-center"
//                 style={{ backgroundColor: '#00adee' }}
//               >
//                 <span className="text-white font-bold">MD</span>
//               </div>
//               <div className="text-left">
//                 <div className="font-semibold text-gray-900">Sokaina Sayouri</div>
//                 <div className="text-gray-500 text-sm">Directrice, schoolify</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default QuoteSection;

import React from 'react';
import { MessageSquare, Target, Zap, CheckCircle, Phone, Mail, Calendar } from "lucide-react";

const QuoteSection = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    position: '',
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
  const [errors, setErrors] = React.useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    if (!formData.schoolName.trim()) newErrors.schoolName = 'Le nom de l\'établissement est requis';
    if (!formData.schoolType) newErrors.schoolType = 'Le type d\'établissement est requis';
    if (!formData.studentsCount) newErrors.studentsCount = 'Le nombre d\'élèves est requis';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulation d'envoi avec gestion d'erreur
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulation d'une réussite dans 95% des cas
          if (Math.random() > 0.05) {
            resolve();
          } else {
            reject(new Error('Erreur de réseau'));
          }
        }, 2000);
      });

      console.log('Demande de devis:', formData);
      alert('Votre demande de devis a été envoyée avec succès ! Notre équipe vous contactera sous 24h.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        schoolName: '',
        schoolType: '',
        studentsCount: '',
        currentSystem: '',
        features: [],
        budget: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setIsSubmitting(false);
    }
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

  const InputField = ({ label, name, type = 'text', required = false, options = null, placeholder = '', children }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {options ? (
        <select
          name={name}
          value={formData[name] || ''}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border transition-all ${
            errors[name] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
          } focus:ring-2 focus:border-transparent`}
          required={required}
        >
          <option value="">Sélectionnez...</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          name={name}
          value={formData[name]}
          onChange={handleChange}
          rows="5"
          className={`w-full px-4 py-3 rounded-lg border transition-all ${
            errors[name] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
          } focus:ring-2 focus:border-transparent`}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border transition-all ${
            errors[name] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
          } focus:ring-2 focus:border-transparent`}
          required={required}
          placeholder={placeholder}
        />
      )}
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Devis gratuit sous 24h
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Demandez votre 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00adee] to-[#1b75bb]"> devis personnalisé</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Obtenez une estimation gratuite adaptée aux besoins de votre établissement. 
            Réponse garantie sous 24h par nos experts.
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Section 1: Informations personnelles */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#00adee] to-[#1b75bb] rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-gradient-to-r from-[#00adee] to-[#1b75bb] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    1
                  </span>
                  Vos informations
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Nom complet"
                    name="name"
                    required
                    placeholder="Jean Dupont"
                  />
                  <InputField
                    label="Email professionnel"
                    name="email"
                    type="email"
                    required
                    placeholder="contact@schoolify-edtech.com"
                  />
                  <InputField
                    label="Téléphone"
                    name="phone"
                    type="tel"
                    placeholder="+212 6 12 34 56 78"
                  />
                  <InputField
                    label="Fonction"
                    name="position"
                    options={[
                      { value: 'directeur', label: 'Directeur/Directrice' },
                      { value: 'secretaire', label: 'Secrétaire' },
                      { value: 'informatique', label: 'Responsable informatique' },
                      { value: 'enseignant', label: 'Enseignant(e)' },
                      { value: 'autre', label: 'Autre' }
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Informations établissement */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#1b75bb] to-[#fdc500] rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-gradient-to-r from-[#1b75bb] to-[#fdc500] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    2
                  </span>
                  Votre établissement
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Nom de l'établissement"
                    name="schoolName"
                    required
                    placeholder="École Primaire Al Qods"
                  />
                  <InputField
                    label="Type d'établissement"
                    name="schoolType"
                    required
                    options={[
                      { value: 'maternelle', label: 'École maternelle' },
                      { value: 'primaire', label: 'École primaire' },
                      { value: 'college', label: 'Collège' },
                      { value: 'lycee', label: 'Lycée' },
                      { value: 'prive', label: 'École privée' },
                      { value: 'universite', label: 'Université' }
                    ]}
                  />
                  <InputField
                    label="Nombre d'élèves"
                    name="studentsCount"
                    required
                    options={[
                      { value: '1-50', label: '1-50 élèves' },
                      { value: '51-200', label: '51-200 élèves' },
                      { value: '201-500', label: '201-500 élèves' },
                      { value: '501-1000', label: '501-1000 élèves' },
                      { value: '1000+', label: 'Plus de 1000 élèves' }
                    ]}
                  />
                  <InputField
                    label="Système actuel"
                    name="currentSystem"
                    options={[
                      { value: 'aucun', label: 'Aucun système' },
                      { value: 'excel', label: 'Fichiers Excel' },
                      { value: 'papier', label: 'Gestion papier' },
                      { value: 'autre-logiciel', label: 'Autre logiciel' },
                      { value: 'systeme-maison', label: 'Système développé en interne' }
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Fonctionnalités */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#fdc500] to-[#00adee] rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-gradient-to-r from-[#fdc500] to-[#00adee] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    3
                  </span>
                  Fonctionnalités souhaitées
                </h3>
                <p className="text-gray-600 mb-6">Sélectionnez les fonctionnalités qui vous intéressent :</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {featuresOptions.map((feature, index) => (
                    <label 
                      key={index} 
                      className="group flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all duration-300 hover:shadow-md"
                    >
                      <input
                        type="checkbox"
                        name="features"
                        value={feature}
                        checked={formData.features.includes(feature)}
                        onChange={handleChange}
                        className="mr-3 w-5 h-5 text-blue-600 rounded focus:ring-blue-500 transition-colors"
                      />
                      <span className="text-gray-700 font-medium group-hover:text-blue-700 transition-colors">
                        {feature}
                      </span>
                      {formData.features.includes(feature) && (
                        <CheckCircle className="w-4 h-4 text-blue-600 ml-auto" />
                      )}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 4: Budget et Timeline */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#00adee] to-[#1b75bb] rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-gradient-to-r from-[#00adee] to-[#1b75bb] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    4
                  </span>
                  Budget et délais
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Budget mensuel envisagé"
                    name="budget"
                    options={[
                      { value: '0-50', label: '0€ - 50€' },
                      { value: '50-100', label: '50€ - 100€' },
                      { value: '100-200', label: '100€ - 200€' },
                      { value: '200-500', label: '200€ - 500€' },
                      { value: '500+', label: 'Plus de 500€' },
                      { value: 'discuter', label: 'À discuter' }
                    ]}
                  />
                  <InputField
                    label="Délai de mise en œuvre souhaité"
                    name="timeline"
                    options={[
                      { value: 'urgent', label: 'Urgent (moins d\'1 mois)' },
                      { value: '1-3-mois', label: '1 à 3 mois' },
                      { value: '3-6-mois', label: '3 à 6 mois' },
                      { value: '6-12-mois', label: '6 à 12 mois' },
                      { value: 'pas-presse', label: 'Pas pressé' }
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Section 5: Message */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#1b75bb] to-[#fdc500] rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-gradient-to-r from-[#1b75bb] to-[#fdc500] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    5
                  </span>
                  Message (optionnel)
                </h3>
                <InputField
                  label="Décrivez vos besoins spécifiques"
                  name="message"
                  type="textarea"
                  placeholder="Décrivez vos défis actuels, vos attentes spécifiques, ou toute information qui nous aiderait à mieux comprendre vos besoins..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-gradient-to-r from-[#00adee] to-[#1b75bb] text-white px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                  isSubmitting ? 'cursor-wait' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Envoi en cours...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Envoyer ma demande de devis
                  </div>
                )}
              </button>
              <p className="text-sm text-gray-500 mt-4">
                <span className="text-red-500">*</span> Champs obligatoires. Réponse garantie sous 24h ouvrées.
              </p>
            </div>
          </form>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Ce que vous obtiendrez
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-[#00adee] to-[#1b75bb] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Consultation gratuite</h4>
                <p className="text-gray-600">
                  Un expert vous contacte pour analyser vos besoins spécifiques et répondre à toutes vos questions
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-[#1b75bb] to-[#fdc500] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Proposition sur mesure</h4>
                <p className="text-gray-600">
                  Devis personnalisé avec fonctionnalités adaptées à votre établissement et votre budget
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-[#fdc500] to-[#00adee] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Réponse rapide</h4>
                <p className="text-gray-600">
                  Devis détaillé et démonstration personnalisée sous 24h par nos experts
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 bg-gradient-to-r from-[#00adee] to-[#1b75bb] p-8 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Une question avant de commencer ?</h3>
          <p className="text-lg opacity-90 mb-6">
            Notre équipe commerciale est disponible pour vous conseiller
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+212123456789"
              className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              +212 1 23 45 67 89
            </a>
            <a 
              href="mailto:contact@schoolify.ma"
              className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
             contact@schoolify-edtech.com
            </a>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-[#00adee]">
            <div className="flex items-center justify-center mb-4">
              {[1,2,3,4,5].map(star => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl text-gray-600 italic mb-6 max-w-3xl mx-auto">
              "Grâce à SCHOOLIFY, nous avons économisé 15h de travail administratif par semaine. 
              Le retour sur investissement a été immédiat et notre équipe pédagogique peut se concentrer sur l'essentiel !"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00adee] to-[#1b75bb] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-lg">Sokaina Sayouri</div>
                <div className="text-gray-500">Fondatrice, SCHOOLIFY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;