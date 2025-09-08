

// export default BlogPage;
import React from 'react';
import captureTechnopark from '../assets/blog/techno.png';
// Import your local images
import sayouriRevolution from '../assets/blog/bobea.png';
import marocaineNumerise from '../assets/blog/image.png';
import portraitSokaina from'../assets/blog/le monde.png';
import interviewVideo from '../assets/blog/medias24.png';
import sayouriSimplifies from '../assets/blog/we are.png';
import pitchGeneration from '../assets/blog/pitch.png';
import worldEconomicForum from '../assets/blog/l.png';
import schoolifyInnovation from '../assets/blog/link2.png';
// / Additional media images
import wefNidInnovation from '../assets/blog/lik3.png';
import baoLinkHalim from '../assets/blog/link4.png';
import transformationDigitale from '../assets/blog/start-up.png';
import podcastSalon from '../assets/blog/salon.png';
import youtubeInterview from '../assets/blog/STARTONTV.png';
import africaBusiness from '../assets/blog/FRANK.png';
import cjmCasablanca from '../assets/blog/CLUB.png';
import gitexAfrica from '../assets/blog/asmaa.png';
import baoLinkMohammed from '../assets/blog/mohammed.png';
import orangeDigitalCenter from '../assets/blog/la tribune.png';

const BlogPage = () => {
  const mediaArticles = [
    {
      id: 1,
      title: "Technopark : Schoolify lève 3 MDH pour digitaliser l'éducation",
      image: captureTechnopark,
      link: "https://telquel.ma/sponsors/technopark-schoolify-leve-3-mdh-pour-digitaliser-leducation_1896430",
      source: "TelQuel.ma",
      featured: true
    },
    {
      id: 2,
      title: "Sayouri Soukaina révolutionne l'éducation en Afrique avec Schoolify",
      image: sayouriRevolution,
      link: "https://bobea.net/index.php/2024/04/30/sayouri-soukaina-revolutionne-leducation-en-afrique-avec-schoolify/",
      source: "BOBEA"
    },
    {
      id: 3,
      title: "La marocaine Sayouri numérise la gestion des écoles africaines",
      image: marocaineNumerise,
      link:" https://www.225tech.info/la-marocaine-sayouri-soukaina-numerise-la-gestion-des-ecoles-et-facilite-le-suivi-des-eleves-africains/",
      source: "225Tech"
    },
    {
      id: 4,
      title: "Portrait : Sokaina Sayouri, entrepreneure visionnaire",
      image: portraitSokaina,
      link: "https://lemondefeminin.com/sokaina-sayouri/",
      source: "Le Monde Féminin"
    },
    {
      id: 5,
      title: "Interview vidéo : Sokaina Sayouri présente SCHOOLIFY",
      image: interviewVideo,
      link: "https://www.youtube.com/watch?time_continue=5&v=oKxrlShd6TY&embeds_referring_euri=https%3A%2F%2Fschoolify-edtech.com%2F&source_ve_path=MjM4NTE",
      source: "YouTube",
      isVideo: true
    },
    {
      id: 6,
      title: "Sayouri Soukaina simplifies school management in Africa",
      image: sayouriSimplifies,
      link: "https://www.wearetech.africa/en/fils-uk/tech-stars/sayouri-soukaina-simplifies-school-management-improves-tracking-in-africa",
      source: "WeAreTech Africa"
    },
    {
      id: 7,
      title: "Pitch Generation StartUP reçoit Sokaina Sayouri",
      image: pitchGeneration,
      link: "https://www.lodj.ma/Pitch-Generation-StartUP-recoit-Sokaina-Sayouri-Fondatrice-de-SCHOOLIFY_a43082.html",
      source: "Le Journal"
    },
    {
      id: 8,
      title: "World Economic Forum 2024 - Participation de SCHOOLIFY",
      image: worldEconomicForum,
      link: "https://www.linkedin.com/posts/adil-dani-a600b31aa_wef2024-ewaati-agriminga-activity-7178575541292142592-z83M/?utm_source=share&utm_medium=member_desktop",
      source: "LinkedIn",
      isLinkedIn: true
    },
    {
      id: 9,
      title: "SCHOOLIFY : Innovation dans la gestion scolaire",
      image: schoolifyInnovation,
      link: "https://www.linkedin.com/posts/abderrahim-haddani-baddou-pmp%C2%AE-4489ba51_education-edtech-gestionscolaire-activity-7196878728059076608-saG3/?utm_source=share&utm_medium=member_desktop",
      source: "LinkedIn",
      isLinkedIn: true
    },



     {
      id: 10,
      title: "World Economic Forum 2024 - NID Innovation présente SCHOOLIFY",
      image: wefNidInnovation,
      link: "https://www.linkedin.com/posts/nidinnovation_wef2024-wef2024morocco-worldelectronicforum2024-activity-7177965000928460800-t0X_/?utm_source=share&utm_medium=member_desktop",
      source: "LinkedIn",
      isLinkedIn: true
    },
    {
      id: 11,
      title: "BAO Link - Innovation éducative avec Halim Bahae",
      image: baoLinkHalim,
      link: "https://www.linkedin.com/posts/halimbahae_baolink-bao-link-activity-7142652116459798528-nEQT/?utm_source=share&utm_medium=member_desktop",
      source: "LinkedIn",
      isLinkedIn: true
    },
    {
      id: 12,
      title: "La transformation digitale dans l'éducation",
      image: transformationDigitale,
      link: "https://www.start-up.ma/fondateurs-des-startup/sokaina-sayouri/",
      source: "Start-up",
      isLinkedIn: true
    },
    {
      id: 13,
      title: "Podcast Le Salon Maroc - Sokaina Sayouri",
      image: podcastSalon,
      link: "https://podcast.ausha.co/lesalonmaroc/pitch-generation-startup-recoit-sokaina-sayouri-fondatrice-de-schoolify",
      source: "Le Salon Maroc",
      isPodcast: true
    },
    {
      id: 14,
      title: "Interview YouTube - Vision SCHOOLIFY",
      image: youtubeInterview,
      link: "https://www.youtube.com/watch?v=o5n-VfUVPto",
      source: "YouTube",
      isVideo: true
    },
    {
      id: 15,
      title: "Africa Business - Franck Wodie présente SCHOOLIFY",
      image: africaBusiness,
      link: "https://www.linkedin.com/posts/franck-wodie-102a41223_africa-business-activity-7133237148190691328-7fh0/?utm_source=share&utm_medium=member_desktop",
      source: "LinkedIn",
      isLinkedIn: true
    },
    {
      id: 16,
      title: "CJM Casablanca - Perspectives entrepreneuriales",
      image: cjmCasablanca,
      link: "https://www.linkedin.com/posts/cjmcasablanca_salariaezouentrepreneur-perspectives-flashback-activity-7123231792739831809-f8at/?utm_source=share&utm_medium=member_desktop",
      source: "LinkedIn",
      isLinkedIn: true
    },
    {
      id: 17,
      title: "GITEX Africa - SCHOOLIFY au salon tech",
      image: gitexAfrica,
      link: "https://www.linkedin.com/posts/mahras-asmaa-1603_gitexafrica-startup-morovco-activity-7200628753058668544-en8r/?utm_source=share&utm_medium=member_desktop",
      source: "LinkedIn",
      isLinkedIn: true
    },
    {
      id: 18,
      title: "BAO Link - Mohammed El Badry sur l'innovation éducative",
      image: baoLinkMohammed,
      link: "https://www.linkedin.com/posts/mohammed-elbadry_baolink-bao-link-activity-7142678212391665665-Jp1u/?utm_source=share&utm_medium=member_desktop",
      source: "LinkedIn",
      isLinkedIn: true
    },
    {
      id: 19,
      title: "Orange Digital Center - Innovation marocaine à l'honneur",
      image: orangeDigitalCenter,
      link: "https://www.latribune.fr/africa-tech/2022-03-25/tech-a-rabat-le-10e-orange-digital-center-d-afrique-pour-hisser-haut-l-innovation-marocaine-907019.html",
      source: "La Tribune"
    }
  ];

  const handleCardClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-sm font-semibold tracking-widest uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00adee] to-[#1b75bb]">
              {['B', 'L', 'O', 'G'].map((letter, index) => (
                <span 
                  key={letter} 
                  className="hover:scale-110 transition-transform duration-300"
                >
                  {letter}
                </span>
              ))}
              <span className="mx-4">•</span>
              {['S', 'C', 'H', 'O', 'O', 'L', 'I', 'F', 'Y'].map((letter, index) => (
                <span 
                  key={letter} 
                  className="hover:scale-110 transition-transform duration-300"
                >
                  {letter}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              SCHOOLIFY dans les
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00adee] to-[#1b75bb] ml-3">
                Médias
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez la couverture médiatique de SCHOOLIFY et de sa fondatrice Sokaina Sayouri dans la presse nationale et internationale
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Article à la une */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <div className="w-1 h-8 bg-gradient-to-b from-[#00adee] to-[#1b75bb] rounded-full mr-4"></div>
            À la Une
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer"
               onClick={() => handleCardClick(mediaArticles[0].link)}>
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img 
                  src={mediaArticles[0].image} 
                  alt={mediaArticles[0].title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                    Actualité
                  </span>
                  <span className="ml-3 text-sm font-medium text-[#00adee] bg-blue-50 px-2 py-1 rounded-full">
                    {mediaArticles[0].source}
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#00adee] transition-colors duration-300">
                  {mediaArticles[0].title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  SCHOOLIFY annonce une levée de fonds de 3 millions de dirhams pour accélérer la transformation numérique du secteur éducatif marocain et étendre ses services à l'échelle africaine.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      28 Nov 2024
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      4.2k vues
                    </div>
                  </div>
                  
                  <button className="bg-[#00adee] hover:bg-[#1b75bb] text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
                    Lire l'article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid des autres articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <div className="w-1 h-8 bg-gradient-to-b from-[#1b75bb] to-[#00adee] rounded-full mr-4"></div>
            Autres Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaArticles.slice(1).map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1 group"
                onClick={() => handleCardClick(article.link)}
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition duration-300"
                  />
                  
                  {/* Badge pour les types de contenu */}
                  {article.isVideo && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      Vidéo
                    </div>
                  )}
                  
                  {article.isLinkedIn && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Post
                    </div>
                  )}
                  
                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition duration-300 rounded-t-2xl"></div>
                  
                  {/* Icône de lien externe */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-2">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-sm font-medium text-[#00adee] bg-blue-50 px-2 py-1 rounded-full">
                      {article.source}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-200 line-clamp-2 mb-4">
                    {article.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Lire l'article
                    </span>
                    
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-[#00adee] transition duration-200 transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#00adee] to-[#1b75bb] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Vous êtes journaliste ou média ?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Contactez notre équipe presse pour en savoir plus sur SCHOOLIFY et organiser des interviews avec notre fondatrice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#00adee] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                Kit Presse
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#00adee] transition duration-300">
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;