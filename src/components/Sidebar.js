import React from "react";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", active: true },
    { name: "Recruitment", active: false },
    { name: "Schedule", active: false },
    { name: "Employee", active: false },
    { name: "Department", active: false },
  ];

  return (
    <div className="w-64 bg-white h-screen p-4 border-r">
      <div className="space-y-4">
        <div className="text-sm text-gray-500 font-medium">MAIN MENU</div>
        <div className="space-y-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-2 p-2 rounded-lg ${
                item.active
                  ? "text-rose-500 font-medium bg-rose-50"
                  : "text-gray-500"
              }`}
            >
              <div className="w-5 h-5" />
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
