// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/Logo.png'; 

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//         <div className="flex items-center">
//   <Link to="/">
//     <img src={logo} alt="Schoolify Logo" className="h-12 w-auto" />
//   </Link>
// </div>
//           {/* Menu Desktop */}
//           <nav className="hidden md:flex space-x-8">
//             <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
//               Accueil
//             </Link>
//             <Link to="/features" className="text-gray-700 hover:text-blue-600 font-medium">
//               Fonctionnalités
//             </Link>
//             <Link to="/pricing" className="text-gray-700 hover:text-blue-600 font-medium">
//               Tarifs
//             </Link>
//             <Link to="/quote" className="text-gray-700 hover:text-blue-600 font-medium">
//               Devis en ligne
//             </Link>
//             <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
//               Contactez-nous
//             </Link>
//           </nav>

//           {/* Bouton Login */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link 
//               to="/login" 
//               className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium"
//             >
//               Se connecter
//             </Link>
//           </div>

//           {/* Menu Burger Mobile */}
//           <button 
//             className="md:hidden p-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <div className="w-6 h-6 flex flex-col justify-center space-y-1">
//               <div className="w-full h-0.5 bg-gray-600"></div>
//               <div className="w-full h-0.5 bg-gray-600"></div>
//               <div className="w-full h-0.5 bg-gray-600"></div>
//             </div>
//           </button>
//         </div>

//         {/* Menu Mobile */}
//         {isMenuOpen && (
//           <div className="md:hidden border-t border-gray-200 py-4">
//             <div className="flex flex-col space-y-4">
//               <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
//                 Accueil
//               </Link>
//               <Link to="/features" className="text-gray-700 hover:text-blue-600 font-medium">
//                 Fonctionnalités
//               </Link>
//               <Link to="/pricing" className="text-gray-700 hover:text-blue-600 font-medium">
//                 Tarifs
//               </Link>
//               <Link to="/quote" className="text-gray-700 hover:text-blue-600 font-medium">
//                 Devis en ligne
//               </Link>
//               <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
//                 Contactez-nous
//               </Link>
//               <Link 
//                 to="/login" 
//                 className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium w-fit"
//               >
//                 Se connecter
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

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm shadow-xl sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Schoolify Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200">
              Accueil
            </Link>
            <Link to="/features" className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200">
              Fonctionnalités
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200">
              Tarifs
            </Link>
            <Link to="/quote" className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200">
              Devis en ligne
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-[#00adee] font-medium transition-colors duration-200">
              Contactez-nous
            </Link>
          </nav>

          {/* Bouton Login */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
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
              <div className="w-full h-0.5 bg-gray-300"></div>
              <div className="w-full h-0.5 bg-gray-300"></div>
              <div className="w-full h-0.5 bg-gray-300"></div>
            </div>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-[#00adee] font-medium">
                Accueil
              </Link>
              <Link to="/features" className="text-gray-300 hover:text-[#00adee] font-medium">
                Fonctionnalités
              </Link>
              <Link to="/pricing" className="text-gray-300 hover:text-[#00adee] font-medium">
                Tarifs
              </Link>
              <Link to="/quote" className="text-gray-300 hover:text-[#00adee] font-medium">
                Devis en ligne
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-[#00adee] font-medium">
                Contactez-nous
              </Link>
              <Link 
                to="/login" 
                className="text-gray-300 hover:text-[#00adee] font-medium w-fit flex items-center space-x-1"
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
    </header>
  );
};

export default Header;