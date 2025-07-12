import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-8 mb-6 md:mb-0">
              <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
            </div>
            <div className="text-gray-500 text-sm">
              ©2025 Airis. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer;