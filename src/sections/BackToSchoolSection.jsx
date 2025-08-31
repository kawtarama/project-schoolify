import React from 'react';

const BackToSchoolSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image à gauche */}
          <div className="relative">
            <div 
              className="relative p-8 rounded-3xl shadow-2xl"
              style={{ backgroundColor: '#00adee' }}
            >
              {/* Papier froissé avec texte "Back to School" */}
              <div className="bg-gray-100 p-12 rounded-2xl relative overflow-hidden shadow-inner transform rotate-1 hover:rotate-0 transition-transform duration-300">
                {/* Effet papier froissé */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-80"></div>
                <div className="absolute top-4 left-4 w-16 h-16 bg-gray-200/50 rounded-full blur-xl"></div>
                <div className="absolute bottom-8 right-8 w-24 h-12 bg-gray-200/50 rounded-lg blur-lg"></div>
                
                {/* Texte Back to School */}
                <div className="relative z-10 text-center">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 transform -rotate-1">
                    BACK TO
                  </h2>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 transform rotate-1">
                    SCHOOL
                  </h2>
                  
                  {/* Éléments décoratifs scolaires */}
                  <div className="absolute -top-2 -left-2 text-2xl transform -rotate-12">📚</div>
                  <div className="absolute -top-4 -right-4 text-2xl transform rotate-12">✏️</div>
                  <div className="absolute -bottom-2 -left-4 text-2xl transform rotate-45">🍎</div>
                  <div className="absolute -bottom-4 -right-2 text-2xl transform -rotate-45">📐</div>
                </div>
                
                {/* Lignes de cahier */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-full h-px bg-blue-300"
                      style={{ top: `${20 + i * 10}%` }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Éléments décoratifs autour */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full" style={{ backgroundColor: '#fdc500' }}></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-lg" style={{ backgroundColor: '#1b75bb' }}></div>
              <div className="absolute top-1/2 -left-6 w-6 h-6 rounded-full" style={{ backgroundColor: '#fdc500' }}></div>
            </div>
          </div>

          {/* Contenu texte à droite */}
          <div className="space-y-8">
            {/* En-tête SCHOOLIFY */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm font-bold tracking-widest text-gray-500 uppercase">
                <span>S</span>
                <span>C</span>
                <span>H</span>
                <span>O</span>
                <span>O</span>
                <span>L</span>
                <span>I</span>
                <span>F</span>
                <span>Y</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Gestion complète de votre établissement scolaire
              </h2>
            </div>
            
            {/* Description principale */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Logiciel de gestion établissement scolaire facile à utiliser. Un 
                accompagnement complet pour démarrer... Nos équipes vous assistent 
                pour déployer notre solution : aide au paramétrage, intégration à votre 
                solution, supports de formation, assistance par email ou par téléphone, 
                formations...
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Les fonctions attendues par les écoles, collèges et lycées sont riches et 
                testées.
              </p>
            </div>
            
            {/* Points clés */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: '#00adee' }}
                >
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Déploiement rapide</h4>
                  <p className="text-gray-600">Mise en place en moins de 2 semaines avec formation complète</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: '#1b75bb' }}
                >
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Support dédié</h4>
                  <p className="text-gray-600">Équipe d'experts disponible par email et téléphone</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: '#fdc500' }}
                >
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fonctionnalités complètes</h4>
                  <p className="text-gray-600">Toutes les fonctions pour écoles, collèges et lycées</p>
                </div>
              </div>
            </div>
            
            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                className="text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#00adee' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1b75bb'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#00adee'}
              >
                Découvrir SCHOOLIFY
              </button>
              
              <button 
                className="border-2 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-md"
                style={{ borderColor: '#00adee', color: '#00adee' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f0f9ff';
                  e.target.style.borderColor = '#1b75bb';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.borderColor = '#00adee';
                }}
              >
                Demander une démo
              </button>
            </div>
            
            {/* Badge de confiance */}
            <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#fdc500' }}
                >
                  <span className="text-white text-sm">🏆</span>
                </div>
                <span className="text-sm font-semibold text-gray-700">Solution certifiée</span>
              </div>
              <div className="flex items-center space-x-2">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#00adee' }}
                >
                  <span className="text-white text-sm">🔒</span>
                </div>
                <span className="text-sm font-semibold text-gray-700">Données sécurisées</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Statistiques en bas */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="text-3xl font-bold mb-2" style={{ color: '#00adee' }}>500+</div>
            <div className="text-gray-600 font-medium">Établissements</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="text-3xl font-bold mb-2" style={{ color: '#1b75bb' }}>50K+</div>
            <div className="text-gray-600 font-medium">Élèves</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="text-3xl font-bold mb-2" style={{ color: '#fdc500' }}>99.9%</div>
            <div className="text-gray-600 font-medium">Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-2xl">
            <div className="text-3xl font-bold mb-2" style={{ color: '#00adee' }}>24/7</div>
            <div className="text-gray-600 font-medium">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackToSchoolSection;