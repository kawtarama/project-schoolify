


// import { CheckIcon } from '@heroicons/react/20/solid'

// const plans = [
//   {
//     name: "Free",
//     id: "plan-free",
//     priceMonthly: "0€",
//     description: "Pour découvrir SCHOOLIFY",
//     features: ["Jusqu'à 50 élèves", "Gestion de base", "Support par email", "Stockage 1GB"],
//     featured: false
//   },
//   {
//     name: "Basic",
//     id: "plan-basic",
//     priceMonthly: "29€",
//     description: "Pour les petites écoles",
//     features: ["Jusqu'à 200 élèves", "Gestion complète des notes", "Communication parents", "Support prioritaire", "Stockage 10GB"],
//     featured: false
//   },
//   {
//     name: "Pro",
//     id: "plan-pro",
//     priceMonthly: "79€",
//     description: "Solution complète",
//     features: ["Jusqu'à 1000 élèves", "Toutes les fonctionnalités", "Géolocalisation transport", "Support 24/7", "Stockage 50GB", "Formation incluse"],
//     featured: true
//   },
//   {
//     name: "Premium",
//     id: "plan-premium",
//     priceMonthly: "149€",
//     description: "Pour les grandes institutions",
//     features: ["Élèves illimités", "Personnalisation complète", "API disponible", "Support dédié", "Stockage illimité", "Formation sur site"],
//     featured: false
//   }
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function PricingSection() {
//   return (
//     <div className="relative isolate bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
//       <div className="mx-auto max-w-4xl text-center">
//         <h2 className="text-base/7 font-semibold text-indigo-600">Tarifs</h2>
//         <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
//           Choisissez le plan qui vous convient
//         </p>
//         <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
//           Choisissez un plan adapté à votre établissement avec toutes les fonctionnalités nécessaires.
//         </p>
//       </div>

//       <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-5xl lg:grid-cols-4">
//         {plans.map((plan, idx) => (
//           <div
//             key={plan.id}
//             className={classNames(
//               plan.featured ? 'relative bg-blue-900 text-white shadow-2xl' : 'bg-white/60 shadow-lg',
//               'rounded-3xl p-8 sm:p-10'
//             )}
//           >
//             {plan.featured && (
//               <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-lg">
//                 POPULAIRE
//               </div>
//             )}

//             <h3 className={classNames(plan.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-lg font-semibold')}>
//               {plan.name}
//             </h3>

//             <p className="mt-4 flex items-baseline gap-x-2">
//               <span className={classNames(plan.featured ? 'text-white' : 'text-gray-900', 'text-4xl font-bold')}>
//                 {plan.priceMonthly}
//               </span>
//               <span className={classNames(plan.featured ? 'text-gray-300' : 'text-gray-500', 'text-base')}>/mois</span>
//             </p>

//             <p className={classNames(plan.featured ? 'text-gray-300' : 'text-gray-600', 'mt-4 text-sm')}>
//               {plan.description}
//             </p>

//             <ul className={classNames(plan.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 space-y-3 text-sm')}>
//               {plan.features.map((feature) => (
//                 <li key={feature} className="flex gap-x-3 items-center">
//                   <CheckIcon className={classNames(plan.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-5 w-5 flex-none')} />
//                   {feature}
//                 </li>
//               ))}
//             </ul>

//             <button className={classNames(
//               plan.featured
//                 ? 'mt-6 w-full bg-blue-600 text-white hover:bg-blue-700'
//                 : 'mt-6 w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
//               'py-2 px-4 rounded-lg font-semibold'
//             )}>
//               Choisir ce plan
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
import React from 'react';

const plans = [
  {
    name: "Free",
    id: "plan-free",
    priceMonthly: "0€",
    description: "Pour découvrir SCHOOLIFY",
    features: ["Jusqu'à 50 élèves", "Gestion de base", "Support par email", "Stockage 1GB"],
    featured: false
  },
  {
    name: "Basic",
    id: "plan-basic",
    priceMonthly: "29€",
    description: "Pour les petites écoles",
    features: ["Jusqu'à 200 élèves", "Gestion complète des notes", "Communication parents", "Support prioritaire", "Stockage 10GB"],
    featured: false
  },
  {
    name: "Pro",
    id: "plan-pro",
    priceMonthly: "79€",
    description: "Solution complète",
    features: ["Jusqu'à 1000 élèves", "Toutes les fonctionnalités", "Géolocalisation transport", "Support 24/7", "Stockage 50GB", "Formation incluse"],
    featured: true
  },
  {
    name: "Premium",
    id: "plan-premium",
    priceMonthly: "149€",
    description: "Pour les grandes institutions",
    features: ["Élèves illimités", "Personnalisation complète", "API disponible", "Support dédié", "Stockage illimité", "Formation sur site"],
    featured: false
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PricingSection() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Éléments géométriques décoratifs en arrière-plan */}
      <div className="absolute top-16 left-16 w-24 h-24 border border-[#00adee]/20 rounded-lg transform rotate-45"></div>
      <div className="absolute bottom-16 right-20 w-20 h-20 border border-[#1b75bb]/20 rounded-lg transform -rotate-12"></div>
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-[#fdc500]/10 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-[#00adee]/10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-[#00adee] mb-4">Tarifs</h2>
          <p className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choisissez le plan qui 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00adee] to-[#1b75bb] ml-2">
              vous convient
            </span>
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choisissez un plan adapté à votre établissement avec toutes les fonctionnalités nécessaires.
          </p>
        </div>

        {/* Container avec effet glassmorphism */}
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 md:p-12 shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, idx) => (
              <div
                key={plan.id}
                className={classNames(
                  plan.featured 
                    ? 'relative bg-gradient-to-br from-[#00adee]/20 to-[#1b75bb]/20 border-[#00adee]/50 shadow-2xl transform scale-105' 
                    : 'bg-gray-700/30 border-gray-600/30 hover:border-[#00adee]/30',
                  'backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-2 group'
                )}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#fdc500] text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      POPULAIRE
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <h3 className={classNames(
                    plan.featured ? 'text-[#00adee]' : 'text-white', 
                    'text-xl font-bold mb-2'
                  )}>
                    {plan.name}
                  </h3>

                  <div className="mb-4">
                    <span className={classNames(
                      plan.featured ? 'text-white' : 'text-gray-200', 
                      'text-4xl font-bold'
                    )}>
                      {plan.priceMonthly}
                    </span>
                    <span className="text-gray-400 text-lg">/mois</span>
                  </div>

                  <p className="text-gray-300 text-sm mb-6">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-x-3 text-gray-300 text-sm">
                      <svg className={classNames(
                        plan.featured ? 'text-[#00adee]' : 'text-[#fdc500]', 
                        'h-5 w-5 flex-shrink-0'
                      )} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={classNames(
                  plan.featured
                    ? 'bg-[#00adee] hover:bg-[#1b75bb] text-white'
                    : 'border-2 border-[#00adee] text-[#00adee] hover:bg-[#00adee] hover:text-white',
                  'w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105'
                )}>
                  Choisir ce plan
                </button>

                {/* Accent coloré en bas de chaque carte */}
                <div className={`h-1 w-full mt-4 rounded-full ${
                  plan.featured ? 'bg-[#fdc500]' : 
                  idx % 2 === 0 ? 'bg-[#00adee]' : 'bg-[#1b75bb]'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Effet lumineux en bas du container */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#00adee]/30 to-transparent rounded-full"></div>
        </div>

        {/* Section bonus en bas */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Toutes nos offres incluent :</p>
          <div className="flex justify-center flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <svg className="w-4 h-4 text-[#00adee]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Mises à jour gratuites
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <svg className="w-4 h-4 text-[#1b75bb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Sauvegarde automatique
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <svg className="w-4 h-4 text-[#fdc500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Sécurité renforcée
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}