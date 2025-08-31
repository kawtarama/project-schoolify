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
      icon: "👥",
      category: "management",
      benefits: ["Dossiers complets", "Import Excel", "Photos intégrées"]
    },
    {
      title: "Suivi des notes",
      desc: "Système de notation flexible et bulletins automatisés avec calculs de moyennes intelligents",
      icon: "📊",
      category: "analytics",
      benefits: ["Bulletins auto", "Moyennes", "Graphiques"]
    },
    {
      title: "Communication parents",
      desc: "Messagerie intégrée et notifications automatiques pour maintenir le lien école-famille",
      icon: "💬",
      category: "communication",
      benefits: ["SMS/Email", "Notifications", "Chat direct"]
    },
    {
      title: "Planning des cours",
      desc: "Gestion intelligente des emplois du temps et optimisation des salles de classe",
      icon: "📅",
      category: "management",
      benefits: ["Emploi du temps", "Gestion salles", "Conflits évités"]
    },
    {
      title: "Transport scolaire",
      desc: "Géolocalisation en temps réel des bus scolaires avec système d'alerte parents",
      icon: "🚌",
      category: "mobile",
      benefits: ["GPS temps réel", "Alertes SMS", "Itinéraires"]
    },
    {
      title: "Gestion financière",
      desc: "Suivi complet des frais de scolarité et paiements en ligne sécurisés",
      icon: "💳",
      category: "management",
      benefits: ["Paiement en ligne", "Factures auto", "Relances"]
    },
    {
      title: "Bibliothèque numérique",
      desc: "Catalogue numérique complet et système de prêt automatisé avec rappels",
      icon: "📚",
      category: "management",
      benefits: ["Catalogue digital", "Prêts auto", "Rappels"]
    },
    {
      title: "Rapports & Analytics",
      desc: "Tableaux de bord interactifs et statistiques détaillées pour pilotage optimal",
      icon: "📈",
      category: "analytics",
      benefits: ["Dashboards", "Export Excel", "KPIs"]
    },
    {
      title: "Application mobile",
      desc: "Application native iOS/Android pour accès nomade parents, élèves et professeurs",
      icon: "📱",
      category: "mobile",
      benefits: ["iOS & Android", "Hors ligne", "Push notifs"]
    },
    {
      title: "Portail parent",
      desc: "Interface dédiée aux parents pour suivre la scolarité de leurs enfants",
      icon: "👨‍👩‍👧‍👦",
      category: "communication",
      benefits: ["Suivi temps réel", "Documents", "Rendez-vous"]
    },
    {
      title: "Gestion des absences",
      desc: "Système automatisé de gestion des absences avec notifications immédiates",
      icon: "📋",
      category: "communication",
      benefits: ["Pointage auto", "SMS parents", "Justificatifs"]
    },
    {
      title: "Espace numérique",
      desc: "Plateforme collaborative avec partage de documents et devoirs en ligne",
      icon: "☁️",
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
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#00adee' }}>
            <span>S</span><span>C</span><span>H</span><span>O</span><span>O</span><span>L</span><span>I</span><span>F</span><span>Y</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Fonctionnalités <span style={{ color: '#00adee' }}>Complètes</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez toutes les fonctionnalités qui font de SCHOOLIFY la solution idéale 
            pour moderniser et simplifier la gestion de votre établissement scolaire
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:shadow-md hover:scale-105'
              }`}
              style={activeCategory === category.id 
                ? { backgroundColor: '#00adee' }
                : { border: '2px solid #e5e7eb' }
              }
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold mb-2" style={{ color: '#00adee' }}>12+</div>
            <div className="text-gray-600 font-medium">Modules</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold mb-2" style={{ color: '#1b75bb' }}>500+</div>
            <div className="text-gray-600 font-medium">Établissements</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold mb-2" style={{ color: '#fdc500' }}>99.9%</div>
            <div className="text-gray-600 font-medium">Disponibilité</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold mb-2" style={{ color: '#00adee' }}>24/7</div>
            <div className="text-gray-600 font-medium">Support</div>
          </div>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-opacity-30 transform hover:-translate-y-2"
              style={{ '--hover-border-color': index % 3 === 0 ? '#00adee' : index % 3 === 1 ? '#1b75bb' : '#fdc500' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = index % 3 === 0 ? '#00adee' : index % 3 === 1 ? '#1b75bb' : '#fdc500';
                e.currentTarget.style.borderOpacity = '0.3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              {/* Icône avec background coloré */}
              <div className="relative mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: index % 3 === 0 ? '#00adee' : index % 3 === 1 ? '#1b75bb' : '#fdc500' }}
                >
                  <span className="text-white text-2xl">{feature.icon}</span>
                </div>
                {/* Badge catégorie */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full" 
                     style={{ backgroundColor: index % 3 === 0 ? '#fdc500' : index % 3 === 1 ? '#00adee' : '#1b75bb' }}></div>
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
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ backgroundColor: index % 3 === 0 ? '#00adee' : index % 3 === 1 ? '#1b75bb' : '#fdc500' }}
                    ></div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Bouton "En savoir plus" */}
              <button 
                className="mt-6 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                style={{ backgroundColor: index % 3 === 0 ? '#00adee' : index % 3 === 1 ? '#1b75bb' : '#fdc500' }}
              >
                En savoir plus
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white p-12 rounded-3xl shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Prêt à transformer votre établissement ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez comment SCHOOLIFY peut simplifier votre gestion quotidienne 
            et améliorer l'expérience de toute votre communauté éducative.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#00adee' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#1b75bb'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#00adee'}
            >
              Demander une démonstration
            </button>
            
            <button 
              className="border-2 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-md bg-white"
              style={{ borderColor: '#00adee', color: '#00adee' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f0f9ff';
                e.target.style.borderColor = '#1b75bb';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.borderColor = '#00adee';
              }}
            >
              Voir les tarifs
            </button>
          </div>

          {/* Témoignage */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl border-l-4" style={{ borderColor: '#00adee' }}>
            <p className="text-gray-600 italic mb-4">
              "SCHOOLIFY a révolutionné notre façon de gérer l'établissement. 
              Gain de temps énorme et parents ravis !"
            </p>
            <div className="flex items-center justify-center space-x-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#00adee' }}
              >
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