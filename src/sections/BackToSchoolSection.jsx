// import React from 'react';

// const BackToSchoolSection = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
          
//           {/* Image à gauche */}
//           <div className="relative">
//             <div 
//               className="relative p-8 rounded-3xl shadow-2xl"
//               style={{ backgroundColor: '#00adee' }}
//             >
//               {/* Papier froissé avec texte "Back to School" */}
//               <div className="bg-gray-100 p-12 rounded-2xl relative overflow-hidden shadow-inner transform rotate-1 hover:rotate-0 transition-transform duration-300">
//                 {/* Effet papier froissé */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-80"></div>
//                 <div className="absolute top-4 left-4 w-16 h-16 bg-gray-200/50 rounded-full blur-xl"></div>
//                 <div className="absolute bottom-8 right-8 w-24 h-12 bg-gray-200/50 rounded-lg blur-lg"></div>
                
//                 {/* Texte Back to School */}
//                 <div className="relative z-10 text-center">
//                   <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 transform -rotate-1">
//                     BACK TO
//                   </h2>
//                   <h2 className="text-4xl md:text-5xl font-black text-gray-900 transform rotate-1">
//                     SCHOOL
//                   </h2>
                  
//                   {/* Éléments décoratifs scolaires */}
//                   <div className="absolute -top-2 -left-2 text-2xl transform -rotate-12">📚</div>
//                   <div className="absolute -top-4 -right-4 text-2xl transform rotate-12">✏️</div>
//                   <div className="absolute -bottom-2 -left-4 text-2xl transform rotate-45">🍎</div>
//                   <div className="absolute -bottom-4 -right-2 text-2xl transform -rotate-45">📐</div>
//                 </div>
                
//                 {/* Lignes de cahier */}
//                 <div className="absolute inset-0 opacity-20">
//                   {[...Array(8)].map((_, i) => (
//                     <div 
//                       key={i}
//                       className="absolute w-full h-px bg-blue-300"
//                       style={{ top: `${20 + i * 10}%` }}
//                     ></div>
//                   ))}
//                 </div>
//               </div>
              
//               {/* Éléments décoratifs autour */}
//               <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full" style={{ backgroundColor: '#fdc500' }}></div>
//               <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-lg" style={{ backgroundColor: '#1b75bb' }}></div>
//               <div className="absolute top-1/2 -left-6 w-6 h-6 rounded-full" style={{ backgroundColor: '#fdc500' }}></div>
//             </div>
//           </div>

//           {/* Contenu texte à droite */}
//           <div className="space-y-8">
//             {/* En-tête SCHOOLIFY */}
//             <div className="space-y-2">
//               <div className="flex items-center space-x-2 text-sm font-bold tracking-widest text-gray-500 uppercase">
//                 <span>S</span>
//                 <span>C</span>
//                 <span>H</span>
//                 <span>O</span>
//                 <span>O</span>
//                 <span>L</span>
//                 <span>I</span>
//                 <span>F</span>
//                 <span>Y</span>
//               </div>
              
//               <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
//                 Gestion complète de votre établissement scolaire
//               </h2>
//             </div>
            
//             {/* Description principale */}
//             <div className="space-y-6">
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 Logiciel de gestion établissement scolaire facile à utiliser. Un 
//                 accompagnement complet pour démarrer... Nos équipes vous assistent 
//                 pour déployer notre solution : aide au paramétrage, intégration à votre 
//                 solution, supports de formation, assistance par email ou par téléphone, 
//                 formations...
//               </p>
              
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 Les fonctions attendues par les écoles, collèges et lycées sont riches et 
//                 testées.
//               </p>
//             </div>
            
//             {/* Points clés */}
//             <div className="space-y-4">
//               <div className="flex items-start space-x-4">
//                 <div 
//                   className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
//                   style={{ backgroundColor: '#00adee' }}
//                 >
//                   <span className="text-white text-sm">✓</span>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900">Déploiement rapide</h4>
//                   <p className="text-gray-600">Mise en place en moins de 2 semaines avec formation complète</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start space-x-4">
//                 <div 
//                   className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
//                   style={{ backgroundColor: '#1b75bb' }}
//                 >
//                   <span className="text-white text-sm">✓</span>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900">Support dédié</h4>
//                   <p className="text-gray-600">Équipe d'experts disponible par email et téléphone</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start space-x-4">
//                 <div 
//                   className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
//                   style={{ backgroundColor: '#fdc500' }}
//                 >
//                   <span className="text-white text-sm">✓</span>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900">Fonctionnalités complètes</h4>
//                   <p className="text-gray-600">Toutes les fonctions pour écoles, collèges et lycées</p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Boutons d'action */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-6">
//               <button 
//                 className="text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//                 style={{ backgroundColor: '#00adee' }}
//                 onMouseEnter={(e) => e.target.style.backgroundColor = '#1b75bb'}
//                 onMouseLeave={(e) => e.target.style.backgroundColor = '#00adee'}
//               >
//                 Découvrir SCHOOLIFY
//               </button>
              
