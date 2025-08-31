// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     subject: '',
//     message: '',
//     urgency: 'normal'
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Message de contact:', formData);
//     setIsSubmitted(true);
    
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         company: '',
//         subject: '',
//         message: '',
//         urgency: 'normal'
//       });
//       alert('Votre message a été envoyé avec succès ! Notre équipe vous contactera sous 24h.');
//     }, 2000);
//   };

//   if (isSubmitted) {
//     return (
//       <section className="relative min-h-screen bg-gray-900 overflow-hidden flex items-center justify-center">
//         {/* Background effects */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
//           <div className="absolute top-20 left-10 w-32 h-32 border border-[#00adee]/30 rounded-lg transform rotate-12 animate-pulse"></div>
//           <div className="absolute bottom-32 right-16 w-24 h-24 border border-[#1b75bb]/30 rounded-lg transform -rotate-12 animate-pulse"></div>
//           <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#fdc500]/20 rounded-full animate-bounce"></div>
//         </div>

//         <div className="relative z-10 bg-gray-800/60 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-gray-700 text-center max-w-md">
//           <div className="text-6xl mb-6 animate-bounce">✅</div>
//           <h2 className="text-3xl font-bold text-white mb-4">Message envoyé !</h2>
//           <p className="text-gray-300 mb-6">Notre équipe vous contactera très bientôt.</p>
//           <div className="inline-block animate-spin w-8 h-8 border-4 border-[#00adee] border-t-transparent rounded-full"></div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="relative min-h-screen bg-gray-900 overflow-hidden">
//       {/* Image de fond avec overlay */}
//       <div className="absolute inset-0">
//         <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
//         <div className="absolute inset-0 bg-gray-900/80"></div>
        
//         {/* Éléments géométriques décoratifs */}
//         <div className="absolute top-20 left-10 w-32 h-32 border border-[#00adee]/30 rounded-lg transform rotate-12 animate-pulse"></div>
//         <div className="absolute bottom-32 right-16 w-24 h-24 border border-[#1b75bb]/30 rounded-lg transform -rotate-12 animate-pulse"></div>
//         <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#fdc500]/20 rounded-full animate-bounce"></div>
//         <div className="absolute top-1/3 left-1/4 w-20 h-20 border border-[#fdc500]/20 rounded-full transform rotate-45"></div>
//         <div className="absolute bottom-1/4 left-20 w-12 h-12 bg-[#00adee]/10 rounded-lg transform -rotate-45"></div>
//       </div>

//       {/* Contenu principal */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
//         {/* Annonce en haut */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center px-4 py-2 bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-700 mb-8">
//             <span className="text-sm text-gray-300">Notre équipe répond sous 2h en moyenne.</span>
//             <div className="ml-2 text-[#00adee] text-sm font-medium flex items-center">
//               Support 24/7
//               <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16 items-start">
          
