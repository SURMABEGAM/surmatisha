import React from "react";

const Features = () => {
  const features = [
    {
      title: "Real-time Analytics",
      desc: "Track performance with live dashboards.",
    },
    {
      title: "Automation Tools",
      desc: "Save time with smart workflow automation.",
    },
    {
      title: "Secure Cloud Storage",
      desc: "Enterprise-level security for your data.",
    },
  ];
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-lg">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