//               <button 
//                 className="border-2 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-md"
//                 style={{ borderColor: '#00adee', color: '#00adee' }}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = '#f0f9ff';
//                   e.target.style.borderColor = '#1b75bb';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = 'transparent';
//                   e.target.style.borderColor = '#00adee';
//                 }}
//               >
//                 Demander une démo
//               </button>
//             </div>
            
//             {/* Badge de confiance */}
//             <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
//               <div className="flex items-center space-x-2">
//                 <div 
//                   className="w-8 h-8 rounded-full flex items-center justify-center"
//                   style={{ backgroundColor: '#fdc500' }}
//                 >
//                   <span className="text-white text-sm">🏆</span>
//                 </div>
//                 <span className="text-sm font-semibold text-gray-700">Solution certifiée</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <div 
//                   className="w-8 h-8 rounded-full flex items-center justify-center"
//                   style={{ backgroundColor: '#00adee' }}
//                 >
//                   <span className="text-white text-sm">🔒</span>
//                 </div>
//                 <span className="text-sm font-semibold text-gray-700">Données sécurisées</span>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Statistiques en bas */}
//         <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
//           <div className="text-center p-6 bg-gray-50 rounded-2xl">
//             <div className="text-3xl font-bold mb-2" style={{ color: '#00adee' }}>500+</div>
//             <div className="text-gray-600 font-medium">Établissements</div>
//           </div>
//           <div className="text-center p-6 bg-gray-50 rounded-2xl">
//             <div className="text-3xl font-bold mb-2" style={{ color: '#1b75bb' }}>50K+</div>
//             <div className="text-gray-600 font-medium">Élèves</div>
//           </div>
//           <div className="text-center p-6 bg-gray-50 rounded-2xl">
//             <div className="text-3xl font-bold mb-2" style={{ color: '#fdc500' }}>99.9%</div>
//             <div className="text-gray-600 font-medium">Satisfaction</div>
//           </div>
//           <div className="text-center p-6 bg-gray-50 rounded-2xl">
//             <div className="text-3xl font-bold mb-2" style={{ color: '#00adee' }}>24/7</div>
//             <div className="text-gray-600 font-medium">Support</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BackToSchoolSection;

import React from 'react';
import paperAnimationGif from '../assets/video/paper-animation.gif'; // Import correct du GIF

const BackToSchoolSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Éléments géométriques décoratifs en arrière-plan */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-[#00adee]/20 rounded-lg transform rotate-45"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border border-[#1b75bb]/20 rounded-lg transform -rotate-12"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-[#fdc500]/10 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-[#00adee]/10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* GIF / Vidéo à gauche avec animation shake */}
          <div className="relative right-20">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-4 animate-shake">
              {/* Container avec effet glassmorphism pour le GIF */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-xl overflow-hidden hover:animate-shake-intense">
                <img 
                  src={paperAnimationGif} 
                  alt="Back to School Animation" 
                  className="w-full h-auto object-cover rounded-2xl animate-shake-subtle"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Erreur de chargement du GIF:', e);
                    // Fallback en cas d'erreur
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwQzIwMCAxNzIuMDkxIDIyLjA5MSAxOTQgNTAgMTk0QzIyLjA5MSAxOTQgMCAxNzIuMDkxIDAgMTUwQzAgMTI3LjkwOSAyMi4wOTEgMTA2IDUwIDEwNkM3Ny45MDkgMTA2IDEwMCAxMjcuOTA5IDEvMCAxNTBaIiBmaWxsPSIjMDBBREVFIi8+CjwvcGF0aD4KPHRleHQgeD0iMjAwIiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzY2NzNBMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U0NIT09MSUZZIEFuaW1hdGlvbjwvdGV4dD4KPC9zdmc+';
                  }}
                />
              </div>
              
              {/* Effet de glow autour du container avec shake */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00adee]/20 to-[#1b75bb]/20 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
            </div>
          </div>

          {/* Styles CSS pour les animations shake */}
          <style jsx>{`
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              10% { transform: translateX(-2px) rotate(-0.5deg); }
              20% { transform: translateX(2px) rotate(0.5deg); }
              30% { transform: translateX(-3px) rotate(-0.5deg); }
              40% { transform: translateX(3px) rotate(0.5deg); }
              50% { transform: translateX(-2px) rotate(-0.3deg); }
              60% { transform: translateX(2px) rotate(0.3deg); }
              70% { transform: translateX(-1px) rotate(-0.2deg); }
              80% { transform: translateX(1px) rotate(0.2deg); }
              90% { transform: translateX(-0.5px) rotate(-0.1deg); }
            }

            @keyframes shake-subtle {
              0%, 100% { transform: translateX(0) translateY(0); }
              25% { transform: translateX(-1px) translateY(-1px); }
              50% { transform: translateX(1px) translateY(1px); }
              75% { transform: translateX(-1px) translateY(1px); }
            }

            @keyframes shake-intense {
              0%, 100% { transform: translateX(0) rotate(0deg) scale(1); }
              10% { transform: translateX(-5px) rotate(-1deg) scale(1.02); }
              20% { transform: translateX(5px) rotate(1deg) scale(0.98); }
              30% { transform: translateX(-4px) rotate(-0.8deg) scale(1.01); }
              40% { transform: translateX(4px) rotate(0.8deg) scale(0.99); }
              50% { transform: translateX(-3px) rotate(-0.6deg) scale(1.01); }
              60% { transform: translateX(3px) rotate(0.6deg) scale(0.99); }
              70% { transform: translateX(-2px) rotate(-0.4deg) scale(1); }
              80% { transform: translateX(2px) rotate(0.4deg) scale(1); }
              90% { transform: translateX(-1px) rotate(-0.2deg) scale(1); }
            }

            .animate-shake {
              animation: shake 3s ease-in-out infinite;
            }

            .animate-shake-subtle {
              animation: shake-subtle 2s ease-in-out infinite;
            }

            .animate-shake-intense {
              animation: shake-intense 1.5s ease-in-out infinite;
              animation-play-state: paused;
            }

            .animate-shake-intense:hover {
              animation-play-state: running;
            }
          `}</style>

          {/* Contenu texte à droite */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/* Badge SCHOOLIFY avec animation */}
              <div className="flex items-center space-x-1 text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00adee] to-[#1b75bb] uppercase animate-pulse">
                {['S', 'C', 'H', 'O', 'O', 'L', 'I', 'F', 'Y'].map((letter, index) => (
                  <span 
                    key={letter} 
                    className="inline-block hover:scale-110 transition-transform duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Gestion complète de votre 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00adee] to-[#1b75bb] ml-2">
                  établissement scolaire
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Logiciel de gestion établissement scolaire facile à utiliser. Un 
                accompagnement complet pour démarrer rapidement avec tous les outils nécessaires.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Les fonctions attendues par les écoles, collèges et lycées sont riches et 
                testées par des milliers d'établissements.
              </p>
            </div>

            {/* Points clés avec vos couleurs */}
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start space-x-4 group">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[#00adee] group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-[#00adee] transition-colors duration-300">
                    Déploiement rapide
                  </h4>
                  <p className="text-gray-600">Mise en place en moins de 2 semaines avec formation complète</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[#1b75bb] group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-[#1b75bb] transition-colors duration-300">
                    Support dédié
                  </h4>
                  <p className="text-gray-600">Équipe d'experts disponible par email et téléphone</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[#fdc500] group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-[#fdc500] transition-colors duration-300">
                    Fonctionnalités complètes
                  </h4>
                  <p className="text-gray-600">Toutes les fonctions pour écoles, collèges et lycées</p>
                </div>
              </div>
            </div>

            {/* Boutons avec vos couleurs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 md:pt-5">
              <button className="bg-[#00adee] hover:bg-[#1b75bb] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl relative overflow-hidden group">
                <span className="relative z-10">Découvrir SCHOOLIFY</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#fdc500] to-[#00adee] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="border-2 border-[#00adee] text-[#00adee] hover:bg-[#00adee] hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg">
                Demander une démo
              </button>
            </div>

            {/* Badge confiance */}
            <div className="flex items-center space-x-4 md:space-x-6 pt-4 md:pt-5 border-t border-gray-200">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-[#fdc500] to-[#00adee] group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-[#00adee] transition-colors duration-300">
                  Solution certifiée
                </span>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-[#00adee] to-[#1b75bb] group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-[#1b75bb] transition-colors duration-300">
                  Données sécurisées
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats avec vos couleurs */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          <div className="text-center p-4 md:p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200/50 hover:border-[#00adee]/30 transition-all duration-300 hover:transform hover:scale-105 group">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 text-[#00adee] group-hover:text-[#1b75bb] transition-colors duration-300">
              500+
            </div>
            <div className="text-gray-600 font-medium">Établissements</div>
          </div>
          
          <div className="text-center p-4 md:p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200/50 hover:border-[#1b75bb]/30 transition-all duration-300 hover:transform hover:scale-105 group">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 text-[#1b75bb] group-hover:text-[#00adee] transition-colors duration-300">
              50K+
            </div>
            <div className="text-gray-600 font-medium">Élèves</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200/50 hover:border-[#fdc500]/30 transition-all duration-300 hover:transform hover:scale-105 group">
            <div className="text-3xl md:text-4xl font-bold mb-2 text-[#fdc500] group-hover:text-[#00adee] transition-colors duration-300">
              99.9%
            </div>
            <div className="text-gray-600 font-medium">Satisfaction</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200/50 hover:border-[#00adee]/30 transition-all duration-300 hover:transform hover:scale-105 group">
            <div className="text-3xl md:text-4xl font-bold mb-2 text-[#00adee] group-hover:text-[#1b75bb] transition-colors duration-300">
              24/7
            </div>
            <div className="text-gray-600 font-medium">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackToSchoolSection;