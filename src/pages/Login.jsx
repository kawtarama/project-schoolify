


// import React, { useState } from 'react';
// import logo from '../assets/Logo.png';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Connexion:', formData);
//     alert('Connexion réussie !');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         {/* Logo centré avec halo */}
//         <div className="flex justify-center">
//           <div className="relative">
//             <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
//             <img src={logo} alt="Schoolify Logo" className="relative h-20 w-20 mx-auto" />
//           </div>
//         </div>


//         <form
        
//           className="mt-8 space-y-6 bg-white p-8 rounded-2xl shadow-lg"
//           onSubmit={handleSubmit}
//         ><div className="text-center mb-6">
//         <p className="text-lg md:text-xl font-semibold text-noire -600 drop-shadow-sm">
//             Connectez-vous à votre compte
//         </p>
// </div>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Adresse email
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="votre@email.com"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Mot de passe
//               </label>
//               <input
//                 name="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="••••••••"
//               />
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember-me"
//                 name="remember-me"
//                 type="checkbox"
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//               />
//               <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                 Se souvenir de moi
//               </label>
//             </div>

//             <div className="text-sm">
//               <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
//                 Mot de passe oublié ?
//               </a>
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Se connecter
//             </button>
//           </div>

//           <div className="text-center">
//             <p className="text-sm text-gray-600">
//               Pas encore de compte ?{' '}
//               <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
//                 Demander un accès
//               </a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import logo from '../assets/Logo.png'; // Importez votre logo

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = () => {
    if (formData.email && formData.password) {
      console.log('Données de connexion:', formData);
      alert('Connexion réussie !');
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Éléments géométriques décoratifs en arrière-plan */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-[#00adee]/20 rounded-xl transform rotate-45"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#1b75bb]/20 rounded-xl transform -rotate-12"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-[#fdc500]/10 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-[#00adee]/10 rounded-full blur-sm"></div>
      <div className="absolute top-1/2 left-10 w-8 h-8 bg-[#1b75bb]/10 rounded-full blur-sm"></div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* En-tête avec Logo Photo */}
        <div className="text-center">
          {/* Logo centré avec halo moderne */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              {/* Halo lumineux derrière le logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00adee]/30 to-[#1b75bb]/30 rounded-full blur-3xl opacity-70 scale-150"></div>
              {/* Container du logo avec bordure gradient */}
              <div className="relative w-24 h-24 bg-white rounded-2xl p-2 shadow-2xl border-2 border-transparent bg-gradient-to-r from-[#00adee] to-[#1b75bb] bg-clip-border">
                <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt="Schoolify Logo" 
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Connectez-vous à votre
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00adee] to-[#1b75bb] ml-2">
              compte
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Accédez à votre espace personnel SCHOOLIFY
          </p>
        </div>

        {/* Formulaire de connexion */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 shadow-2xl">
          <div className="space-y-6">
            {/* Email */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400 group-focus-within:text-[#00adee] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00adee] focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                  placeholder="votre.email@exemple.com"
                />
              </div>
            </div>

            {/* Mot de passe */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400 group-focus-within:text-[#00adee] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00adee] focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                  placeholder="Votre mot de passe"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <svg className={`h-5 w-5 transition-colors duration-300 ${showPassword ? 'text-[#00adee]' : 'text-gray-400 hover:text-[#00adee]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Options supplémentaires */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#00adee] focus:ring-[#00adee] border-white/30 rounded bg-white/10"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Se souvenir de moi
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="text-[#00adee] hover:text-[#1b75bb] transition-colors duration-300 font-medium">
                  Mot de passe oublié ?
                </a>
              </div>
            </div>

            {/* Bouton de connexion */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-[#00adee] to-[#1b75bb] hover:from-[#0099d4] hover:to-[#155a9b] text-white py-3 px-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group focus:ring-2 focus:ring-[#00adee] focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <span className="relative z-10">Se connecter</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#fdc500] to-[#00adee] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Séparateur */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-transparent text-gray-400 font-medium">Ou connectez-vous avec</span>
            </div>
          </div>

          {/* Boutons de connexion sociale */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <button className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 group">
              <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">Google</span>
            </button>
            
            <button className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 group">
              <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">Twitter</span>
            </button>
          </div>

          {/* Lien d'inscription */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Vous n'avez pas encore de compte ?{' '}
              <a href="#" className="text-[#00adee] hover:text-[#1b75bb] transition-colors duration-300 font-semibold">
                Créer un compte
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;