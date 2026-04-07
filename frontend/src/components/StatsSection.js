import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="section-padding bg-exrsim-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Leading Emergency Preparedness
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build your own exercise for training or use a real world event as it unfolds then activate the Incident Command System to bring it to a logical and effective conclusion.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-exrsim-orange/20 rounded-full flex items-center justify-center group-hover:bg-exrsim-orange/30 transition-colors">
                  <stat.icon className="h-8 w-8 text-exrsim-orange" />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-exrsim-orange mb-2">
                {stat.label}
              </div>
              <p className="text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div> */}

        {/* Canadian Focus */}
        <div className="mt-16 text-center">
          <div className="bg-exrsim-dark/50 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Designed for all Emergency Challenges
            </h3>
            <p className="text-gray-300 mb-6">
              From Arctic to urban emergencies, our platform addresses the unique 
              geographic, climatic, and operational challenges faced by emergency responders.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">

              <span className="bg-exrsim-orange/20 text-exrsim-orange px-3 py-1 rounded-full">
                Canadian Standards Compliant
              </span>
              <span className="bg-exrsim-orange/20 text-exrsim-orange px-3 py-1 rounded-full">
                Provincial Integration
              </span>
              <span className="bg-exrsim-orange/20 text-exrsim-orange px-3 py-1 rounded-full">
                Community and City Ready
              </span>
              <span className="bg-exrsim-orange/20 text-exrsim-orange px-3 py-1 rounded-full">
                Government, First Responders, Military
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;