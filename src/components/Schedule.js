import React from "react";

const Schedule = () => {
  const scheduleItems = [
    {
      title: "Review candidate applications",
      time: "Today - 11:30 AM",
      priority: "Priority",
    },
    {
      title: "Interview with candidates",
      time: "Today - 10:30 AM",
      priority: "Other",
    },
    {
      title: "Short meeting with product designer from IT Department",
      time: "Today - 09:15 AM",
      priority: "Other",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Upcoming Schedule</h3>
        <div className="text-gray-500">Today, 13 Sep 2021</div>
      </div>
      <div className="space-y-4">
        {scheduleItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <div className="font-medium">{item.title}</div>
              <div className="text-sm text-gray-500">{item.time}</div>
            </div>
            <button className="text-gray-400">...</button>
          </div>
        ))}
      </div>
      <button className="text-rose-500 mt-4">Create a New Schedule</button>
    </div>
  );
};

export default Schedule;
