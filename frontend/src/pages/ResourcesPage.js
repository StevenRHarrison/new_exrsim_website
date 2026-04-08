import React from 'react';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Download,
  ExternalLink
} from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const whitepapers = [
    {
      title: 'EXRSIM: Emergency Exercise & Incident Management Platform',
      description: 'A comprehensive overview of the EXRSIM platform for integrated emergency preparedness, exercise design, and ICS-compliant incident management.',
      downloadCount: '250+',
      pages: '16 pages',
      type: 'Whitepaper',
      url: 'https://customer-assets.emergentagent.com/job_web-constructor-114/artifacts/jb7d65zh_EXRSIM_Whitepaper.pdf'
    },
    {
      title: 'Multi-Agency Coordination Best Practices',
      description: 'Essential guidelines for effective collaboration between emergency response organizations using unified command, shared situational awareness, and interoperable communications.',
      downloadCount: '375+',
      pages: '2 pages',
      type: 'Best Practices',
      url: 'https://customer-assets.emergentagent.com/job_web-constructor-114/artifacts/nsoo7uad_Multi_Agency_Response.pdf'
    }
  ];

  const webinars = [
    {
      title: 'Municipal Flood Response: Technology and Coordination',
      duration: '42 minutes',
      viewers: '950+',
      date: 'August 2024'
    },
    {
      title: 'Pipeline Emergency Response: Environmental Protection',
      duration: '35 minutes',
      viewers: '650+',
      date: 'July 2024'
    }
  ];

  const blogPosts = [
    {
      title: 'The Evolution of Emergency Management Training in Canada',
      excerpt: 'Exploring how emergency management training has adapted to meet the changing landscape of risks and threats across Canada.',
      readTime: '8 min read',
      category: 'Industry Insights',
      date: 'November 15, 2024'
    },
    {
      title: '5 Key Lessons from Recent Canadian Wildfire Seasons',
      excerpt: 'Analysis of the 2023-2024 wildfire seasons and their implications for future emergency preparedness strategies.',
      readTime: '6 min read',
      category: 'Case Study',
      date: 'November 10, 2024'
    },
    {
      title: 'Building Climate Resilience Through Emergency Simulation',
      excerpt: 'How realistic emergency simulations help communities adapt to increasing climate-related disasters.',
      readTime: '7 min read',
      category: 'Climate Preparedness',
      date: 'November 5, 2024'
    },
    {
      title: 'Indigenous Knowledge in Emergency Management',
      excerpt: 'Incorporating traditional ecological knowledge and community practices into modern emergency response frameworks.',
      readTime: '9 min read',
      category: 'Community Engagement',
      date: 'October 28, 2024'
    },
    {
      title: 'Technology Trends in Emergency Response Training',
      excerpt: 'Emerging technologies that are transforming how emergency responders prepare for and manage critical incidents.',
      readTime: '5 min read',
      category: 'Technology',
      date: 'October 22, 2024'
    },
    {
      title: 'Multi-Jurisdictional Coordination: Overcoming Challenges',
      excerpt: 'Practical strategies for effective coordination between different levels of government during emergency responses.',
      readTime: '10 min read',
      category: 'Best Practices',
      date: 'October 15, 2024'
    }
  ];

  return (
    <div className="pt-24 sm:pt-22 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-exrsim-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Resources & Insights
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Access expert knowledge, research, and insights to enhance your organization's 
            emergency preparedness and response capabilities.
          </p>
          
          {/* Resource Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <FileText className="h-8 w-8 text-exrsim-orange mx-auto mb-2" />
              <div className="text-white font-semibold">Whitepapers</div>
              <div className="text-gray-400 text-sm">Research & Analysis</div>
            </div>
            <div className="text-center">
              <Video className="h-8 w-8 text-exrsim-orange mx-auto mb-2" />
              <div className="text-white font-semibold">Webinars</div>
              <div className="text-gray-400 text-sm">Expert Presentations</div>
            </div>
            <div className="text-center">
              <BookOpen className="h-8 w-8 text-exrsim-orange mx-auto mb-2" />
              <div className="text-white font-semibold">Blog</div>
              <div className="text-gray-400 text-sm">Industry Insights</div>
            </div>
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="section-padding bg-exrsim-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Research & Whitepapers</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              In-depth research and analysis on emergency management topics specific to the Canadian context.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whitepapers.map((paper, index) => (
              <div key={index} className="bg-exrsim-dark rounded-lg p-6 border border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-exrsim-orange/20 text-exrsim-orange px-3 py-1 rounded-full text-sm font-medium">
                    {paper.type}
                  </div>
                  <a href={paper.url} download>
                    <Download className="h-5 w-5 text-gray-400 hover:text-exrsim-orange cursor-pointer transition-colors" />
                  </a>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{paper.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{paper.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{paper.pages}</span>
                  <span>{paper.downloadCount} downloads</span>
                </div>
                
                <a href={paper.url} download className="w-full mt-4 btn-primary text-white py-2 rounded-lg font-medium flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download Free</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="section-padding bg-exrsim-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Expert Webinars</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Learn from leading emergency management professionals sharing their real-world experiences and insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-exrsim-gray rounded-lg p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <Video className="h-6 w-6 text-exrsim-orange mr-3" />
                  <span className="text-gray-400 text-sm">{webinar.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{webinar.title}</h3>
                <p className="text-exrsim-orange font-medium mb-4">{webinar.presenter}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{webinar.duration}</span>
                  <span>{webinar.viewers} viewers</span>
                </div>
                
                <button className="w-full btn-primary text-white py-2 rounded-lg font-medium flex items-center justify-center space-x-2">
                  <Video className="h-4 w-4" />
                  <span>Watch Recording</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-exrsim-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Latest Blog Posts</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest trends, insights, and best practices in emergency management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-exrsim-dark rounded-lg p-6 border border-gray-700 group hover:border-exrsim-orange/50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-exrsim-orange/20 text-exrsim-orange px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-exrsim-orange transition-colors" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-exrsim-orange transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary text-white px-8 py-3 rounded-lg font-medium">
              View All Blog Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-exrsim-orange to-exrsim-orange-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Informed with EXRSIM Insights
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter for the latest emergency management insights, 
            research, and training updates delivered to your inbox monthly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-exrsim-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-white/70 text-sm mt-4">
            Unsubscribe anytime. We respect your privacy and never share your information.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;