

// import React from 'react';
// import { Link } from 'react-router-dom';
// import bgrem from '../assets/bgrem.png';
// import photo from '../assets/photo.png';

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen bg-gray-900 overflow-hidden">
//       {/* Image de fond avec overlay */}
//       <div className="absolute inset-0">
//         <img
//           src={photo}
//           alt="Team working"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gray-900/80"></div>
        
//         {/* Éléments géométriques décoratifs */}
//         <div className="absolute top-20 left-10 w-32 h-32 border border-[#00adee]/30 rounded-lg transform rotate-12"></div>
//         <div className="absolute bottom-32 right-16 w-24 h-24 border border-[#1b75bb]/30 rounded-lg transform -rotate-12"></div>
//         <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#fdc500]/20 rounded-full"></div>
//       </div>

//       {/* Contenu principal */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
//         {/* Annonce en haut */}
//         <div className="text-center mb-16">
         
//         </div>

//         <div className="text-center max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
//             SCHOOLIFY - 
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00adee] to-[#1b75bb]">
//               Simplifiez la gestion scolaire
//             </span>
//           </h1>
          
//           <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Une plateforme simple, performante et intuitive pour la gestion des élèves, 
//             le suivi des notes, la communication avec les parents et la géolocalisation 
//             du transport scolaire.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <Link 
//               to="/quote"
//               className="bg-[#00adee] hover:bg-[#1b75bb] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
//             >
//               Demander une démo
//             </Link>
//             <Link 
//               to="/features"
//               className="text-gray-300 hover:text-[#00adee] font-semibold text-lg flex items-center space-x-2 transition-colors duration-200"
//             >
//               <span>Voir les fonctionnalités</span>
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </Link>
//           </div>
//         </div>

//         {/* Dashboard preview à droite */}
//         <div className="absolute right-0 top-1/3 transform -translate-y-1/6 hidden xl:block">
//           <div className="w-100 h-100 bg-gray-8/4 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500">
//             <img
//               src={bgrem}
//               alt="Dashboard SCHOOLIFY"
//               className="w-full h-full object-cover"
//             />
//             {/* Overlay pour garder l'effet dashboard */}
//             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/40"></div>
            
//             {/* Interface elements overlay */}
//             <div className="absolute top-6 left-6 right-6">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex space-x-2">
//                   <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                   <div className="w-3 h-3 bg-[#fdc500] rounded-full"></div>
//                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Bottom overlay with dashboard elements */}
//             <div className="absolute bottom-6 left-6 right-6">
             
//             </div>
//           </div>
//         </div>

//         {/* Statistiques en bas */}
//         <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           <div>
//             <div className="text-3xl md:text-4xl font-bold text-[#fdc500] mb-2">500+</div>
//             <div className="text-gray-400">Élèves actifs</div>
//           </div>
//           <div>
//             <div className="text-3xl md:text-4xl font-bold text-[#00adee] mb-2">50+</div>
//             <div className="text-gray-400">Écoles partenaires</div>
//           </div>
//           <div>
//             <div className="text-3xl md:text-4xl font-bold text-[#1b75bb] mb-2">99.9%</div>
//             <div className="text-gray-400">Disponibilité</div>
//           </div>
//           <div>
//             <div className="text-3xl md:text-4xl font-bold text-[#fdc500] mb-2">24/7</div>
//             <div className="text-gray-400">Support technique</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React from 'react';
import { Link } from 'react-router-dom';
import bgrem from '../assets/bgrem.png';
import photo from '../assets/photo.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0">
        <img
          src={photo}
          alt="Team working"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/80"></div>
        
        {/* Éléments géométriques décoratifs */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#00adee]/30 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-[#1b75bb]/30 rounded-lg transform -rotate-12"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#fdc500]/20 rounded-full"></div>
        
        {/* Éléments décoratifs supplémentaires */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-[#fdc500]/20 rounded-full transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-20 w-12 h-12 bg-[#00adee]/10 rounded-lg transform -rotate-45"></div>
        <div className="absolute top-3/4 right-1/3 w-8 h-8 bg-[#1b75bb]/30 rounded-full"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            SCHOOLIFY - 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00adee] to-[#1b75bb]">
              Simplifiez la gestion scolaire
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Une plateforme simple, performante et intuitive pour la gestion des élèves, 
            le suivi des notes, la communication avec les parents et la géolocalisation 
            du transport scolaire.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/quote"
              className="bg-[#00adee] hover:bg-[#1b75bb] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Demander une démo
            </Link>
            <Link 
              to="/features"
              className="text-gray-300 hover:text-[#00adee] font-semibold text-lg flex items-center space-x-2 transition-colors duration-200"
            >
              <span>Voir les fonctionnalités</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Dashboard preview à droite - EXACTEMENT comme votre code */}
      <div className="absolute right-0 top-1/3 transform -translate-y-1/6 translate-x-20 hidden xl:block">
          <div className="w-100 h-100 bg-gray-80/40 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500">
            <img
              src={bgrem}
              alt="Dashboard SCHOOLIFY"
              className="w-full h-full object-cover"
            />
            {/* Overlay pour garder l'effet dashboard */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/40"></div>
            
            {/* Interface elements overlay */}
            <div className="absolute top-6 left-6 right-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-[#fdc500] rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Bottom overlay with dashboard elements */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-center">
                  <div className="text-white text-sm font-semibold mb-2">SCHOOLIFY Dashboard</div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <div className="text-[#00adee] text-xl font-bold">1,247</div>
                      <div className="text-white/80 text-xs">Élèves</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#fdc500] text-xl font-bold">156</div>
                      <div className="text-white/80 text-xs">Profs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#1b75bb] text-xl font-bold">98%</div>
                      <div className="text-white/80 text-xs">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques en bas */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#fdc500] mb-2">500+</div>
            <div className="text-gray-400">Élèves actifs</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#00adee] mb-2">50+</div>
            <div className="text-gray-400">Écoles partenaires</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#1b75bb] mb-2">99.9%</div>
            <div className="text-gray-400">Disponibilité</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#fdc500] mb-2">24/7</div>
            <div className="text-gray-400">Support technique</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;