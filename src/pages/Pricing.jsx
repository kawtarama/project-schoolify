import React, { useState } from 'react';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: { monthly: 0, yearly: 0 },
      description: 'Idéal pour découvrir SCHOOLIFY',
      features: [
        'Jusqu\'à 50 élèves',
        'Gestion de base des élèves',
        'Notes et bulletins simples',
        'Support par email',
        'Stockage 1GB',
        '1 utilisateur administrateur',
        'Rapports de base'
      ],
      limitations: [
        'Pas d\'application mobile',
        'Pas de géolocalisation',
        'Support limité'
      ],
      highlighted: false,
      popular: false,
      buttonText: 'Commencer gratuitement',
      color: '#6b7280'
    },
    {
      id: 'essential',
      name: 'Essential',
      price: { monthly: 49, yearly: 490 },
      description: 'Pour les petites écoles',
      features: [
        'Jusqu\'à 200 élèves',
        'Gestion complète des notes',
        'Communication avec les parents',
        'Planning des cours avancé',
        'Application mobile de base',
        'Support prioritaire',
        'Stockage 10GB',
        '5 utilisateurs',
        'Rapports détaillés',
        'Sauvegarde quotidienne'
      ],
      limitations: [
        'Géolocalisation limitée',
        'Pas d\'API'
      ],
      highlighted: false,
      popular: false,
      buttonText: 'Choisir Essential',
      color: '#00adee'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: { monthly: 99, yearly: 990 },
      description: 'Solution complète recommandée',
      features: [
        'Jusqu\'à 1000 élèves',
        'Toutes les fonctionnalités',
        'Géolocalisation transport complète',
        'Gestion financière avancée',
        'Application mobile premium',
        'Support 24/7',
        'Stockage 50GB',
        'Utilisateurs illimités',
        'Formation incluse',
        'API complète',
        'Personnalisation avancée',
        'Intégrations tierces'
      ],
      limitations: [],
      highlighted: true,
      popular: true,
      buttonText: 'Choisir Professional',
      color: '#1b75bb'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: { monthly: 199, yearly: 1990 },
      description: 'Pour les grandes institutions',
      features: [
        'Élèves illimités',
        'Toutes les fonctionnalités Pro',
        'Personnalisation complète',
        'Intégrations sur mesure',
        'Support dédié',
        'Stockage illimité',
        'Formation sur site',
        'Sauvegarde en temps réel',
        'Sécurité renforcée',
        'SLA garanti 99.9%',
        'Consultant dédié',
        'Multi-établissements'
      ],
      limitations: [],
      highlighted: false,
      popular: false,
      buttonText: 'Nous contacter',
      color: '#fdc500'
    }
  ];

  const addOns = [
    { name: 'Module Cantine', price: 15, description: 'Gestion complète des repas et réservations' },
    { name: 'Module Santé', price: 12, description: 'Suivi médical et dossiers de santé' },
    { name: 'Module RH', price: 25, description: 'Gestion du personnel et planning' },
    { name: 'Stockage Supplémentaire', price: 5, description: '+10GB par mois' }
  ];

  const faqs = [
    {
      question: 'Puis-je changer de plan à tout moment ?',
      answer: 'Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet immédiatement et la facturation est ajustée au prorata.'
    },
    {
      question: 'Y a-t-il un engagement minimum ?',
      answer: 'Aucun engagement pour les plans mensuels. Les plans annuels bénéficient d\'une remise de 17% et nécessitent un engagement d\'un an.'
    },
    {
      question: 'La formation est-elle incluse ?',
      answer: 'Formation en ligne incluse pour tous les plans. Formation sur site incluse pour Professional et Enterprise. Support personnalisé disponible.'
    },
    {
      question: 'Comment fonctionne la période d\'essai ?',
      answer: '30 jours d\'essai gratuit pour tous les plans payants. Aucune carte de crédit requise. Accès complet à toutes les fonctionnalités.'
    },
    {
      question: 'Quels sont les moyens de paiement acceptés ?',
      answer: 'Cartes bancaires (Visa, Mastercard), virements SEPA, et paiements par chèque pour les établissements publics.'
    }
  ];

  const getDiscount = (monthlyPrice) => {
    return Math.round(((monthlyPrice * 12) - (monthlyPrice * 10)) / (monthlyPrice * 12) * 100);
  };

  return (
    <div className="pt-20 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#00adee' }}>
            <span>T</span><span>A</span><span>R</span><span>I</span><span>F</span><span>S</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Tarifs <span style={{ color: '#00adee' }}>transparents</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choisissez le plan qui correspond parfaitement aux besoins de votre établissement. 
            Tous nos plans incluent un essai gratuit de 30 jours.
          </p>
          
          {/* Toggle mensuel/annuel */}
          <div className="inline-flex bg-gray-100 p-1 rounded-2xl">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                billingPeriod === 'monthly' 
                  ? 'bg-white text-gray-900 shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                billingPeriod === 'yearly' 
                  ? 'bg-white text-gray-900 shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annuel
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                -17%
              </span>
            </button>
          </div>
        </div>

        {/* Grille des plans */}
        <div className="grid lg:grid-cols-4 gap-8 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'shadow-2xl scale-105 ring-2 ring-opacity-50'
                  : 'shadow-lg hover:shadow-2xl hover:scale-102'
              }`}
              style={plan.highlighted ? { ringColor: plan.color } : {}}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div 
                    className="text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg"
                    style={{ backgroundColor: '#fdc500' }}
                  >
                    LE PLUS POPULAIRE
                  </div>
                </div>
              )}

              {/* En-tête du plan */}
              <div className="text-center mb-8">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${plan.color}20` }}
                >
                  <div 
                    className="w-8 h-8 rounded-lg"
                    style={{ backgroundColor: plan.color }}
                  ></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  {plan.price[billingPeriod] === 0 ? (
                    <div className="text-4xl font-bold text-gray-900">Gratuit</div>
                  ) : (
                    <div>
                      <div className="text-5xl font-bold mb-1" style={{ color: plan.color }}>
                        {plan.price[billingPeriod]}€
                      </div>
                      <div className="text-gray-600">
                        /{billingPeriod === 'monthly' ? 'mois' : 'an'}
                      </div>
                      {billingPeriod === 'yearly' && (
                        <div className="text-sm text-green-600 font-semibold">
                          Économisez {getDiscount(plan.price.monthly)}%
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Fonctionnalités */}
              <div className="mb-8">
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0"
                        style={{ backgroundColor: `${plan.color}20` }}
                      >
                        <svg className="w-3 h-3" fill={plan.color} viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation, index) => (
                    <div key={index} className="flex items-start opacity-50">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-gray-100">
                        <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-400 text-sm line-through">{limitation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bouton d'action */}
              <button
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.highlighted
                    ? 'text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'border-2 hover:shadow-md'
                }`}
                style={plan.highlighted
                  ? { backgroundColor: plan.color }
                  : { borderColor: plan.color, color: plan.color }
                }
                onMouseEnter={(e) => {
                  if (!plan.highlighted) {
                    e.target.style.backgroundColor = `${plan.color}10`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.highlighted) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {plan.buttonText}
              </button>

              {plan.id !== 'starter' && (
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-500">Essai gratuit 30 jours</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Modules complémentaires</h2>
            <p className="text-gray-600">Ajoutez des fonctionnalités spécialisées à votre plan</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold" style={{ color: '#00adee' }}>
                    {addon.price}€/mois
                  </span>
                  <button 
                    className="text-sm px-4 py-2 rounded-lg font-semibold transition-colors"
                    style={{ backgroundColor: '#00adee', color: 'white' }}
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
            <p className="text-gray-600">Trouvez rapidement les réponses à vos questions</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-md">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-white p-12 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Besoin d'aide pour choisir ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est là pour vous conseiller et vous aider à trouver 
            la solution parfaite pour votre établissement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#00adee' }}
            >
              Parler à un expert
            </button>
            
            <button 
              className="border-2 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-md"
              style={{ borderColor: '#00adee', color: '#00adee' }}
            >
              Demander un devis personnalisé
            </button>
          </div>

          {/* Garanties */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center justify-center space-x-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#00adee' }}
              >
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-gray-700 font-medium">Essai gratuit 30 jours</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#1b75bb' }}
              >
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-gray-700 font-medium">Support inclus</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#fdc500' }}
              >
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-gray-700 font-medium">Aucun engagement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;