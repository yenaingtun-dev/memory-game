import React from "react";

const Cards = () => {
  return (
    <section className="text-gray-600 body-font col-span-2 lg:col-span-3">
      <div className="container px-5 mx-auto">
        <ul className="grid lg:gap-4 grid-cols-1 lg:grid-cols-4">
          <li>
            <a href="#" className="group block overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[400px]"
              />
              <div className="relative bg-white py-2">
                <h3 className="text-sm text-center text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Basic Tee
                </h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Cards;
