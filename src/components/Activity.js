import React from "react";

const Activity = () => {
  return (
    <div className="bg-navy-900 text-white rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Recently Activity</h3>
      <div className="text-sm text-gray-300">10.40 AM, Fri 10 Sept 2021</div>
      <div className="mt-4">
        <h4 className="font-medium">You Posted a New Job</h4>
        <p className="text-sm text-gray-300 mt-2">
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
      </div>
      <div className="mt-4">
        <p className="text-sm">Today you makes 12 Activity</p>
        <button className="bg-rose-500 text-white px-4 py-2 rounded mt-2">
          See All Activity
        </button>
      </div>
    </div>
  );
};

export default Activity;
