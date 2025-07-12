import React, { useState } from 'react';
import { 
  Shield, 
  Eye, 
  Users, 
  BarChart3, 
  FileText, 
  Search, 
  Bell, 
  Globe, 
  Lock, 
  Smartphone, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Clock,
  Database,
  MessageSquare,
  Settings,
  Award,
  TrendingUp,
  Filter,
  Download
} from 'lucide-react';

const AirisFeaturesPage = () => {
  const [activeFeature, setActiveFeature] = useState('transparency');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const heroFeatures = [
    {
      icon: Eye,
      title: "Complete Transparency",
      description: "Full visibility into government operations and decision-making processes"
    },
    {
      icon: Users,
      title: "Citizen Engagement",
      description: "Direct communication channels between citizens and government officials"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security meeting all government compliance standards"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Powerful analytics and reporting tools for informed decision making"
    }
  ];

  const mainFeatures = [
    {
      id: 'transparency',
      icon: Eye,
      title: 'Government Transparency',
      description: 'Comprehensive visibility into all government operations, decisions, and processes.',
      image: '/api/placeholder/600/400',
      features: [
        'Real-time budget tracking and spending reports',
        'Public meeting recordings and transcripts',
        'Policy development timeline visualization',
        'Contractor and vendor relationship mapping',
        'Decision audit trails with full documentation'
      ]
    },
    {
      id: 'engagement',
      icon: Users,
      title: 'Citizen Engagement',
      description: 'Foster meaningful dialogue between government and citizens through multiple channels.',
      image: '/api/placeholder/600/400',
      features: [
        'Public forums and discussion boards',
        'Direct messaging with elected officials',
        'Petition and proposal submission system',
        'Community feedback collection tools',
        'Town hall meeting integration'
      ]
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Transform government data into actionable insights with powerful analytics tools.',
      image: '/api/placeholder/600/400',
      features: [
        'Interactive dashboards and visualizations',
        'Performance metrics and KPI tracking',
        'Predictive analytics for policy impact',
        'Custom report generation',
        'Data export and API integration'
      ]
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with government-grade compliance and data protection.',
      image: '/api/placeholder/600/400',
      features: [
        'SOC 2 Type II certification',
        'FedRAMP compliance ready',
        'End-to-end encryption',
        'Multi-factor authentication',
        'Regular security audits and penetration testing'
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Search,
      title: 'Advanced Search',
      description: 'Powerful search capabilities across all government documents and data'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Customizable alerts for policy changes, meetings, and important updates'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Accessible in multiple languages to serve diverse communities'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Optimized for mobile devices with native app capabilities'
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Centralized repository for all government documents and records'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamless integration with existing government systems and databases'
    },
    {
      icon: MessageSquare,
      title: 'Public Comments',
      description: 'Structured commenting system for policies and proposals'
    },
    {
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Automated processes for approvals, notifications, and compliance'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Trust',
      metric: '89%',
      description: 'Higher citizen trust in government transparency initiatives'
    },
    {
      icon: Users,
      title: 'Citizen Participation',
      metric: '3.2x',
      description: 'Increase in citizen engagement and participation rates'
    },
    {
      icon: Clock,
      title: 'Faster Response',
      metric: '67%',
      description: 'Reduction in response time to citizen inquiries'
    },
    {
      icon: Award,
      title: 'Compliance Rate',
      metric: '99.9%',
      description: 'Compliance with transparency and accessibility standards'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "City Manager, Springfield",
      content: "AiRIS has transformed how we engage with our citizens. The transparency features have significantly increased public trust in our administration.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Mayor, Riverside County",
      content: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions that truly serve our community.",
      rating: 5
    },
    {
      name: "Dr. Jennifer Walsh",
      role: "State Representative",
      content: "The citizen engagement tools have revolutionized how we connect with constituents. Town halls are now more accessible and inclusive.",
      rating: 5
    }
  ];

  const implementationSteps = [
    {
      step: '1',
      title: 'Assessment & Planning',
      description: 'Analyze current systems and develop implementation roadmap',
      duration: '1-2 weeks'
    },
    {
      step: '2',
      title: 'Data Migration',
      description: 'Secure transfer of existing data and system integration',
      duration: '2-3 weeks'
    },
    {
      step: '3',
      title: 'Training & Testing',
      description: 'Comprehensive staff training and system testing',
      duration: '1-2 weeks'
    },
    {
      step: '4',
      title: 'Go Live & Support',
      description: 'Launch platform with full support and monitoring',
      duration: 'Ongoing'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Revolutionizing Government
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Transparency & Engagement
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              AiRIS provides comprehensive tools for government transparency, citizen engagement, 
              and data-driven decision making. Built for the modern digital government.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Request Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heroFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-blue-100 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed to transform how government operates and engages with citizens
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {mainFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                    activeFeature === feature.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {feature.title}
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {mainFeatures.find(f => f.id === activeFeature) && (
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {mainFeatures.find(f => f.id === activeFeature).title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {mainFeatures.find(f => f.id === activeFeature).description}
                  </p>
                  <div className="space-y-4">
                    {mainFeatures.find(f => f.id === activeFeature).features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {React.createElement(mainFeatures.find(f => f.id === activeFeature)?.icon || Eye, {
                      className: "w-8 h-8 text-white"
                    })}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Interactive Demo</h4>
                  <p className="text-gray-600 text-sm">Experience this feature in action</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Capabilities</h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools to support every aspect of government operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600">
              Real outcomes from governments using AiRIS
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{benefit.metric}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">
              Hear from government leaders who've transformed their operations with AiRIS
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-900 mb-6">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">{testimonials[activeTestimonial].name}</div>
                <div className="text-gray-600">{testimonials[activeTestimonial].role}</div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Implementation Process</h2>
            <p className="text-xl text-gray-600">
              Get up and running with AiRIS in just 4-8 weeks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                  <div className="text-blue-600 font-medium text-sm">{step.duration}</div>
                </div>
                {index < implementationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-1/2 transform translate-x-6 w-full">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Government?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of government organizations already using AiRIS to increase transparency, 
            engage citizens, and make data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Schedule Demo
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirisFeaturesPage;
