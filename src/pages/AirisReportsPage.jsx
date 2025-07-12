import React from "react";

const AirisReportsPage = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight">
              Community Center Construction
            </p>
            <p className="text-[#637c88] text-sm font-normal leading-normal">
              Project ID: CC2023-007
            </p>
          </div>
        </div>
        <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">
          This project aims to construct a new community center in the heart of
          the district, providing a space for social gatherings, educational
          programs, and recreational activities for residents of all ages. The
          center will include a multi-purpose hall, meeting rooms, a library,
          and outdoor spaces.
        </p>
        <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Budget Overview
        </h2>
        <div className="p-4">
          <div className="flex justify-between gap-x-6 py-2">
            <p className="text-[#637c88] text-sm font-normal leading-normal">
              Total Allocated Budget
            </p>
            <p className="text-[#111518] text-sm font-normal leading-normal text-right">
              $500,000
            </p>
          </div>
          <div className="flex justify-between gap-x-6 py-2">
            <p className="text-[#637c88] text-sm font-normal leading-normal">
              Funds Released to Date
            </p>
            <p className="text-[#111518] text-sm font-normal leading-normal text-right">
              $350,000
            </p>
          </div>
          <div className="flex justify-between gap-x-6 py-2">
            <p className="text-[#637c88] text-sm font-normal leading-normal">
              Remaining Funds
            </p>
            <p className="text-[#111518] text-sm font-normal leading-normal text-right">
              $150,000
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-4">
          <div className="flex gap-6 justify-between">
            <p className="text-[#111518] text-base font-medium leading-normal">
              Funds Utilized
            </p>
            <p className="text-[#111518] text-sm font-normal leading-normal">
              70%
            </p>
          </div>
          <div className="rounded bg-[#dce2e5]">
            <div
              className="h-2 rounded bg-[#111518]"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
        <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Fund Release History
        </h2>
        <div className="px-4 py-3 @container">
          <div className="flex overflow-hidden rounded-lg border border-[#dce2e5] bg-white">
            <table className="flex-1">
              <thead>
                <tr className="bg-white">
                  <th className="table-eef934a0-4a83-4285-aee2-1217c6e0116c-column-120 px-4 py-3 text-left text-[#111518] w-[400px] text-sm font-medium leading-normal">
                    Release Date
                  </th>
                  <th className="table-eef934a0-4a83-4285-aee2-1217c6e0116c-column-240 px-4 py-3 text-left text-[#111518] w-[400px] text-sm font-medium leading-normal">
                    Amount Released
                  </th>
                  <th className="table-eef934a0-4a83-4285-aee2-1217c6e0116c-column-360 px-4 py-3 text-left text-[#111518] w-[400px] text-sm font-medium leading-normal">
                    Blockchain Transaction ID
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-t-[#dce2e5]">
                  <td className="table-eef934a0-4a83-4285-aee2-1217c6e0116c-column-120 h-[72px] px-4 py-2 w-[400px] text-[#637c88] text-sm font-normal leading-normal">
                    2023-07-15
                  </td>
                  <td className="table-eef934a0-4a83-4285-aee2-1217c6e0116c-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637c88] text-sm font-normal leading-normal">
                    $100,000
                  </td>
                  <td className="table-eef934a0-4a83-4285-aee2-1217c6e0116c-column-360 h-[72px] px-4 py-2 w-[400px] text-[#637c88] text-sm font-normal leading-normal">
                    0xabc123def456
                  </td>
                </tr>
                <tr className="border-t border-t-[#dce2e5]">
                  <td className="table-eef934a0-4a83-4285-aee2-1217c6e0116c-column-120 h-[72px] px-4 py-2 w-[400px] text-[#637c88] text-sm font-normal leading-normal">
                    2023-09-20
                  </td>
                  <td className="table-eef934a0-4a83-4285-aee2-1217c6e0116c-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637c88] text-sm font-normal leading-normal">
                    $150,000
                  </td>
                  <td className="table-eef934a0-4a83-4285-aee2-1217c6e0116c-column-360 h-[72px] px-4 py-2 w-[400px] text-[#637c88] text-sm font-normal leading-normal">
                    0xghi789jkl012
                  </td>
                </tr>
                <tr className="border-t border-t-[#dce2e5]">
                  <td className="table-eef934a0-4a83-4285-aee2-1217c6e0116c-column-120 h-[72px] px-4 py-2 w-[400px] text-[#637c88] text-sm font-normal leading-normal">
                    2023-11-05
                  </td>
                  <td className="table-eef934a0-4a83-4285-aee2-1217c6e0116c-column-240 h-[72px] px-4 py-2 w-[400px] text-[#637c88] text-sm font-normal leading-normal">
                    $100,000
                  </td>
                  <td className="table-eef934a0-4a83-4285-aee2-1217c6e0116c-column-360 h-[72px] px-4 py-2 w-[400px] text-[#637c88] text-sm font-normal leading-normal">
                    0xmnp345qrs678
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <style>
            {`
              @container(max-width:120px){.table-eef934a0-4a83-4285-aee2-1217c6e0116c-column-120{display: none;}}
              @container(max-width:240px){.table-eef934a0-4a83-4285-aee2-1217c6e0116c-column-240{display: none;}}
              @container(max-width:360px){.table-eef934a0-4a83-4285-aee2-1217c6e0116c-column-360{display: none;}}
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default AirisReportsPage;
