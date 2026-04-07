import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Users, 
  Map, 
  BarChart3, 
  Clock, 
  Shield, 
  Headphones, 
  FileText,
  ArrowRight 
} from 'lucide-react';

const FeaturesOverview: React.FC = () => {
  const features = [
    {
      icon: Monitor,
      title: 'Real-Time Builds',
      description: 'Build an exercise or real-world event and respond in real-time.',
    },
    {
      icon: Users,
      title: 'Multi-Agency Coordination',
      description: 'Train teams to work together across different organizations and jurisdictions.',
    },
    {
      icon: Map,
      title: 'Interactive Mapping',
      description: 'Use detailed geographic information systems for accurate incident visualization.',
    },
    {
      icon: BarChart3,
      title: 'Performance and Comprehensive Lesson Learned',
      description: 'Evaluate Personnel and Agency perfomance, use real Lessons Learned with actionable items.',
    },
    {
      icon: Clock,
      title: '24/7 Exercises',
      description: 'Access your exercises and training modules anytime, anywhere with cloud-based platform availability.',
    },
    {
      icon: Shield,
      title: 'ICS Compliant',
      description: 'Fully aligned with Incident Command System standards and Canadian emergency protocols.',
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: 'Get guidance from certified emergency management professionals and trainers.',
    },
    {
      icon: FileText,
      title: 'Comprehensive Reporting',
      description: 'Generate detailed after-action reports for continuous improvement and compliance.',
    }
  ];

  return (
    <section className="section-padding bg-exrsim-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Exercise Creating Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            EXRSIM combines cutting-edge technology with proven emergency management 
            principles to deliver the most effective training experience available.
          </p>
          <Link
            to="/features"
            className="inline-flex items-center text-exrsim-orange hover:text-exrsim-orange-light transition-colors"
          >
            <span className="font-semibold">View All Features</span>
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-exrsim-orange/20 rounded-full flex items-center justify-center group-hover:bg-exrsim-orange/30 transition-colors">
                  <feature.icon className="h-8 w-8 text-exrsim-orange" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Demo CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-exrsim-orange/10 to-exrsim-orange-light/10 rounded-lg p-8 border border-exrsim-orange/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Experience EXRSIM?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              See how our platform can transform your organization's emergency preparedness. 
              Schedule a personalized demonstration with our experts.
            </p>
            <Link
              to="/contact"
              className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-2"
            >
              <span>Schedule Demo</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;