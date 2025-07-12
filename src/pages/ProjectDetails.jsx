import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projectData";
import { ProgressBar } from "../components/ProgressBar";

export const ProjectDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const foundItem = projects.find((item) => item.id === parseInt(id));
    setData(foundItem);
  }, [id]);

  const history = [
    {
        blockchain_id: "0xabc123def456",
        date: "2023-07-15",
        amount: "200,000",
    },
    {
        blockchain_id: "0xabc123def456",
        date: "2023-07-15",
        amount: "100,000",
    },
    {
        blockchain_id: "0xabc123def456",
        date: "2023-07-15",
        amount: "150,000",
    },
  ]
  return (
    <section className="mx-36 space-y-4 px-4 py-2 my-4">
      <h1 className="text-2xl font-bold pt-2">{data?.title}</h1>
      <p className="text-[#637D87] text-sm">Project ID: {data?.id}</p>
      <p className="text-[#121417]">{data?.description}</p>
      <h1 className="text-xl font-bold mt-8">Budget Overview</h1>
      <div className="flex flex-col py-2">
        <div className="flex justify-between text-sm py-2">
          <p className="text-[#637D87]">Total Allocated Budget</p>
          <h3>{data?.budget}</h3>
        </div>
        <div className="flex justify-between text-sm py-2">
          <p className="text-[#637D87]">Funds Released To date</p>
          <h3>$350,000</h3>
        </div>
        <div className="flex justify-between text-sm py-2">
          <p className="text-[#637D87]">Remaining Funds</p>
          <h3>$150,000</h3>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <h1 className="font-medium">Funds Utilized</h1>
          <h3 className="text-sm">{data?.completion}%</h3>
        </div>
        <ProgressBar full percentage={data?.completion || 0} />
      </div>
      <h1 className="text-xl font-bold mt-8">Funds Released History</h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

        <table className="w-full">
            <thead className="bg-gray-50 border-b-1 border-gray-200  rounded-sm">
            <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                Released Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                Amount Released
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                Blockchain Transaction Id
                </th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-[#637D87]">
            {history.map((hist, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm">
                    {hist.date}
                </td>
                <td className="px-6 py-4 text-sm">
                    {hist.amount}
                </td>
                <td className="px-6 py-4 flex items-center gap-3 text-sm">
                    {hist.blockchain_id}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </section>
  );
};
