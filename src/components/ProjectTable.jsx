import React from "react";
import { NavLink } from "react-router-dom";
import { PROJECTDETAILS, PROJECTS } from "../routes/Routeconstants";
import { projects } from "../data/projectData";
import { getStatusColor } from "../helpers/utils";
import { ProgressBar } from "./ProgressBar";

const ProjectTable = () => {
  return (
    <div className="px-4 py-3 @container">
      <div className="flex overflow-hidden rounded-xl border border-[#dbe6e5] bg-white">
        <table className="flex-1">
          <thead className="bg-gray-50 border-b-1 border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                Project Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                Budget
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                Completion
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {projects.map((project, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  <NavLink to={`${PROJECTS}/${project.id}`}>
                    {project.title}
                  </NavLink>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {project.budget}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex items-center gap-3">
                  <ProgressBar percentage={project.completion} />
                  <span className="text-sm font-medium text-gray-700 min-w-8">
                    {project.completion}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;
