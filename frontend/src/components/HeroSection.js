import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      
      url: ("wildfire.jpg"),//'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      title: 'Wildfire Response Training',
      description: 'Comprehensive simulation scenarios for wildfire emergency response'
    },
    {
      url: ("floods.jpg"),//'https://images.unsplash.com/photo-1574482620747-8cfb4b85586d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      title: 'Flood Emergency Management',
      description: 'Advanced flood response coordination and evacuation planning'
    },
    {
      url: ("command_center.jpg"),//'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      title: 'Emergency Operations Center',
      description: 'Professional incident command system training and coordination'
    },
    {
      url: ("icestorm.jpeg"),//'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      title: 'Winter Storm Response',
      description: 'Ice storm and severe weather emergency preparedness training'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-20 md:pt-16">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-60' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image.url})` }}
            />
            <div className="absolute inset-0 bg-exrsim-dark/70" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            {/* <Shield className="h-16 w-16 text-exrsim-orange" /> */}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Exercise Creation
            <span className="text-gradient block">and</span>
            Incident Command Response
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Empower your organization with exercise development and training scenarios 
            designed for your ICS response challenges. </p>
            
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Everything from wildfires to ice storms,
            prepare your teams for any crisis.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <CheckCircle className="h-5 w-5 text-exrsim-orange" />
              <span className="text-gray-300">Real-time Collaboration</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <CheckCircle className="h-5 w-5 text-exrsim-orange" />
              <span className="text-gray-300">Exercise Scenarios</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <CheckCircle className="h-5 w-5 text-exrsim-orange" />
              <span className="text-gray-300">ICS Compliant</span>
            </div>
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="btn-primary text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 group"
            >
              <span>Request Free Demo</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:bg-white/20 transition-all group">
              <Play className="h-5 w-5" />
              <span>Watch Demo Video</span>
            </button>
          </div> */}

          {/* Trusted By */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            {/* <p className="text-gray-400 mb-6">Trusted by Leading Canadian Organizations</p> */}
            {/* <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-gray-400 font-semibold">Government of Canada</div>
              <div className="text-gray-400 font-semibold">TransCanada</div>
              <div className="text-gray-400 font-semibold">Hydro-Québec</div>
              <div className="text-gray-400 font-semibold">CN Rail</div>
              <div className="text-gray-400 font-semibold">RCMP</div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-exrsim-orange' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;