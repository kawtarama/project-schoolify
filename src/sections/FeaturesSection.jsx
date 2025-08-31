// import React from 'react';

// const FeaturesSection = () => {
//   const features = [
//     {
//       title: "Simple",
//       description: "Interface intuitive et facile à utiliser pour tous les utilisateurs",
//       icon: "⚡"
//     },
//     {
//       title: "Sécurisé",
//       description: "Protection des données avec cryptage de niveau bancaire",
//       icon: "🔒"
//     },
//     {
//       title: "Fonctionnel",
//       description: "Toutes les fonctionnalités essentielles pour la gestion scolaire",
//       icon: "🎯"
//     },
//     {
//       title: "Accompagnement",
//       description: "Formation et support personnalisé pour votre équipe",
//       icon: "🤝"
//     },
//     {
//       title: "Adapté",
//       description: "Solution personnalisable selon vos besoins spécifiques",
//       icon: "🔧"
//     },
//     {
//       title: "Support 7j/7",
//       description: "Assistance technique disponible tous les jours",
//       icon: "📞"
//     }
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Pourquoi choisir SCHOOLIFY ?
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Une solution complète qui répond à tous vos besoins de gestion scolaire
//           </p>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
//               <div className="text-4xl mb-4">{feature.icon}</div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;
import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Simple",
      description: "Interface intuitive et facile à utiliser pour tous les utilisateurs",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Sécurisé",
      description: "Protection des données avec cryptage de niveau bancaire",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Fonctionnel",
      description: "Toutes les fonctionnalités essentielles pour la gestion scolaire",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Accompagnement",
      description: "Formation et support personnalisé pour votre équipe",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Adapté",
      description: "Solution personnalisable selon vos besoins spécifiques",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Support 7j/7",
      description: "Assistance technique disponible tous les jours",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.18l6.364 6.364a9 9 0 010 12.728L12 21.82l-6.364-6.364a9 9 0 010-12.728L12 2.18z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Éléments géométriques décoratifs en arrière-plan */}
      <div className="absolute top-10 left-20 w-20 h-20 border border-[#00adee]/20 rounded-lg transform rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-[#1b75bb]/20 rounded-lg transform -rotate-12"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-[#fdc500]/10 rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-[#00adee]/10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00adee] to-[#1b75bb] ml-2">
              SCHOOLIFY ?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une solution complète qui répond à tous vos besoins de gestion scolaire
          </p>
        </div>

        {/* Container avec effet glassmorphism */}
        <div className="bg-gray-50/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-8 md:p-12 shadow-2xl relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray/70 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 hover:border-[#00adee]/50 hover:bg-gray 500/90 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group shadow-lg"
              >
                <div className={`mb-4 transform group-hover:scale-110 transition-transform duration-300 ${
                  index % 3 === 0 ? 'text-[#00adee]' : 
                  index % 3 === 1 ? 'text-[#1b75bb]' : 
                  'text-[#fdc500]'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00adee] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
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
          
          {/* Effet lumineux en bas du container */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-[#00adee]/30 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;