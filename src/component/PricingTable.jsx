import React from "react";

const PricingTable = () => {
  const plans = [
    { name: "Starter", price: "$19/mo" },
    { name: "Pro", price: "$49/mo" },
    { name: "Enterprise", price: "$99/mo" },
  ];
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-lg">{plan.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
