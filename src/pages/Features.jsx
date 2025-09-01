import React, { useState } from "react";

const Features = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Toutes", count: 12 },
    { id: "management", name: "Gestion", count: 4 },
    { id: "communication", name: "Communication", count: 3 },
    { id: "analytics", name: "Analytics", count: 2 },
    { id: "mobile", name: "Mobile", count: 3 }
  ];

  const allFeatures = [
    {
      title: "Gestion des élèves",
      desc: "Base de données complète des élèves avec toutes leurs informations personnelles, académiques et administratives",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      category: "management",
      benefits: ["Dossiers complets", "Import Excel", "Photos intégrées"]
    },
    {
      title: "Suivi des notes",
      desc: "Système de notation flexible et bulletins automatisés avec calculs de moyennes intelligents",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      category: "analytics",
      benefits: ["Bulletins auto", "Moyennes", "Graphiques"]
    },
    {
      title: "Communication parents",
      desc: "Messagerie intégrée et notifications automatiques pour maintenir le lien école-famille",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      category: "communication",
      benefits: ["SMS/Email", "Notifications", "Chat direct"]
    },
    {
      title: "Planning des cours",
      desc: "Gestion intelligente des emplois du temps et optimisation des salles de classe",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      category: "management",
      benefits: ["Emploi du temps", "Gestion salles", "Conflits évités"]
    },
    {
      title: "Transport scolaire",
      desc: "Géolocalisation en temps réel des bus scolaires avec système d'alerte parents",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      category: "mobile",
      benefits: ["GPS temps réel", "Alertes SMS", "Itinéraires"]
    },
    {
      title: "Gestion financière",
      desc: "Suivi complet des frais de scolarité et paiements en ligne sécurisés",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      category: "management",
      benefits: ["Paiement en ligne", "Factures auto", "Relances"]
    },
    {
      title: "Bibliothèque numérique",
      desc: "Catalogue numérique complet et système de prêt automatisé avec rappels",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      category: "management",
      benefits: ["Catalogue digital", "Prêts auto", "Rappels"]
    },
    {
      title: "Rapports & Analytics",
      desc: "Tableaux de bord interactifs et statistiques détaillées pour pilotage optimal",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      category: "analytics",
      benefits: ["Dashboards", "Export Excel", "KPIs"]
    },
    {
      title: "Application mobile",
      desc: "Application native iOS/Android pour accès nomade parents, élèves et professeurs",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
        </svg>
      ),
      category: "mobile",
      benefits: ["iOS & Android", "Hors ligne", "Push notifs"]
    },
    {
      title: "Portail parent",
      desc: "Interface dédiée aux parents pour suivre la scolarité de leurs enfants",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      category: "communication",
      benefits: ["Suivi temps réel", "Documents", "Rendez-vous"]
    },
    {
      title: "Gestion des absences",
      desc: "Système automatisé de gestion des absences avec notifications immédiates",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      category: "communication",
      benefits: ["Pointage auto", "SMS parents", "Justificatifs"]
    },
    {
      title: "Espace numérique",
      desc: "Plateforme collaborative avec partage de documents et devoirs en ligne",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      category: "mobile",
      benefits: ["Cloud sécurisé", "Partage docs", "Devoirs"]
    }
  ];

  const filteredFeatures = activeCategory === "all" 
    ? allFeatures 
    : allFeatures.filter(feature => feature.category === activeCategory);

  return (
    <div className="pt-20 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header avec arrière-plan décoratif */}
        <div className="relative text-center mb-16 py-16 rounded-3xl overflow-hidden">
          {/* Arrière-plan décoratif */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00adee]/10 via-[#1b75bb]/5 to-[#fdc500]/10 rounded-3xl"></div>
          <div className="absolute top-10 left-10 w-20 h-20 border border-[#00adee]/20 rounded-lg transform rotate-45"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-[#1b75bb]/20 rounded-lg transform -rotate-12"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-[#fdc500]/10 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-[#00adee]/10 rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-6 h-6 bg-[#1b75bb]/10 rounded-full"></div>
          
          {/* Contenu du header */}
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 text-sm font-semibold tracking-widest uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00adee] to-[#1b75bb]">
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
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Fonctionnalités 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00adee] to-[#1b75bb] ml-3">
                Complètes
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez toutes les fonctionnalités qui font de SCHOOLIFY la solution idéale 
              pour moderniser et simplifier la gestion de votre établissement scolaire
            </p>
          </div>
          
          {/* Effet de glow en bas */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-[#00adee]/30 to-transparent rounded-full"></div>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'text-white shadow-lg transform scale-105 bg-gradient-to-r from-[#00adee] to-[#1b75bb]'
                  : 'bg-white text-gray-600 hover:shadow-md hover:scale-105 border-2 border-gray-200 hover:border-[#00adee]/30'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="text-3xl font-bold mb-2 text-[#00adee] group-hover:text-[#1b75bb] transition-colors duration-300">12+</div>
            <div className="text-gray-600 font-medium">Modules</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="text-3xl font-bold mb-2 text-[#1b75bb] group-hover:text-[#00adee] transition-colors duration-300">500+</div>
            <div className="text-gray-600 font-medium">Établissements</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="text-3xl font-bold mb-2 text-[#fdc500] group-hover:text-[#00adee] transition-colors duration-300">99.9%</div>
            <div className="text-gray-600 font-medium">Disponibilité</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="text-3xl font-bold mb-2 text-[#00adee] group-hover:text-[#1b75bb] transition-colors duration-300">24/7</div>
            <div className="text-gray-600 font-medium">Support</div>
          </div>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:border-opacity-50 ${
                index % 3 === 0 ? 'hover:border-[#00adee]' : 
                index % 3 === 1 ? 'hover:border-[#1b75bb]' : 
                'hover:border-[#fdc500]'
              }`}
            >
              {/* Icône avec background coloré */}
              <div className="relative mb-6">
                <div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-white ${
                    index % 3 === 0 ? 'bg-[#00adee]' : 
                    index % 3 === 1 ? 'bg-[#1b75bb]' : 
                    'bg-[#fdc500]'
                  }`}
                >
                  {feature.icon}
                </div>
                {/* Badge catégorie */}
                <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${
                  index % 3 === 0 ? 'bg-[#fdc500]' : 
                  index % 3 === 1 ? 'bg-[#00adee]' : 
                  'bg-[#1b75bb]'
                }`}></div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.desc}
              </p>

              {/* Liste des bénéfices */}
              <div className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <div 
                      className={`w-2 h-2 rounded-full mr-3 ${
                        index % 3 === 0 ? 'bg-[#00adee]' : 
                        index % 3 === 1 ? 'bg-[#1b75bb]' : 
                        'bg-[#fdc500]'
                      }`}
                    ></div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Bouton "En savoir plus" */}
              <button 
                className={`mt-6 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 ${
                  index % 3 === 0 ? 'bg-[#00adee] hover:bg-[#1b75bb]' : 
                  index % 3 === 1 ? 'bg-[#1b75bb] hover:bg-[#00adee]' : 
                  'bg-[#fdc500] hover:bg-[#00adee]'
                }`}
              >
                En savoir plus
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-xl border border-gray-200/50">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Prêt à transformer votre établissement ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez comment SCHOOLIFY peut simplifier votre gestion quotidienne 
            et améliorer l'expérience de toute votre communauté éducative.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#00adee] to-[#1b75bb] hover:from-[#0099d4] hover:to-[#155a9b] text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group">
              <span className="relative z-10">Demander une démonstration</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#fdc500] to-[#00adee] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="border-2 border-[#00adee] text-[#00adee] hover:bg-[#00adee] hover:text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg">
              Voir les tarifs
            </button>
          </div>

          {/* Témoignage */}
          <div className="mt-12 p-6 bg-gray-50/80 backdrop-blur-sm rounded-2xl border-l-4 border-[#00adee]">
            <p className="text-gray-600 italic mb-4">
              "SCHOOLIFY a révolutionné notre façon de gérer l'établissement. 
              Gain de temps énorme et parents ravis !"
            </p>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#00adee]">
                <span className="text-white font-bold text-sm">MD</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Marie Dubois</div>
                <div className="text-gray-500 text-sm">Directrice, Lycée Victor Hugo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;