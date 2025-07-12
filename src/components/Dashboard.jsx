import React from "react";
import ProjectTable from "./ProjectTable";

const Dashboard = () => {
  const cards = [
    {
      name: "Registered Projects",
      amount: "120",
      percentage: "+10%",
    },
    {
      name: "Total Budgets",
      amount: "$50M",
      percentage: "+10%",
    },
    {
      name: "Funds Released",
      amount: "$30M",
      percentage: "+10%",
    },
    {
      name: "Recent Activity",
      amount: "15",
      percentage: "+2%",
    },
  ];
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        // width: "100vw",
        background: "#fff",
      }}
    >
      <div className="layout-content-container ml-10 mt-10 flex flex-col max-w-[960px] flex-1">
        <h1 className="flex flex-wrap justify-between gap-3 p-4 text-[#111818] tracking-light text-[32px] font-bold leading-tight min-w-72">
          Admin Dashboard
        </h1>
        <div className="flex justify-evenly py-8 px-4">
          {cards.map((card, index) => (
            <div key={index} className="px-6 py-4 rounded-md w-[207px] h-[142px] min-w-40 flex flex-col bg-[#F0F2F5] items-start gap-3">
              <h3 className="font-medium">{card.name}</h3>
              <h1 className="font-bold text-2xl">{card.amount}</h1>
				<h2 className="font-medium text-green-500">{card.percentage}</h2>
            </div>
          ))}
        </div>
		<h3 className="px-4 py-2 font-bold text-black text-2xl flex items-center w-full">
          Recent Projects
        </h3>
		<ProjectTable />
      </div>
    </div>
  );
};

export default Dashboard;