//           {/* Section gauche - Informations */}
//           <div className="text-white">
//             <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
//               Contactez
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00adee] to-[#1b75bb]">
//                 notre équipe
//               </span>
//             </h1>
            
//             <p className="text-xl text-gray-300 mb-12 leading-relaxed">
//               Notre équipe d'experts est disponible pour répondre à toutes vos questions 
//               et vous accompagner dans votre projet de digitalisation scolaire.
//             </p>

//             {/* Coordonnées */}
//             <div className="space-y-8 mb-12">
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-[#00adee]/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-[#00adee]/30">
//                   <svg className="w-6 h-6 text-[#00adee]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">Adresse</h3>
//                   <p className="text-gray-400">123 Avenue de l'Innovation<br />75001 Paris, France</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-[#1b75bb]/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-[#1b75bb]/30">
//                   <svg className="w-6 h-6 text-[#1b75bb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
//                   <p className="text-gray-400">+33 1 23 45 67 89<br />Lun-Ven: 9h-18h</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 bg-[#fdc500]/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-[#fdc500]/30">
//                   <svg className="w-6 h-6 text-[#fdc500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">Email</h3>
//                   <p className="text-gray-400">contact@schoolify.com<br />Réponse sous 2h</p>
//                 </div>
//               </div>
//             </div>

//             {/* Statistiques de contact */}
//             <div className="grid grid-cols-3 gap-6 text-center">
//               <div>
//                 <div className="text-2xl font-bold text-[#00adee] mb-1">2h</div>
//                 <div className="text-gray-400 text-sm">Temps de réponse</div>
//               </div>
//               <div>
//                 <div className="text-2xl font-bold text-[#fdc500] mb-1">24/7</div>
//                 <div className="text-gray-400 text-sm">Support urgence</div>
//               </div>
//               <div>
//                 <div className="text-2xl font-bold text-[#1b75bb] mb-1">98%</div>
//                 <div className="text-gray-400 text-sm">Satisfaction</div>
//               </div>
//             </div>
//           </div>

//           {/* Section droite - Formulaire */}
//           <div className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-3xl border border-gray-700 shadow-2xl">
//             <h2 className="text-3xl font-bold text-white mb-8">Envoyez-nous un message</h2>
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-300 mb-2">
//                     Nom complet *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#00adee] focus:border-transparent transition-all backdrop-blur-sm"
//                     placeholder="Jean Dupont"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-300 mb-2">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#00adee] focus:border-transparent transition-all backdrop-blur-sm"
//                     placeholder="jean.dupont@ecole.com"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-300 mb-2">
//                     Téléphone
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#00adee] focus:border-transparent transition-all backdrop-blur-sm"
//                     placeholder="+33 1 23 45 67 89"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-300 mb-2">
//                     Établissement
//                   </label>
//                   <input
//                     type="text"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#00adee] focus:border-transparent transition-all backdrop-blur-sm"
//                     placeholder="École Primaire..."
//                   />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-300 mb-2">
//                     Sujet *
//                   </label>
//                   <select
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white focus:ring-2 focus:ring-[#00adee] focus:border-transparent transition-all backdrop-blur-sm"
//                     required
//                   >
//                     <option value="">Sélectionnez...</option>
//                     <option value="demo">Demande de démonstration</option>
//                     <option value="pricing">Question sur les tarifs</option>
//                     <option value="features">Informations techniques</option>
//                     <option value="support">Support technique</option>
//                     <option value="partnership">Partenariat</option>
//                     <option value="other">Autre question</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-300 mb-2">
//                     Urgence
//                   </label>
//                   <select
//                     name="urgency"
//                     value={formData.urgency}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white focus:ring-2 focus:ring-[#00adee] focus:border-transparent transition-all backdrop-blur-sm"
//                   >
//                     <option value="low">Faible</option>
//                     <option value="normal">Normal</option>
//                     <option value="high">Urgent</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-300 mb-2">
//                   Message *
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="6"
//                   className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#00adee] focus:border-transparent transition-all backdrop-blur-sm resize-none"
//                   placeholder="Décrivez votre demande, vos questions ou vos besoins..."
//                   required
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-[#00adee] to-[#1b75bb] text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
//               >
//                 Envoyer le message
//               </button>
//             </form>

//             {/* Méthodes de contact alternatives */}
//             <div className="mt-8 pt-8 border-t border-gray-700">
//               <p className="text-gray-400 text-sm mb-4">Ou contactez-nous directement :</p>
//               <div className="flex space-x-4">
//                 <button className="flex items-center space-x-2 px-4 py-2 bg-[#00adee]/20 backdrop-blur-sm rounded-lg border border-[#00adee]/30 text-[#00adee] hover:bg-[#00adee]/30 transition-all">
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
//                     <path d="M11.893 0C5.337 0 0 5.335 0 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654C8.1 23.793 9.97 24.243 11.893 24.243c6.556 0 11.893-5.335 11.893-11.892C23.786 5.335 18.449.243 11.893.243z"/>
//                   </svg>
//                   <span>WhatsApp</span>
//                 </button>
                
//                 <button className="flex items-center space-x-2 px-4 py-2 bg-[#1b75bb]/20 backdrop-blur-sm rounded-lg border border-[#1b75bb]/30 text-[#1b75bb] hover:bg-[#1b75bb]/30 transition-all">
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
//                   </svg>
//                   <span>Twitter</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    etablissement: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.nom && formData.prenom && formData.email && formData.message) {
      console.log('Données du formulaire:', formData);
      // Ici vous pourrez ajouter la logique d'envoi
      alert('Message envoyé avec succès !');
      // Réinitialiser le formulaire
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        etablissement: '',
        message: ''
      });
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  };

  const contactInfo = [
    {
      title: "Adresse",
      content: "123 Avenue de l'Éducation\n75000 Paris, France",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Téléphone",
      content: "+33 1 23 45 67 89\nLun-Ven: 9h-18h",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Email",
      content: "contact@schoolify.com\nsupport@schoolify.com",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Support 7j/7",
      content: "Assistance technique\n24h/24 - 7j/7",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.18l6.364 6.364a9 9 0 010 12.728L12 21.82l-6.364-6.364a9 9 0 010-12.728L12 2.18z" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-20 bg-white relative overflow-hidden min-h-screen">
      {/* Éléments géométriques décoratifs en arrière-plan */}
      <div className="absolute top-10 left-20 w-20 h-20 border border-[#00adee]/20 rounded-lg transform rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-[#1b75bb]/20 rounded-lg transform -rotate-12"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-[#fdc500]/10 rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-[#00adee]/10 rounded-full"></div>
      <div className="absolute top-1/2 left-10 w-6 h-6 bg-[#1b75bb]/10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00adee] to-[#1b75bb] ml-2">
              SCHOOLIFY
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Notre équipe est là pour répondre à toutes vos questions et vous accompagner dans votre projet
          </p>
        </div>

        {/* Section des informations de contact */}
        <div className="bg-gray-50/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-8 md:p-12 shadow-2xl relative mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 hover:border-[#00adee]/50 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group shadow-lg text-center"
              >
                <div className={`mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300 ${
                  index % 3 === 0 ? 'text-[#00adee]' : 
                  index % 3 === 1 ? 'text-[#1b75bb]' : 
                  'text-[#fdc500]'
                }`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#00adee] transition-colors duration-300">
                  {info.title}
                </h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">
                  {info.content}
                </p>
                
                {/* Accent coloré en bas de chaque carte */}
                <div className={`h-1 w-full mt-4 rounded-full ${
                  index % 3 === 0 ? 'bg-[#00adee]' : 
                  index % 3 === 1 ? 'bg-[#1b75bb]' : 
                  'bg-[#fdc500]'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
          
          {/* Effet lumineux */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-[#00adee]/30 to-transparent rounded-full"></div>
        </div>

        {/* Formulaire de contact */}
        <div className="bg-gray-50/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-8 md:p-12 shadow-2xl relative">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Envoyez-nous un
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00adee] to-[#1b75bb] ml-2">
                message
              </span>
            </h2>
            <p className="text-gray-600">
              Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00adee] focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm group-hover:bg-white/90"
                  placeholder="Votre nom"
                />
              </div>
              
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00adee] focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm group-hover:bg-white/90"
                  placeholder="Votre prénom"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00adee] focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm group-hover:bg-white/90"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00adee] focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm group-hover:bg-white/90"
                  placeholder="+33 1 23 45 67 89"
                />
              </div>
            </div>

            <div className="mb-6 group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Établissement
              </label>
              <input
                type="text"
                name="etablissement"
                value={formData.etablissement}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00adee] focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm group-hover:bg-white/90"
                placeholder="Nom de votre établissement"
              />
            </div>

            <div className="mb-8 group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00adee] focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm group-hover:bg-white/90 resize-none"
                placeholder="Décrivez votre projet ou posez votre question..."
              />
            </div>

            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-[#00adee] to-[#1b75bb] hover:from-[#0099d4] hover:to-[#155a9b] text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
              >
                <span className="relative z-10">Envoyer le message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#fdc500] to-[#00adee] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Effet lumineux en bas du formulaire */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-[#00adee]/30 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;