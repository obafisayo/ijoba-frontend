import React from 'react';
import { Search, Shield, Users, Database, Network, BarChart3, Eye, Lock } from 'lucide-react';

const AirisLandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Empowering Transparency in Local Government Finances
              </h1>
              <p className="text-lg mb-8 text-orange-100">
                Airis is a revolutionary platform designed to bring unprecedented transparency to local government budgets. By 
                leveraging blockchain technology, we ensure every transaction is visible, verifiable, and immutable, fostering trust and 
                accountability in public spending.
              </p>
              <button className="bg-blue-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition-colors">
                Learn More
              </button>
            </div>
            <div className="relative">
              {/* Mock dashboard interface */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-medium">SUMMARY DASHBOARD</div>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white bg-opacity-10 p-3 rounded">
                    <div className="text-xs text-orange-200">Revenue</div>
                    <div className="text-lg font-bold">$2.4M</div>
                  </div>
                  <div className="bg-white bg-opacity-10 p-3 rounded">
                    <div className="text-xs text-orange-200">Expenses</div>
                    <div className="text-lg font-bold">$1.8M</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {['Education', 'Healthcare', 'Infrastructure', 'Public Safety', 'Parks & Recreation'].map((item, index) => (
                    <div key={item} className="flex items-center justify-between py-2 px-3 bg-white bg-opacity-10 rounded">
                      <span className="text-sm">{item}</span>
                      <div className="w-16 bg-white bg-opacity-20 h-2 rounded">
                        <div className="bg-orange-300 h-2 rounded" style={{width: `${60 + index * 10}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How AiRIS Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How AiRIS Works</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Airis utilizes a decentralized ledger system to record all financial transactions within a local government area. This means 
              that every expense, revenue, and budget allocation is publicly accessible and cannot be altered, providing a clear and 
              auditable trail of all financial activities.
            </p>
          </div>
          
          {/* Network Visualization */}
          <div className="mt-12 bg-gradient-to-br from-teal-600 to-teal-800 rounded-lg p-12 relative overflow-hidden">
            <div className="relative z-10">
              <NetworkVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Key Features</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Transparency, Security, and Community<br />
            Engagement
          </h3>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl">
            Airis offers a suite of features designed to enhance financial oversight and citizen participation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Real-time Transaction Tracking */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Real-time Transaction Tracking</h4>
              <p className="text-gray-600">
                Monitor every financial transaction as it occurs, ensuring no expense goes unnoticed.
              </p>
            </div>

            {/* Secure and Immutable Records */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Secure and Immutable Records</h4>
              <p className="text-gray-600">
                Benefit from the security of blockchain, where records are tamper-proof and permanently stored.
              </p>
            </div>

            {/* Citizen Oversight and Feedback */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Citizen Oversight and Feedback</h4>
              <p className="text-gray-600">
                Engage with your community by allowing citizens to view transactions and provide feedback.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Network Visualization Component
const NetworkVisualization = () => {
  const nodes = [
    { id: 1, x: 20, y: 30, size: 'large', icon: Database, active: true },
    { id: 2, x: 50, y: 15, size: 'medium', icon: Network, active: false },
    { id: 3, x: 80, y: 25, size: 'large', icon: BarChart3, active: true },
    { id: 4, x: 35, y: 60, size: 'medium', icon: Eye, active: false },
    { id: 5, x: 65, y: 70, size: 'small', icon: Lock, active: false },
    { id: 6, x: 15, y: 80, size: 'medium', icon: Shield, active: false },
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 1, to: 4 },
    { from: 4, to: 5 },
    { from: 5, to: 3 },
    { from: 4, to: 6 },
  ];

  return (
    <div className="relative h-64 w-full">
      {/* Connections */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn, index) => {
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          return (
            <line
              key={index}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          );
        })}
      </svg>
      
      {/* Nodes */}
      {nodes.map((node) => {
        const IconComponent = node.icon;
        const sizeClass = node.size === 'large' ? 'w-16 h-16' : node.size === 'medium' ? 'w-12 h-12' : 'w-8 h-8';
        const activeClass = node.active ? 'bg-yellow-400 border-yellow-300' : 'bg-teal-500 border-teal-400';
        
        return (
          <div
            key={node.id}
            className={`absolute ${sizeClass} ${activeClass} border-2 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <IconComponent className="w-6 h-6 text-white" />
          </div>
        );
      })}
    </div>
  );
};

export default AirisLandingPage;