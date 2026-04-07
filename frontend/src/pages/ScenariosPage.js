import React from 'react';
import { 
  Flame, 
  CloudSnow, 
  Waves, 
  Wind, 
  Mountain, 
  Zap,
  Plane,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ScenariosPage: React.FC = () => {
  const scenarios = [
    {
      icon: Flame,
      title: 'Wildfire Emergency Response',
      // severity: 'High',
      // duration: '3-7 days',
      // participants: '50-200',
      description: 'Wildfire exercise build or respond with real time information in order to have ICS develop evacuation, suppression coordination, and inter-agency communication cooperation response.',
      details: [
        'Wildfire response with Objectives, Strategies and Tactics',
        'Establish and manage evacuation zones thru mapping',
        'Air and ground resource coordination',
        'Plan and prioritize structure and property protection',
        'Smoke management and air quality monitoring with included weather apps',
        'Community interface and public communication'
      ],
      canadianContext: 'Based on Alberta and British Columbia wildfire patterns with realistic terrain and weather conditions.',
      image: ("wildfire.jpg"),  //'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: CloudSnow,
      title: 'Ice Storm Emergency',
      // severity: 'Critical',
      // duration: '5-10 days',
      // participants: '30-150',
      description: 'Multi-jurisdictional response to severe ice storms affecting power infrastructure and transportation.',
      details: [
        'Power grid failure response and restoration prioritization',
        'Warming center setup and refugee management',
        'Tree removal and road clearance operations',
        'Medical emergency response in extreme conditions',
        'Supply chain disruption management',
        'Long-term community support coordination'
      ],
      canadianContext: 'Based on the 1998 Eastern Canada ice storm with realistic infrastructure challenges.',
      image: ("icestorm.jpeg"), //'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Waves,
      title: 'Flood Response Management',
      // severity: 'High',
      // duration: '2-5 days',
      // participants: '40-180',
      description: 'River and urban flooding scenarios requiring evacuation, rescue operations, and infrastructure protection.',
      details: [
        'Flood forecasting and early warning systems',
        'Sandbag operations and temporary flood barriers',
        'Swift water rescue and boat operations',
        'Mass evacuation and shelter management',
        'Dam and levee monitoring and response',
        'Environmental contamination assessment'
      ],
      canadianContext: 'Based on Manitoba Red River floods and Southern Alberta flood events.',
      image: ("flooding.jpg"), //'https://images.unsplash.com/photo-1574482620747-8cfb4b85586d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Wind,
      title: 'Tornado Response',
      // severity: 'Critical',
      // duration: '12-48 hours',
      // participants: '25-100',
      description: 'Rapid response to tornado touchdowns including search and rescue, damage assessment, and community recovery.',
      details: [
        'Tornado warning and shelter-in-place procedures',
        'Urban search and rescue in damaged structures',
        'Mass casualty triage and medical response',
        'Damage assessment and structural evaluation',
        'Utility restoration prioritization',
        'Debris removal and road clearance'
      ],
      canadianContext: 'Simulates Southern Ontario and Prairie tornado scenarios with Canadian building standards.',
      image: ("bad_wx.jpg"), //'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Mountain,
      title: 'Avalanche Emergency',
      // severity: 'Critical',
      // duration: '6-24 hours',
      // participants: '15-60',
      description: 'Mountain rescue operations including avalanche search and rescue, medical evacuation, and risk assessment.',
      details: [
        'Avalanche risk assessment and forecasting',
        'Backcountry search and rescue operations',
        'Medical treatment in extreme cold conditions',
        'Helicopter evacuation coordination',
        'Multiple victim triage and treatment',
        'Family notification and media management'
      ],
      canadianContext: 'Features Rocky Mountain and Coastal Range terrain with realistic avalanche conditions.',
      image: ("avalanche.jpg")
    },
    {
      icon: Zap,
      title: 'Cyber Infrastructure Attack',
      // severity: 'High',
      // duration: '1-3 days',
      // participants: '20-80',
      description: 'Critical infrastructure cyber attack response affecting power grid, communications, and emergency services.',
      details: [
        'Cyber incident detection and assessment',
        'Critical infrastructure isolation and protection',
        'Alternative communication system activation',
        'Public safety during system failures',
        'Economic impact assessment and mitigation',
        'Recovery and system restoration procedures'
      ],
      canadianContext: 'Addresses threats to Canadian critical infrastructure with realistic attack vectors.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ,
  {
      icon: Plane,
      title: 'Aviation Emergency',
      // severity: 'High',
      // duration: '1-3 days',
      // participants: '20-80',
      description: 'Aircraft Emergencies on or off Airfields',
      details: [
        'Aircraft accident and assessment',
        'OnScene Command Post',
        'Communication system activation',
        'Public safety and evacuation',
        'First responders drills and execution',
        'Airfield recovery and restoration procedures'
      ],
      canadianContext: 'Train and exercise airport agencies and infrastructure to respond',
      image: ("aircraft_incident.jpeg")
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'text-red-400 bg-red-900/20';
      case 'High': return 'text-orange-400 bg-orange-900/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-900/20';
      default: return 'text-green-400 bg-green-900/20';
    }
  };

  return (
    <div className="pt-24 sm:pt-22 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-exrsim-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Emergency Scenarios
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Build realistic, challenging scenarios designed to test and improve emergency response 
            capabilities across Canada's diverse geographic and climatic conditions.
          </p>
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-exrsim-gray rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-exrsim-orange mb-1">100+</div>
              <div className="text-gray-300">Scenario Types</div>
            </div>
            <div className="bg-exrsim-gray rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-exrsim-orange mb-1">13</div>
              <div className="text-gray-300">Provinces Covered</div>
            </div>
            <div className="bg-exrsim-gray rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-exrsim-orange mb-1">24/7</div>
              <div className="text-gray-300">Availability</div>
            </div>
            <div className="bg-exrsim-gray rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-exrsim-orange mb-1">Real-time</div>
              <div className="text-gray-300">Exercises</div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Scenarios Grid */}
      <section className="section-padding bg-exrsim-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {scenarios.map((scenario, index) => (
              <div key={index} className="bg-exrsim-dark rounded-lg border border-gray-700 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="h-64 lg:h-auto">
                    <div
                      className="w-full h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${scenario.image})` }}
                    >
                      <div className="absolute inset-0 bg-exrsim-dark/40" />
                      <div className="absolute top-4 left-4 w-12 h-12 bg-exrsim-orange rounded-lg flex items-center justify-center">
                        <scenario.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{scenario.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(scenario.severity)}`}>
                        {scenario.severity}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {scenario.description}
                    </p>

                    {/* Scenario Metrics */}
                    {/* <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <Clock className="h-5 w-5 text-exrsim-orange mx-auto mb-1" />
                        <div className="text-sm text-gray-400">Duration</div>
                        <div className="text-white font-semibold">{scenario.duration}</div>
                      </div>
                      <div className="text-center">
                        <Users className="h-5 w-5 text-exrsim-orange mx-auto mb-1" />
                        <div className="text-sm text-gray-400">Participants</div>
                        <div className="text-white font-semibold">{scenario.participants}</div>
                      </div>
                      <div className="text-center">
                        <MapPin className="h-5 w-5 text-exrsim-orange mx-auto mb-1" />
                        <div className="text-sm text-gray-400">Severity</div>
                        <div className="text-white font-semibold">{scenario.severity}</div>
                      </div>
                    </div> */}

                    {/* Key Elements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Training Elements</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {scenario.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start text-sm">
                            <AlertTriangle className="h-3 w-3 text-exrsim-orange mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Canadian Context */}
                    <div className="bg-exrsim-gray/50 rounded-lg p-4 border border-gray-700">
                      <h4 className="text-md font-semibold text-exrsim-orange mb-2">Canadian Context</h4>
                      <p className="text-gray-300 text-sm">{scenario.canadianContext}</p>
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
            Ready to Test Your Emergency Response?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience these scenarios firsthand and see how your team performs 
            under realistic emergency conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Request Scenario Demo</span>
              <Flame className="h-5 w-5" />
            </Link>
            <Link
              to="/features"
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors"
            >
              Learn About Platform Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScenariosPage;