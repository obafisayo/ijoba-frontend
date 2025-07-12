import React from "react";
import { useState } from "react";

const Budget = () => {
  const [formData, setFormData] = useState({
    projectTitle: "",
    projectDescription: "",
    totalBudget: "",
    startDate: "",
    endDate: "",
    contactEmail: "",
  });

  return (
    <div class="px-40 flex flex-1 justify-center py-5">
      <div class="layout-content-container flex flex-col w-[512px] py-5 max-w-[960px] flex-1">
        <div class="flex flex-wrap justify-between gap-3 p-4">
          <p class="text-[#111518] tracking-light text-[32px] font-bold leading-tight min-w-72">
            Release Funds for Milestone
          </p>
        </div>
        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label class="flex flex-col min-w-40 flex-1">
            <select class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border border-[#dce2e5] bg-white focus:border-[#dce2e5] h-14 bg-[image:--select-button-svg]  placeholder:text-[#637c88] p-[15px] pr-16 text-base font-normal leading-normal">
              <option value="">-- Select Item --</option>
              <option value="roads">Roads/Potholes</option>
              <option value="drainage">Drainage Systems</option>
              <option value="schools">School Buildings</option>
              <option value="hospitals-clinics">Hospitals/Clinics</option>
              <option value="water-supply">Water Supply Infrastructure</option>
              <option value="electricity">Electricity/Power Lines</option>
              <option value="community-center">Community Center</option>
              <option value="public-park">Public Park Facilities</option>
              <option value="street-lights">Street Lights</option>
            </select>
          </label>
        </div>
        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label class="flex flex-col min-w-40 flex-1">
            <input
              placeholder="Milestone Description"
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border border-[#dce2e5] bg-white focus:border-[#dce2e5] h-14 placeholder:text-[#637c88] p-[15px] text-base font-normal leading-normal"
            />
          </label>
        </div>
        <div class="flex relative max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-[#637c88] font-medium">
            $
          </span>
          <label class="flex flex-col min-w-40 flex-1">
            <input
              id="totalBudget"
              name="totalBudget"
              type="text"
              required
              placeholder="Amount to release"
              class="w-full h-14 pl-8 pr-4 rounded-lg text-[#111518] border border-[#dce2e5] bg-white focus:outline-none focus:border-[#19a1e5] placeholder:text-[#637c88] text-base font-normal leading-normal"
              value={formData.totalBudget}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, "");
                if (value === "") {
                  setFormData((prev) => ({ ...prev, totalBudget: "" }));
                } else {
                  const formatted = Number(value).toLocaleString();
                  setFormData((prev) => ({ ...prev, totalBudget: formatted }));
                }
              }}
            />
          </label>
        </div>
        <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label class="flex flex-col min-w-40 flex-1">
            <textarea
              placeholder="Notes or Documentation"
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border border-[#dce2e5] bg-white focus:border-[#dce2e5] min-h-36 placeholder:text-[#637c88] p-[15px] text-base font-normal leading-normal"
            ></textarea>
          </label>
        </div>
        <div class="flex px-4 py-3 justify-end">
          <button class="flex hover:bg-[#19a1e599] min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#19a1e5] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span class="truncate">Initiate Fund Release</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Budget;
