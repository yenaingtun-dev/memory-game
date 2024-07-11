import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      <div className="rounded-lg bg-white p-8 shadow-2xl space-y-3  h-72 w-72">
        <h2 className="font-semibold">Current Score - 10points</h2>
        <h2 className="font-semibold">Highest Score - 100points</h2>
        <div className="pt-5 flex gap-2">
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
