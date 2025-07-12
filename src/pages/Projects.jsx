import React, { useState } from "react";
import { Plus, Calendar, DollarSign, Mail, FileText, X } from "lucide-react";

const ProjectsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [formData, setFormData] = useState({
    projectTitle: "",
    projectDescription: "",
    totalBudget: "",
    startDate: "",
    endDate: "",
    contactEmail: ""
  });

  // Sample projects data
  const [projects] = useState([
    
  {
    id: 1,
    title: "Roads & Potholes Repair Project",
    description: "Urgent repair and resurfacing of major community roads, including filling critical potholes to ensure safe transit.",
    budget: "₦5,000,000", // Estimated cost for this project
    startDate: "2025-07-20", // Projected start date for repairs
    endDate: "2025-09-30", // Projected end date for repairs
    status: "In Progress", // Status of the project
    contactEmail: "publicworks@community.gov.ng" // Relevant contact
  },
  {
    id: 2,
    title: "Drainage Systems Restoration",
    description: "Comprehensive clearing and repair of blocked drainage systems to mitigate seasonal flooding and improve sanitation.",
    budget: "₦2,500,000",
    startDate: "2025-08-01",
    endDate: "2025-10-15",
    status: "Proposed",
    contactEmail: "environmental@community.gov.ng"
  },
  {
    id: 3,
    title: "School Buildings Renovation Phase 1",
    description: "Renovation of two primary school blocks including roofing, window replacement, and classroom painting.",
    budget: "₦15,000,000",
    startDate: "2025-09-01",
    endDate: "2026-01-31",
    status: "Active",
    contactEmail: "educationcomm@community.gov.ng"
  },
  {
    id: 4,
    title: "Community Clinic Equipment Procurement",
    description: "Acquisition of essential medical diagnostic equipment and basic furniture for the local community health clinic.",
    budget: "₦10,000,000",
    startDate: "2025-07-25",
    endDate: "2025-11-30",
    status: "Planning",
    contactEmail: "healthservices@community.gov.ng"
  },
  {
    id: 5,
    title: "Water Supply Borehole Installation",
    description: "Drilling and equipping a new public borehole to improve access to clean, potable water for residents in Zone 3.",
    budget: "₦7,000,000",
    startDate: "2025-08-10",
    endDate: "2025-12-15",
    status: "In Progress",
    contactEmail: "watersupply@community.gov.ng"
  },
  {
    id: 6,
    title: "Electricity Grid Upgrade - Phase A",
    description: "Repair and upgrade of aging electricity infrastructure, including transformer maintenance and cable replacement in key areas.",
    budget: "₦8,000,000",
    startDate: "2025-09-15",
    endDate: "2026-03-31",
    status: "Active",
    contactEmail: "powerutility@community.gov.ng"
  },
  {
    id: 7,
    title: "Community Center Revitalization",
    description: "Renovation of the main hall, public restrooms, and minor exterior repairs at the community center.",
    budget: "₦1,500,000",
    startDate: "2025-08-20",
    endDate: "2025-10-30",
    status: "Active",
    contactEmail: "communitymgmt@community.gov.ng"
  },
  {
    id: 8,
    title: "Public Park Beautification Project",
    description: "Installation of new benches, waste bins, and general landscaping improvements in the central public park.",
    budget: "₦1,000,000",
    startDate: "2025-07-15",
    endDate: "2025-09-15",
    status: "In Progress",
    contactEmail: "parksdept@community.gov.ng"
  },
  {
    id: 9,
    title: "Street Lights Network Expansion",
    description: "Installation of new street lights and repair of existing non-functional ones along arterial roads and residential streets.",
    budget: "₦3,000,000",
    startDate: "2025-10-01",
    endDate: "2026-02-28",
    status: "Planning",
    contactEmail: "securitycomm@community.gov.ng"
  }
]
  );

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = () => {
    return (
      formData.projectTitle.trim() !== "" &&
      formData.projectDescription.trim() !== "" &&
      formData.totalBudget.trim() !== "" &&
      formData.startDate !== "" &&
      formData.endDate !== "" &&
      formData.contactEmail.trim() !== "" &&
      uploadedFiles.length > 0
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("Form submitted:", formData, uploadedFiles);
      // Handle form submission here
      setIsModalOpen(false);
      // Reset form
      setFormData({
        projectTitle: "",
        projectDescription: "",
        totalBudget: "",
        startDate: "",
        endDate: "",
        contactEmail: ""
      });
      setUploadedFiles([]);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      projectTitle: "",
      projectDescription: "",
      totalBudget: "",
      startDate: "",
      endDate: "",
      contactEmail: ""
    });
    setUploadedFiles([]);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Planning":
        return "bg-yellow-100 text-yellow-800";
      case "Active":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex py-5 flex-col min-h-screen ">
      {/* Header */}
     <div className="bg-gradient-to-r   border-b border-blue-100 p-4 sm:p-6 lg:p-8">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    {/* Left Section: Title and Subtitle */}
    <div className="flex flex-col">
      <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
        AiRIS: Community Initiatives
      </h1>
      <p className="text-md text-gray-600 mt-1">
        Track & manage vital build and repair projects in our community.
      </p>
    </div>

    {/* Right Section: Button */}
    <button
      onClick={() => setIsModalOpen(true)}
      className="inline-flex cursor-pointer items-center px-6 py-3 border border-transparent text-base font-semibold rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
    >
      <Plus className="w-5 h-5 mr-2" />
      Create New Project
    </button>
  </div>
