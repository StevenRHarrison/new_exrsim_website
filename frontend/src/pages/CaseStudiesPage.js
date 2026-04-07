import React from 'react';
import { CheckCircle, ArrowRight, Users, Clock, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'Calgary Flood Response Enhancement',
      organization: 'City of Calgary Emergency Management Agency',
      sector: 'Municipal Government',
      challenge: 'Following the devastating 2013 floods, Calgary needed to enhance their flood response capabilities and multi-agency coordination.',
      solution: 'Implemented comprehensive flood simulation training using EXRSIM\'s hydrological modeling and multi-jurisdictional coordination features.',
      results: [
        'Reduced emergency response activation time by 45%',
        'Improved inter-agency coordination effectiveness by 60%',
        'Enhanced evacuation procedures efficiency by 35%',
        'Trained 150+ emergency responders across 8 agencies'
      ],
      metrics: {
        participants: '150+',
        timeReduction: '45%',
        agencies: '8',
        duration: '6 months'
      },
      image:("flooding.jpg") // 'https://images.unsplash.com/photo-1574482620747-8cfb4b85586d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Wildfire Response Coordination',
      organization: 'Alberta Wildfire Management',
      sector: 'Provincial Government',
      challenge: 'Need for improved coordination between provincial wildfire services, municipalities, and First Nations communities during major wildfire events.',
      solution: 'Developed specialized wildfire simulation scenarios incorporating Indigenous community protocols and multi-jurisdictional command structures.',
      results: [
        'Improved evacuation coordination by 50%',
        'Enhanced Indigenous community engagement protocols',
        'Reduced property loss through better resource allocation',
        'Established standardized communication procedures'
      ],
      metrics: {
        participants: '200+',
        timeReduction: '50%',
        agencies: '12',
        duration: '8 months'
      },
      image: ("wildfire.jpg") //'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Hospital Mass Casualty Preparedness',
      organization: 'Toronto General Hospital Network',
      sector: 'Healthcare',
      challenge: 'Enhancing mass casualty incident response and surge capacity management across multiple hospital sites.',
      solution: 'Implemented comprehensive mass casualty simulations with patient flow modeling and inter-facility coordination training.',
      results: [
        'Increased surge capacity response time by 40%',
        'Improved patient triage accuracy by 30%',
        'Enhanced staff confidence in emergency procedures',
        'Reduced patient transfer coordination time by 25%'
      ],
      metrics: {
        participants: '300+',
        timeReduction: '40%',
        agencies: '5',
        duration: '4 months'
      },
      image: ("mass_casuality.jpg") //'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Pipeline Emergency Response',
      organization: 'TransCanada Pipeline Ltd.',
      sector: 'Energy',
      challenge: 'Standardizing emergency response procedures across thousands of kilometers of pipeline infrastructure spanning multiple provinces.',
      solution: 'Created comprehensive pipeline incident simulation scenarios with environmental impact modeling and regulatory compliance training.',
      results: [
        'Standardized response procedures across all regions',
        'Reduced incident containment time by 35%',
        'Improved environmental protection measures',
        'Enhanced regulatory compliance reporting'
      ],
      metrics: {
        participants: '180+',
        timeReduction: '35%',
        agencies: '6',
        duration: '10 months'
      },
      image: ("oil_pipeline.jpg") //'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Winter Storm Emergency Management',
      organization: 'Maritime Emergency Management Organization',
      sector: 'Regional Government',
      challenge: 'Improving coordination for severe winter storm response across the Maritime provinces, including power restoration and emergency shelter management.',
      solution: 'Developed region-specific winter storm scenarios with power grid modeling and cross-provincial resource sharing protocols.',
      results: [
        'Improved inter-provincial coordination by 55%',
        'Reduced power restoration planning time by 30%',
        'Enhanced emergency shelter management efficiency',
        'Established standardized resource sharing agreements'
      ],
      metrics: {
        participants: '120+',
        timeReduction: '55%',
        agencies: '9',
        duration: '5 months'
      },
      image:("icestorm.jpeg") //'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="pt-24 sm:pt-22 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-exrsim-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Discover how organizations across Canada have transformed their emergency 
            preparedness capabilities with EXRSIM training solutions.
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-exrsim-orange mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-exrsim-orange mb-2">42%</div>
              <div className="text-gray-300">Avg Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-exrsim-orange mb-2">500+</div>
              <div className="text-gray-300">Organizations Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-exrsim-orange mb-2">50k+</div>
              <div className="text-gray-300">Personnel Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-exrsim-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-exrsim-dark rounded-lg border border-gray-700 overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div
                      className="w-full h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${study.image})` }}
                    >
                      <div className="absolute inset-0 bg-exrsim-dark/60" />
                      <div className="absolute bottom-4 left-4 bg-exrsim-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                        {study.sector}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                    <div className="text-exrsim-orange font-semibold mb-6">{study.organization}</div>

                    {/* Challenge */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Challenge</h4>
                      <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Solution</h4>
                      <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                      <div className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-exrsim-orange mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center bg-exrsim-gray/50 rounded-lg p-3">
                        <Users className="h-5 w-5 text-exrsim-orange mx-auto mb-1" />
                        <div className="text-lg font-bold text-white">{study.metrics.participants}</div>
                        <div className="text-xs text-gray-400">Participants</div>
                      </div>
                      <div className="text-center bg-exrsim-gray/50 rounded-lg p-3">
                        <TrendingUp className="h-5 w-5 text-exrsim-orange mx-auto mb-1" />
                        <div className="text-lg font-bold text-white">{study.metrics.timeReduction}</div>
                        <div className="text-xs text-gray-400">Time Reduction</div>
                      </div>
                      <div className="text-center bg-exrsim-gray/50 rounded-lg p-3">
                        <Award className="h-5 w-5 text-exrsim-orange mx-auto mb-1" />
                        <div className="text-lg font-bold text-white">{study.metrics.agencies}</div>
                        <div className="text-xs text-gray-400">Agencies</div>
                      </div>
                      <div className="text-center bg-exrsim-gray/50 rounded-lg p-3">
                        <Clock className="h-5 w-5 text-exrsim-orange mx-auto mb-1" />
                        <div className="text-lg font-bold text-white">{study.metrics.duration}</div>
                        <div className="text-xs text-gray-400">Duration</div>
                      </div>
                    </div>
                  </div>
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
            Ready to Join These Success Stories?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let EXRSIM help your organization achieve similar improvements in 
            emergency preparedness and response capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Start Your Success Story</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/features"
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
            >
              Explore Platform Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;