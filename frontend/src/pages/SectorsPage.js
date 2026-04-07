import React from 'react';
import { 
  Zap, 
  Truck, 
  TreePine, 
  Building, 
  Hospital, 
  Factory,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SectorsPage: React.FC = () => {
  const sectors = [
    {
      icon: Zap,
      title: 'Energy & Utilities',
      description: 'Comprehensive emergency response exercises for Canada\'s critical energy infrastructure.',
      features: [
        'Power grid emergency response and restoration',
        'Pipeline incident management and containment',
        'Nuclear facility emergency preparedness and evacuation',
        'Renewable energy system failure response and recovery',
        'HAZMAT incidents involving energy production and distribution',
        'Cyber security incident response for critical infrastructure'
      ],
      // caseStudy: 'Hydro-Québec reduced emergency response time by 40% using EXRSIM training scenarios.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Truck,
      title: 'Transportation',
      description: 'Multi-modal transportation emergency response training for air, rail, marine, and highway incidents.',
      features: [
        'Rail derailment response and hazardous material containment',
        'Aviation emergency response at airports and crash sites',
        'Marine incident response in ports and waterways',
        'Highway incident management and traffic control',
        'Mass transit emergency evacuation procedures',
        'Cross-border transportation incident coordination'
      ],
      // caseStudy: 'CN Rail enhanced their emergency response protocols using realistic derailment scenarios.',
      image: ("rail.jpg"), //'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: TreePine,
      title: 'Natural or Man-Made',
      description: 'Exercises for mining, forestry, and resource extraction emergency scenarios.',
      features: [
        'Mine rescue operations and underground emergencies',
        'Forestry fire suppression and evacuation',
        'Oil and gas field emergencies',
        'Remote site medical emergency coordination',
        'Environmental spill response and containment',
        'Wildlife-human conflict emergency management'
      ],
      caseStudy: 'Teck Resources improved their mine safety response time by 35% through EXRSIM training.',
      image: ("flooding.jpg"), //'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Building,
      title: 'Government',
      description: 'Multi-level government emergency management and public safety coordination exercises.',
      features: [
        'Multi-agency incident command and coordination',
        'Emergency operations center management',
        'Public warning and evacuation procedures',
        'Crisis communication and media management',
        'Inter-jurisdictional emergency response coordination',
        'Business continuity and critical service protection'
      ],
      // caseStudy: 'City of Calgary enhanced their flood response capabilities through comprehensive EOC training.',
      image: ("emerg_ops_center.jpeg"), //'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Hospital,
      title: 'Healthcare',
      description: 'Hospital and healthcare system emergency preparedness and mass casualty incident exercises.',
      features: [
        'Mass casualty incident triage and treatment',
        'Hospital evacuation and patient transfer protocols',
        'Pandemic response and infection control procedures',
        'Medical surge capacity planning and implementation',
        'Healthcare facility security and lockdown procedures',
        'Mental health crisis response and support systems'
      ],
      image: ("triage.jpeg"), //'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Factory,
      title: 'Industry',
      description: 'Industrial emergency response exercises for manufacturing facilities and chemical plants.',
      features: [
        'Chemical spill response and containment procedures',
        'Industrial fire suppression and evacuation',
        'Workplace violence prevention and response',
        'Equipment failure emergency protocols',
        'Worker injury and rescue operations',
        'Environmental compliance during emergencies'
      ],
      // caseStudy: 'Bombardier reduced workplace incident response time by 50% using EXRSIM protocols.',
      image: ("hazmat.jpg"), //'https://images.unsplash.com/photo-1565514158723-4f31a1f0cfd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="pt-24 sm:pt-22 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-exrsim-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Industry Expertise
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            EXRSIM provides specialized emergency response training tailored to the unique 
            challenges and requirements of different industry sectors across Canada.
          </p>
          <Link
            to="/contact"
            className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-2"
          >
            <span>Discuss Your Sector Needs</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Sectors Detail */}
      <section className="section-padding bg-exrsim-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {sectors.map((sector, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-exrsim-orange rounded-lg flex items-center justify-center mr-4">
                      <sector.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-white">{sector.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {sector.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {sector.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-exrsim-orange mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Case Study */}
                  {/* <div className="bg-exrsim-dark/50 rounded-lg p-6 border border-gray-700">
                    <h4 className="text-lg font-bold text-exrsim-orange mb-3">Success Story</h4>
                    <p className="text-gray-300 italic">"{sector.caseStudy}"</p>
                  </div> */}
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="rounded-lg shadow-2xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-exrsim-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Enhance Your Sector's Emergency Preparedness?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Contact EXRSIM on how we can customize the application
            for your sector's specific emergency response requirements.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/case-studies"
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>View Case Studies</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default SectorsPage;