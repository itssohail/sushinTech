import React from "react";

const Card = ({ title, value, subtext, color }) => {
  const getBackgroundColor = () => {
    switch (color) {
      case "rose":
        return "bg-rose-50/50";
      case "blue":
        return "bg-blue-50/50";
      case "purple":
        return "bg-purple-50/50";
      default:
        return "bg-white";
    }
  };

  const getSubtextColor = () => {
    switch (color) {
      case "rose":
        return "text-rose-500";
      case "blue":
        return "text-blue-500";
      case "purple":
        return "text-purple-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className={`rounded-lg ${getBackgroundColor()} p-6`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="text-4xl font-bold mt-2">{value}</div>
      <div className={`${getSubtextColor()} text-sm mt-2`}>{subtext}</div>
    </div>
  );
};

export default Card;