</div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{project.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span className="font-medium">{project.budget}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="truncate">{project.contactEmail}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="w-full text-sm font-medium text-[#19a1e5] hover:text-[#1689cc] transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">New Project Details</h2>
                  <p className="text-sm text-gray-600">Fill in all the required information to create your new project</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <form className="p-6 space-y-6" onSubmit={handleSubmit}>
              {/* Project Title */}
              <div>
                <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-900 mb-2">
                  Project Title *
                </label>
                <input
                  id="projectTitle"
                  name="projectTitle"
                  type="text"
                  required
                  placeholder="Enter project title..."
                  value={formData.projectTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border-none text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#19a1e5] focus:ring-opacity-50 transition-all duration-200"
                />
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-900 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  required
                  placeholder="Enter project description..."
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border-none text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#19a1e5] focus:ring-opacity-50 transition-all duration-200 resize-none"
                />
              </div>

              {/* Total Budget */}
              <div>
                <label htmlFor="totalBudget" className="block text-sm font-medium text-gray-900 mb-2">
                  Total Budget Allocation *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">$</span>
                  <input
                    id="totalBudget"
                    name="totalBudget"
                    type="text"
                    required
                    placeholder="0"
                    value={formData.totalBudget}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, '');
                      if (value === '') {
                        setFormData(prev => ({ ...prev, totalBudget: '' }));
                      } else {
                        const formatted = Number(value).toLocaleString();
                        setFormData(prev => ({ ...prev, totalBudget: formatted }));
                      }
                    }}
                    className="w-full pl-8 pr-4 py-3 rounded-lg bg-gray-50 border-none text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#19a1e5] focus:ring-opacity-50 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Date Range */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-900 mb-2">
                    Start Date *
                  </label>
                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#19a1e5] focus:ring-opacity-50 transition-all duration-200 cursor-pointer"
                  />
                </div>
                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-gray-900 mb-2">
                    End Date *
                  </label>
                  <input
                    id="endDate"
                    name="endDate"
                    type="date"
                    required
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#19a1e5] focus:ring-opacity-50 transition-all duration-200 cursor-pointer"
                  />
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Associated Documents *
                </label>
                <input
                  className="hidden"
                  multiple
                  accept=".pdf,.docx,.xlsx"
                  type="file"
                  id="file-upload"
                  onChange={handleFileUpload}
                />
                {uploadedFiles.length === 0 ? (
                  <label htmlFor="file-upload" className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="text-center">
                      <FileText className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-600 mb-1">
                        <span className="font-semibold text-[#19a1e5]">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF, DOCX, XLSX (Multiple files allowed)
                      </p>
                    </div>
                  </label>
                ) : (
                  <div className="w-full">
                    <div className="border-2 border-dashed border-[#19a1e5] rounded-lg bg-blue-50 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-[#19a1e5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-900">
                            {uploadedFiles.length} file{uploadedFiles.length > 1 ? 's' : ''} uploaded
                          </span>
                        </div>
                        <label htmlFor="file-upload" className="text-xs text-[#19a1e5] hover:underline cursor-pointer font-medium">
                          Change files
                        </label>
                      </div>
                      <div className="space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-200">
                            <div className="flex items-center min-w-0 flex-1">
                              <FileText className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                              <span className="text-sm text-gray-900 truncate">{file.name}</span>
                            </div>
                            <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
                              {(file.size / 1024).toFixed(1)} KB
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Information */}
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-900 mb-2">
                  Contact Information *
                </label>
                <input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border-none text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#19a1e5] focus:ring-opacity-50 transition-all duration-200"
                />
              </div>

              {/* Form validation message */}
              {!isFormValid() && (
                <p className="text-xs text-gray-500 text-center">
                  Please fill in all required fields to submit the form
                </p>
              )}

              {/* Submit Buttons */}
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 cursor-pointer py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!isFormValid()}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 min-w-[120px] ${
                    isFormValid()
                      ? "bg-[#19a1e5] text-white hover:bg-[#1689cc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#19a1e5] cursor-pointer"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Submit Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;