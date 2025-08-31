import React from 'react';

const TeamSection = () => {
  // Données de l'équipe SCHOOLIFY
  const teamMembers = [
    {
      name: "Marie Dubois",
      position: "CEO & Fondatrice",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      social: {
       
      }
    },
    {
      name: "Ahmed El Mansouri", 
      position: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      social: {
     
      }
    },
    {
      name: "Sophie Martin",
      position: "Directrice Produit",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      social: {
       
      }
    },
    {
      name: "David Chen",
      position: "Responsable Support",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      social: {
        // twitter: "#",
        // linkedin: "#"
      }
    },
    {
      name: "Fatima Benali",
      position: "Responsable Marketing",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      social: {
        
      }
    },
    {
      name: "Thomas Leroy",
      position: "Développeur Senior",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      social: {
       
      }
    }
  ];

  return (
    <section className="py-40 bg-gradient-to-br from-[#00adee]/20 via-white to-[#1b75bb]/10">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet our leadership
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a dynamic group of individuals who are passionate about what we do 
            and dedicated to delivering the best results for our clients.
          </p>
        </div>

        {/* Grille de l'équipe */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              
              {/* Photo circulaire */}
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback avec initiales si l'image ne charge pas
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `
                        <div class="w-full h-full rounded-full flex items-center justify-center text-white text-4xl font-bold" 
                             style="background: linear-gradient(135deg, #00adee 0%, #1b75bb 100%)">
                          ${member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      `;
                    }}
                  />
                </div>
                
                {/* Bordure décorative */}
                <div 
                  className="absolute inset-0 rounded-full border-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: index % 3 === 0 ? '#00adee' : index % 3 === 1 ? '#1b75bb' : '#fdc500' }}
                ></div>
              </div>

              {/* Informations */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium">
                  {member.position}
                </p>

                {/* Réseaux sociaux */}
               
              </div>
            </div>
          ))}
        </div>

       

      </div>
    </section>
  );
};

export default TeamSection;