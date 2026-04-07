import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    title: '',
    sector: '',
    inquiry: '',
    message: '',
    preferredContact: 'email',
    urgency: 'normal'
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear status when user starts typing again
    if (formStatus.success || formStatus.error) {
      setFormStatus({ loading: false, success: false, error: false, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set loading state
    setFormStatus({ loading: true, success: false, error: false, message: 'Sending your message...' });

    try {
      // Submit form to PHP handler
      const response = await fetch('/contact-handler.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Success
        setFormStatus({
          loading: false,
          success: true,
          error: false,
          message: result.message || 'Thank you for your inquiry! We will respond within 24 hours.'
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          organization: '',
          title: '',
          sector: '',
          inquiry: '',
          message: '',
          preferredContact: 'email',
          urgency: 'normal'
        });

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Error from server
        setFormStatus({
          loading: false,
          success: false,
          error: true,
          message: result.message || 'There was an error sending your message. Please try again.'
        });
      }
    } catch (error) {
      // Network or other error
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Unable to send message. Please check your connection or email us directly at info@exrsim.com'
      });
    }
  };

  const contactInfo = [
    // {
    //   icon: Phone,
    //   title: 'Phone',
    //   primary: '+1 (416) 555-EXRSIM',
    //   secondary: '+1 (416) 555-3977',
    //   description: 'Monday-Friday, 8:00 AM - 6:00 PM EST'
    // },
    {
      icon: Mail,
      title: 'Email',
      primary: 'info@exrsim.com',
      secondary: 'support@exrsim.com',
      description: 'Response within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Locations',
      primary: 'Toronto, ON',
      secondary: 'Winnipeg, MB',
      description: 'Canada'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      primary: 'Monday - Friday: 8:00 AM - 5:00 PM',
      secondary: 'Emergency Support: 24/7',
      description: 'Eastern Standard Time (EST)'
    }
  ];

  const emergencyContacts = [
    {
      title: 'Technical Exercise or ICS Support',
      email: 'support@exrsim.com',
      description: 'For urgent technical exercise or ICS support during active incidents'
    },
    {
      title: 'Information',
      email: 'Info@exrsim.ca',
      description: 'For additional information so that we can help you better'
    }
  ];

  const sectors = [
    'Energy & Utilities',
    'Transportation',
    'Natural or Man-made',
    'Government',
    'Healthcare',
    'Industry',
    'Education',
    'Other'
  ];

  const inquiryTypes = [
    'General Information',
    'Platform Demo Request',
    'Pricing & Licensing',
    'Training Services',
    'Technical Support',
    'Partnership Inquiry',
    'Media & Press',
    'Other'
  ];

  return (
    <div className="pt-24 sm:pt-22 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-exrsim-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact EXRSIM
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Get in touch with our emergency preparedness experts to discuss how EXRSIM 
            can enhance your organization's emergency response capabilities.
          </p>
          
          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* <div className="bg-exrsim-gray rounded-lg p-6 border border-gray-700">
              <Calendar className="h-8 w-8 text-exrsim-orange mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Schedule a Demo</h3>
              <p className="text-gray-400 text-sm mb-4">See EXRSIM in action with a personalized demonstration</p>
              <button className="btn-primary text-white px-4 py-2 rounded-lg font-medium text-sm">
                Book Demo
              </button>
            </div> */}
            {/* <div className="bg-exrsim-gray rounded-lg p-6 border border-gray-700">
              <Phone className="h-8 w-8 text-exrsim-orange mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Speak with Sales</h3>
              <p className="text-gray-400 text-sm mb-4">Discuss pricing and implementation options</p>
              <a href="tel:+14165553977" className="btn-primary text-white px-4 py-2 rounded-lg font-medium text-sm inline-block">
                Call Sales
              </a>
            </div> */}
            {/* <div className="bg-exrsim-gray rounded-lg p-6 border border-gray-700">
              <Users className="h-8 w-8 text-exrsim-orange mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Exercise and ICS Consultation</h3>
              <p className="text-gray-400 text-sm mb-4">Get expert advice on exercise program design</p>
              <a href="info@exrsim.com" className="btn-primary text-white px-4 py-2 rounded-lg font-medium text-sm">
                Consult Expert
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-exrsim-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Status Messages */}
          {(formStatus.success || formStatus.error) && (
            <div className={`mb-8 p-4 rounded-lg border-2 ${
              formStatus.success 
                ? 'bg-green-900/20 border-green-500 text-green-300' 
                : 'bg-red-900/20 border-red-500 text-red-300'
            }`}>
              <div className="flex items-center">
                {formStatus.success ? (
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                ) : (
                  <AlertTriangle className="h-6 w-6 mr-3 flex-shrink-0" />
                )}
                <p className="font-medium">{formStatus.message}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and one of our emergency preparedness specialists 
                will respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-firstName" className="block text-white text-sm font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      id="contact-firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-exrsim-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-exrsim-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-lastName" className="block text-white text-sm font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      id="contact-lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-exrsim-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-exrsim-orange focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-white text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-exrsim-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-exrsim-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-white text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-exrsim-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-exrsim-orange focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Organization Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-organization" className="block text-white text-sm font-medium mb-2">Organization *</label>
                    <input
                      type="text"
                      id="contact-organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-exrsim-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-exrsim-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-title" className="block text-white text-sm font-medium mb-2">Job Title</label>
                    <input
                      type="text"
                      id="contact-title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-exrsim-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-exrsim-orange focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Sector & Inquiry Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-sector" className="block text-white text-sm font-medium mb-2">Sector</label>
                    <select
                      id="contact-sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-exrsim-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-exrsim-orange focus:border-transparent"
                    >
                      <option value="">Select your sector</option>
                      {sectors.map((sector) => (
                        <option key={sector} value={sector}>{sector}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-inquiry" className="block text-white text-sm font-medium mb-2">Inquiry Type *</label>
                    <select
                      id="contact-inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-exrsim-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-exrsim-orange focus:border-transparent"
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-white text-sm font-medium mb-2">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Please describe your emergency preparedness training needs, challenges, or questions..."
                    className="w-full px-4 py-3 bg-exrsim-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-exrsim-orange focus:border-transparent resize-vertical"
                  />
                </div>

                {/* Preferences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-preferredContact" className="block text-white text-sm font-medium mb-2">Preferred Contact Method</label>
                    <select
                      id="contact-preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-exrsim-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-exrsim-orange focus:border-transparent"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="either">Either</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-urgency" className="block text-white text-sm font-medium mb-2">Urgency Level</label>
                    <select
                      id="contact-urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-exrsim-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-exrsim-orange focus:border-transparent"
                    >
                      <option value="normal">Normal (24-48 hours)</option>
                      <option value="urgent">Urgent (Same day)</option>
                      <option value="emergency">Emergency (Immediate)</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className={`w-full btn-primary text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all ${
                    formStatus.loading 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-exrsim-orange-light'
                  }`}
                >
                  {formStatus.loading ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                
                {/* Alternative Contact Method */}
                <p className="text-center text-gray-400 text-sm">
                  Or email us directly at{' '}
                  <a href="mailto:info@exrsim.com" className="text-exrsim-orange hover:text-exrsim-orange-light underline">
                    info@exrsim.com
                  </a>
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Our team of emergency preparedness experts is ready to help you enhance 
                your organization's response capabilities.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-exrsim-orange/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="h-6 w-6 text-exrsim-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      <div className="text-exrsim-orange font-medium">{info.primary}</div>
                      {info.secondary && (
                        <div className="text-gray-300">{info.secondary}</div>
                      )}
                      <div className="text-gray-400 text-sm mt-1">{info.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contacts */}
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-8">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-400 mr-3" />
                  <h3 className="text-lg font-semibold text-red-400">Emergency Support</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  For urgent support during active incidents or critical training scenarios.
                </p>
                <div className="space-y-4">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index}>
                      <div className="text-white font-medium">{contact.title}</div>
                      <div className="text-red-400 font-medium">{contact.phone}</div>
                      <div className="text-red-400">{contact.email}</div>
                      <div className="text-gray-400 text-sm">{contact.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="bg-exrsim-dark/50 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-exrsim-orange mr-3" />
                  <h3 className="text-lg font-semibold text-white">Response Guarantee</h3>
                </div>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• General inquiries: Response within 24 hours</li>
                  <li>• Sales requests: Response within 4 hours</li>
                  <li>• Technical support: Response within 2 hours</li>
                  <li>• Emergency support: Immediate response 24/7</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;