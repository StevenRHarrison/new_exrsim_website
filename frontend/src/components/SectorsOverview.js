import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Truck, TreePine, Building, Hospital, Factory, ArrowRight } from 'lucide-react';

const SectorsOverview: React.FC = () => {
  const sectors = [
    {
      icon: Zap,
      title: 'Energy & Utilities',
      description: 'Power grid resilience, pipeline emergency response, and utility infrastructure protection.',
      features: ['Grid Emergency Response', 'Pipeline Incidents', 'Nuclear Safety', 'Renewable Energy'],
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Truck,
      title: 'Transportation',
      description: 'Rail, aviation, marine, and highway emergency response coordination and management.',
      features: ['Rail Incidents', 'Aviation Emergencies', 'Marine Safety', 'Highway Response'],
      image: ("rail.jpg"), //'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: TreePine,
      title: 'Natural and Industrial',
      description: 'Mining, forestry, and resource extraction emergency preparedness and response.',
      features: ['Mining Safety', 'Forestry Operations', 'Environmental Response', 'Remote Site Management'],
      image: ("flooding.jpg"), //'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Building,
      title: 'Government',
      description: 'Federal, provincial, and municipal emergency management and public safety coordination.',
      features: ['Public Safety', 'Crisis Communication', 'Multi-Agency Coordination', 'Civil Protection'],
      image: ("municipality.jpg"), //'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Hospital,
      title: 'Healthcare',
      description: 'Hospital emergency preparedness, mass casualty incidents, and healthcare system resilience.',
      features: ['Mass Casualty', 'Hospital Evacuation', 'Pandemic Response', 'Medical Surge'],
      image: ("triage.jpeg"), //'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industrial emergency response, hazmat incidents, and workplace safety management.',
      features: ['HAZMAT Response', 'Industrial Fire', 'Chemical Spills', 'Workplace Safety'],
      image: ("hazmat.jpg"), //'https://images.unsplash.com/photo-1565514158723-4f31a1f0cfd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
    
  ];

  return (
    <section className="section-padding bg-exrsim-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Sector Coverage
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            EXRSIM can help industries and sectors across Canada, develop exercises or respond to real world emergencies 
in accordance with their unique challenges and requirements.
          </p>
          <Link
            to="/sectors"
            className="inline-flex items-center text-exrsim-orange hover:text-exrsim-orange-light transition-colors"
          >
            <span className="font-semibold">Explore All Sectors where EXRSIM can help</span>
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="card-hover bg-exrsim-gray rounded-lg overflow-hidden border border-gray-700">
              {/* Image */}
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${sector.image})` }}>
                <div className="absolute inset-0 bg-exrsim-dark/60" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-exrsim-orange rounded-lg flex items-center justify-center">
                  <sector.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{sector.title}</h3>
                <p className="text-gray-400 mb-4">{sector.description}</p>
                
                {/* Features */}
                <div className="space-y-2">
                  {sector.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-exrsim-orange rounded-full mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="mt-6">
                  <Link
                    to="/sectors"
                    className="text-exrsim-orange hover:text-exrsim-orange-light transition-colors font-medium flex items-center"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsOverview;