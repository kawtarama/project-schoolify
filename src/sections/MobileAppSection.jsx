import React, { useState } from 'react';
import phone from '../assets/phone.png'; // Import de votre photo

const MobileAppSection = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-70 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Photo de téléphone à gauche */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative ">
              {/* Image du téléphone ou fallback */}
              <div className="relative w-800 h-[750px] transform hover:scale-105 transition-transform duration-300">
                
                {!imageError ? (
                  /* Votre vraie photo importée */
                  <img
                    src={phone}
                    alt="Application mobile Schoolify"
                    className="w-full h-full object-contain drop-shadow-2xl"
                    onError={handleImageError}
                  />
                ) : (
                  /* Fallback en cas d'erreur de chargement */
                  <div className="w-full h-full bg-black rounded-[10rem] p-9 shadow-2xl">
                    <div 
                      className="w-full h-full rounded-[2.5rem] flex items-center justify-center"
                      style={{ backgroundColor: '#00adee' }}
                    >
                      <div className="text-center text-white">
                        
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Éléments décoratifs autour de la photo */}
              <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: '#fdc500' }}></div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12 rounded-lg opacity-20 animate-pulse" style={{ backgroundColor: '#1b75bb' }}></div>
              <div className="absolute top-1/2 -left-12 w-8 h-8 rounded-full opacity-30 animate-bounce" style={{ backgroundColor: '#00adee' }}></div>
              
              {/* Badge flottant */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#00adee' }}
                >
                  <span className="text-white text-sm">📱</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu texte à droite */}
          <div className="space-y-8">
            
            {/* Titre */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Schoolify...Pour un meilleur suivi scolaire
              </h2>
            </div>
            
            {/* Descriptions */}
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Schoolify est un progiciel de gestion et suivi pour l'administration des 
                établissements scolaires et leurs élèves, c'est une solution simple, performante et 
                intuitive capable de gérer l'ensemble des processus de la vie scolaire.
              </p>
              
              <p>
                Schoolify est un véritable outil de travail performant qui offre les outils et les 
                fonctionnalités nécessaires pour une bonne gestion totale de vos démarches 
                quotidiennes, une application se suivi scolaire pour les parents, les élèves et les 
                professeurs, une application de géolocalisation de transport scolaire en temps 
                réel avec un système de notification instantanée.
              </p>
            </div>
            
            {/* Fonctionnalités clés */}
            <div className="grid md:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#00adee' }}
                >
                  <span className="text-white text-xl">📊</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Tableaux de bord</h4>
                  <p className="text-gray-600 text-sm">Vue d'ensemble en temps réel</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#1b75bb' }}
                >
                  <span className="text-white text-xl">💬</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Communication</h4>
                  <p className="text-gray-600 text-sm">Messagerie intégrée</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#fdc500' }}
                >
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Géolocalisation</h4>
                  <p className="text-gray-600 text-sm">Suivi transport en direct</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#00adee' }}
                >
                  <span className="text-white text-xl">🔒</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sécurité</h4>
                  <p className="text-gray-600 text-sm">Données protégées RGPD</p>
                </div>
              </div>
            </div>
            
            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button 
                className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                style={{ backgroundColor: '#00adee' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1b75bb'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#00adee'}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.516"/>
                </svg>
                <span>Télécharger l'app</span>
              </button>
              
              <button 
                className="border-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-md flex items-center justify-center space-x-2"
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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-7 4h6"/>
                </svg>
                <span>Voir une démo</span>
              </button>
            </div>
            
            {/* Badges de téléchargement */}
            <div className="flex flex-col space-y-4 pt-8">
              <div className="flex space-x-4">
                {/* App Store */}
                <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Télécharger sur</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
                
                {/* Google Play */}
                <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Disponible sur</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Statistiques */}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;