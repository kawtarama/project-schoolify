

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/Logo.png'; 

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-gray-900/95 backdrop-blur-sm shadow-xl sticky top-0 z-50 border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/">
//               <img src={logo} alt="Schoolify Logo" className="h-14 w-auto" />
//             </Link>
//           </div>

//           {/* Menu Desktop */}
//           <nav className="hidden md:flex space-x-8">
//             <Link to="/" className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200">
//               Accueil
//             </Link>
//             <Link to="/features" className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200">
//               Fonctionnalités
//             </Link>
//             <Link to="/pricing" className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200">
//               Tarifs
//             </Link>
//             <Link to="/quote" className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200">
//               Devis en ligne
//             </Link>
//             <Link to="/contact" className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200">
//               Contactez-nous
//             </Link>
//           </nav>

//           {/* Bouton Login */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link 
//               to="/login" 
//               className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200 flex items-center space-x-1"
//             >
//               <span>Se connecter</span>
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </Link>
//           </div>

//           {/* Menu Burger Mobile */}
//           <button 
//             className="md:hidden p-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <div className="w-6 h-6 flex flex-col justify-center space-y-1">
//               <div className="w-full h-0.5 bg-gray-300"></div>
//               <div className="w-full h-0.5 bg-gray-300"></div>
//               <div className="w-full h-0.5 bg-gray-300"></div>
//             </div>
//           </button>
//         </div>

//         {/* Menu Mobile */}
//         {isMenuOpen && (
//           <div className="md:hidden border-t border-gray-800 py-4">
//             <div className="flex flex-col space-y-4">
//               <Link to="/" className="text-gray-300 hover:text-[#00adee] font-medium">
//                 Accueil
//               </Link>
//               <Link to="/features" className="text-gray-300 hover:text-[#00adee] font-medium">
//                 Fonctionnalités
//               </Link>
//               <Link to="/pricing" className="text-gray-300 hover:text-[#00adee] font-medium">
//                 Tarifs
//               </Link>
//               <Link to="/quote" className="text-gray-300 hover:text-[#00adee] font-medium">
//                 Devis en ligne
//               </Link>
//               <Link to="/contact" className="text-gray-300 hover:text-[#00adee] font-medium">
//                 Contactez-nous
//               </Link>
//               <Link 
//                 to="/login" 
//                 className="text-gray-300 hover:text-[#00adee] font-medium w-fit flex items-center space-x-1"
//               >
//                 <span>Se connecter</span>
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour scroll vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Fonction pour gérer le clic sur les liens
  const handleNavClick = () => {
    scrollToTop();
    setIsMenuOpen(false); // Fermer le menu mobile
  };

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm shadow-xl sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" onClick={scrollToTop}>
              <img src={logo} alt="Schoolify Logo" className="h-14 w-auto" />
            </Link>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              onClick={handleNavClick}
              className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200"
            >
              Accueil
            </Link>
            <Link 
              to="/features" 
              onClick={handleNavClick}
              className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200"
            >
              Fonctionnalités
            </Link>
            <Link 
              to="/pricing" 
              onClick={handleNavClick}
              className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200"
            >
              Tarifs
            </Link>

                <Link 
              to="/BlogPage" 
              onClick={handleNavClick}
              className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200"
            >
              Blog
            </Link>
            <Link 
              to="/quote" 
              onClick={handleNavClick}
              className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200"
            >
              Devis en ligne
            </Link>

            <Link 
              to="/contact" 
              onClick={handleNavClick}
              className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200"
            >
              Contactez-nous
            </Link>
          </nav>

          {/* Bouton Login */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              onClick={handleNavClick}
              className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200 flex items-center space-x-1"
            >
              <span>Se connecter</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Menu Burger Mobile */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-gray-300 transition-transform duration-300 ${
                isMenuOpen ? 'transform rotate-45 translate-y-1' : ''
              }`}></div>
              <div className={`w-full h-0.5 bg-gray-300 transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></div>
              <div className={`w-full h-0.5 bg-gray-300 transition-transform duration-300 ${
                isMenuOpen ? 'transform -rotate-45 -translate-y-1' : ''
              }`}></div>
            </div>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={handleNavClick}
                className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200"
              >
                Accueil
              </Link>
              <Link 
                to="/features" 
                onClick={handleNavClick}
                className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200"
              >
                Fonctionnalités
              </Link>
              <Link 
                to="/pricing" 
                onClick={handleNavClick}
                className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200"
              >
                Tarifs
              </Link>


                 <Link 
                to="/BlogPage" 
                onClick={handleNavClick}
                className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200"
              >
                Blog
              </Link>


              <Link 
                to="/quote" 
                onClick={handleNavClick}
                className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200"
              >
                Devis en ligne
              </Link>
              <Link 
                to="/contact" 
                onClick={handleNavClick}
                className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200"
              >
                Contactez-nous
              </Link>
              <Link 
                to="/login" 
                onClick={handleNavClick}
                className="text-gray-300 hover:text-[#00adee] font-medium w-fit flex items-center space-x-1 transition-colors duration-200"
              >
                <span>Se connecter</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Bouton Scroll to Top flottant (optionnel) */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-[#00adee] to-[#1b75bb] hover:from-[#0099d4] hover:to-[#155a9b] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        style={{ display: 'none' }}
        id="scrollToTopBtn"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Script pour afficher/masquer le bouton scroll to top */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', function() {
            const scrollBtn = document.getElementById('scrollToTopBtn');
            if (scrollBtn) {
              if (window.pageYOffset > 300) {
                scrollBtn.style.display = 'block';
              } else {
                scrollBtn.style.display = 'none';
              }
            }
          });
        `
      }} />

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        /* Animation smooth scroll pour tous les navigateurs */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </header>
  );
};

export default Header;