import React from 'react';
import { Target, Users, Award, Shield, Globe, Lightbulb, Heart, Zap } from 'lucide-react';

const AirisAboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Former government transparency advocate with 15 years of experience in public sector reform."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Blockchain architect and former lead developer at major fintech companies."
    },
    {
      name: "Dr. Amara Okafor",
      role: "Head of Government Relations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      bio: "PhD in Public Administration with expertise in digital governance and policy implementation."
    },
    {
      name: "James Thompson",
      role: "Lead Product Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "UX specialist focused on making complex financial data accessible to citizens."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "We believe every citizen deserves clear visibility into how their tax dollars are spent."
    },
    {
      icon: Heart,
      title: "Accountability",
      description: "Public officials should be held responsible for their financial decisions and actions."
    },
    {
      icon: Users,
      title: "Community",
      description: "Strong democracies are built on active citizen participation and engagement."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We harness cutting-edge technology to solve age-old problems in governance."
    }
  ];

  const stats = [
    { number: "150+", label: "Government Partners" },
    { number: "$2.4B", label: "Transactions Tracked" },
    { number: "50M+", label: "Citizens Served" },
    { number: "99.9%", label: "Uptime Reliability" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Building Trust Through Technology
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            At AiRIS, we're on a mission to revolutionize government transparency and accountability 
            by making public finances accessible, understandable, and verifiable for every citizen.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  AiRIS was born from a simple yet powerful observation: citizens deserve to know how their 
                  tax dollars are being spent. Founded in 2022 by a team of former government officials, 
                  blockchain developers, and civic technologists, we set out to bridge the gap between 
                  government financial data and public understanding.
                </p>
                <p>
                  Our founders witnessed firsthand the challenges of government transparency—outdated systems, 
                  complex reporting structures, and limited citizen access to financial information. They 
                  envisioned a world where every transaction is visible, every budget decision is traceable, 
                  and every citizen can actively participate in holding their government accountable.
                </p>
                <p>
                  Today, AiRIS serves over 150 government entities across the globe, helping them build 
                  trust with their communities through unprecedented financial transparency.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold mb-2">{stat.number}</div>
                      <div className="text-sm text-orange-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To democratize access to government financial information through innovative blockchain 
                technology, empowering citizens to participate meaningfully in their democracy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                A world where every government operates with complete financial transparency, 
                where citizens trust their institutions, and where public resources are used 
                efficiently and ethically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we build technology 
              for the public good.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our diverse team combines expertise in government, technology, and design to create 
              solutions that truly serve the public interest.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Making a Real Impact</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Since our founding, we've helped governments save millions in taxpayer dollars through 
              improved oversight, reduced corruption by 40% in partner municipalities, and increased 
              citizen engagement in budget processes by over 300%.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">$50M+</div>
                <div className="text-green-100">Taxpayer Savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">40%</div>
                <div className="text-green-100">Reduction in Corruption</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">300%</div>
                <div className="text-green-100">Increase in Engagement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Us in Building Better Government</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a government official, a concerned citizen, or a fellow technologist, 
            we invite you to be part of the transparency revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Partner With Us
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirisAboutPage;
