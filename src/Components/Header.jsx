import React from "react";

const Header = ({point}) => {
  return (
    <header>
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex  sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Memory Game
            </h1>
          </div>
          <div className="mt-2 flex flex-col gap-1 sm:mt-0 sm:items-center">
            <p className="text-lg font-semibold text-gray-900">
              Current Score - {point} {point > 0 ? 'points' : 'point'}
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Highest Score - 100points
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
