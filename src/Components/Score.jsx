import React from "react";

const Header = () => {
  return (
    <div className="p-4 w-full">
      <div className="rounded-lg bg-white p-8 shadow-2xl h-72 w-72">
        <h2 className="text-lg font-bold">Current Score</h2>
        <p className="mt-2 text-sm text-gray-500">10 Points</p>
        <h2 className="text-lg font-bold mt-10">Highest Score</h2>
        <p className="mt-2 text-sm text-gray-500">100 Points</p>
        <div className="mt-10 flex gap-2">
          <button
            type="button"
            className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
