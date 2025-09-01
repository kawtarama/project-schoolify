// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/Logo.png";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-4 gap-8 mb-12">
//           <div className="col-span-2 md:col-span-1">
//             {/* ✅ Logo instead of text */}
//             <img
//               src={logo}
//               alt="Schoolify Logo"
//               className="h-12 mb-4" // adjust size (h-12 = 48px high)
//             />

//             <p className="text-gray-300 mb-6">
//               La solution complète pour simplifier la gestion de votre établissement scolaire.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-300 hover:text-blue-400 text-2xl">📘</a>
//               <a href="#" className="text-gray-300 hover:text-blue-400 text-2xl">💼</a>
//               <a href="#" className="text-gray-300 hover:text-blue-400 text-2xl">🐦</a>
//             </div>
//           </div>

//           <div>
//             <h4 className="font-semibold text-lg mb-4">Produit</h4>
//             <ul className="space-y-2">
//               <li><Link to="/features" className="text-gray-300 hover:text-white">Fonctionnalités</Link></li>
//               <li><Link to="/pricing" className="text-gray-300 hover:text-white">Tarifs</Link></li>
//               <li><Link to="/quote" className="text-gray-300 hover:text-white">Demander un devis</Link></li>
//               <li><a href="#" className="text-gray-300 hover:text-white">Documentation</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold text-lg mb-4">Support</h4>
//             <ul className="space-y-2">
//               <li><Link to="/contact" className="text-gray-300 hover:text-white">Nous contacter</Link></li>
//               <li><a href="#" className="text-gray-300 hover:text-white">Centre d'aide</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white">Formation</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white">Statut des services</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold text-lg mb-4">Légal</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-300 hover:text-white">Politique de confidentialité</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white">Conditions générales</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white">Mentions légales</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white">RGPD</a></li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 pt-8 text-center">
//           <p className="text-gray-400">
//             © 2025 SCHOOLIFY. Tous droits réservés.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";


import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* --- Logo + Description --- */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Schoolify Logo" className="h-20 w-auto" />
            </div>
            <p className="text-gray-300 mb-6">
              La solution complète pour simplifier la gestion de votre établissement scolaire.
            </p>

            {/* --- Phone & Email --- */}
            <div className="space-y-2 mb-6">
           <div className="space-y-2 mb-6">
            <p className="flex items-center text-gray-300 space-x-2">
              <FaPhoneAlt className="text-gray-400" />
              <span>+212 5 22 52 09 35</span>
            </p>
            <p className="flex items-center text-gray-300 space-x-2">
              <FaEnvelope className="text-gray-400" />
              <span>contact@schoolify-edtech.com</span>
            </p>
          </div>
                      </div>

            
            {/* --- Socials --- */}
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/schoolifyacademy/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 text-2xl transition-colors duration-300">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 text-2xl transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 text-2xl transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 text-2xl transition-colors duration-300">
              <FaFacebook />
            </a>
          </div>

          </div>

          {/* --- Produit --- */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Produit</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-300 hover:text-white">Fonctionnalités</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white">Tarifs</Link></li>
              <li><Link to="/quote" className="text-gray-300 hover:text-white">Demander un devis</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Documentation</a></li>
            </ul>
          </div>

          {/* --- Support --- */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Nous contacter</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Formation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Statut des services</a></li>
            </ul>
          </div>

          {/* --- Légal --- */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Conditions générales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Mentions légales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">RGPD</a></li>
            </ul>
          </div>
        </div>

        {/* --- Bottom --- */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SCHOOLIFY. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
