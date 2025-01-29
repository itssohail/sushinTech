import React from "react";
import { Bell, MessageSquare } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center gap-4">
        <div className="text-blue-600 font-bold text-xl">Vasitum</div>
        <div className="relative">
          <input
            type="search"
            placeholder="Search"
            className="w-64 px-4 py-2 rounded-lg bg-gray-50 border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-gray-500" />
        <MessageSquare className="w-5 h-5 text-gray-500" />
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200" />
          <span className="font-medium">Admira John</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
