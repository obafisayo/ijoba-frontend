import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Users, Building, Headphones } from 'lucide-react';

const AirisContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    contactType: 'general'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      subject: '',
      message: '',
      contactType: 'general'
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+1 (555) 123-4567",
      secondary: "Mon-Fri 9AM-6PM EST",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "hello@airis.gov",
      secondary: "We respond within 24 hours",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: MapPin,
      title: "Office",
      primary: "123 Democracy Ave",
      secondary: "Washington, DC 20001",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Clock,
      title: "Support Hours",
      primary: "24/7 Emergency Support",
      secondary: "For government partners",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const contactTypes = [
    {
      id: 'general',
      icon: MessageCircle,
      title: 'General Inquiry',
      description: 'Questions about our platform or services'
    },
    {
      id: 'demo',
      icon: Users,
      title: 'Schedule Demo',
      description: 'Request a personalized demonstration'
    },
    {
      id: 'partnership',
      icon: Building,
      title: 'Partnership',
      description: 'Government partnerships and collaborations'
    },
    {
      id: 'support',
      icon: Headphones,
      title: 'Technical Support',
      description: 'Help with existing implementations'
    }
  ];

  const offices = [
    {
      city: "Washington, DC",
      address: "123 Democracy Ave, Washington, DC 20001",
      phone: "+1 (555) 123-4567",
      type: "Headquarters"
    },
    {
      city: "San Francisco, CA",
      address: "456 Innovation Blvd, San Francisco, CA 94105",
      phone: "+1 (555) 987-6543",
      type: "West Coast Office"
    },
    {
      city: "Austin, TX",
      address: "789 Tech Park Dr, Austin, TX 78701",
      phone: "+1 (555) 456-7890",
      type: "Development Center"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to bring transparency to your government? We're here to help you get started 
            with AiRIS and answer any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-900 font-medium mb-1">{method.primary}</p>
                  <p className="text-gray-600 text-sm">{method.secondary}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. 
                For urgent matters, please call our support line.
              </p>

              {/* Contact Type Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What can we help you with?</h3>
                <div className="grid grid-cols-2 gap-4">
                  {contactTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <label key={type.id} className="cursor-pointer">
                        <input
                          type="radio"
                          name="contactType"
                          value={type.id}
                          checked={formData.contactType === type.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`p-4 rounded-lg border-2 transition-all ${
                          formData.contactType === type.id 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          <div className="flex items-center mb-2">
                            <IconComponent className="w-5 h-5 text-gray-600 mr-2" />
                            <span className="font-medium text-gray-900">{type.title}</span>
                          </div>
                          <p className="text-sm text-gray-600">{type.description}</p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="City of Springfield"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Locations</h2>
              <p className="text-gray-600 mb-8">
                Visit us at one of our offices or reach out to your nearest location for 
                in-person support and consultations.
              </p>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{office.city}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                        {office.type}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                        <span className="text-gray-700">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-gray-400 mr-3" />
                        <span className="text-gray-700">{office.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">How quickly can we implement AiRIS?</h4>
                    <p className="text-gray-600 text-sm">
                      Implementation typically takes 4-8 weeks depending on your system complexity and data migration needs.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Is training provided?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes, we provide comprehensive training for all staff members and ongoing support throughout your implementation.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">What are the security requirements?</h4>
                    <p className="text-gray-600 text-sm">
                      AiRIS meets all government security standards including SOC 2 Type II, FedRAMP, and state-specific requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Support</h2>
          <p className="text-gray-600 mb-6">
            For critical system issues or urgent security concerns, contact our 24/7 emergency support line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Call Emergency Support
            </a>
            <a
              href="mailto:emergency@airis.gov"
              className="border border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Email Emergency Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirisContactPage;
