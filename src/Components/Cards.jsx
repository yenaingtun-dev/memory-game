import React from "react";

const Cards = () => {
  const tees = [
    {
      id: 1,
      title: "Basic Tee",
      clicked: false,
    },
    {
      id: 2,
      title: "Basic Tee",
      clicked: false,
    },
    {
      id: 3,
      title: "Basic Tee",
      clicked: false,
    },
    {
      id: 4,
      title: "Basic Tee",
      clicked: false,
    },
    {
      id: 5,
      title: "Basic Tee",
      clicked: false,
    },
    {
      id: 6,
      title: "Basic Tee",
      clicked: false,
    },
    {
      id: 7,
      title: "Basic Tee",
      clicked: false,
    },
    {
      id: 8,
      title: "Basic Tee",
      clicked: false,
    },
  ];

  let point = 0;
  const getPoint = (tees, tee) => {
    if (tee.clicked !== true) {
      point += 1;
      tee.clicked = true;
    } else {
      point = 0;
      tees.map((tee) => {
        tee.clicked = false;
      })
      alert('restart');
    }
  };

  const listItems = tees.map((tee) => (
    <li onClick={() => getPoint(tees, tee)}>
      <a href="#" className="group block overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[400px]"
        />
        <div className="relative bg-white py-2">
          <h3 className="text-sm text-center text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {tee.title}
          </h3>
        </div>
      </a>
    </li>
  ));

  return (
    <section className="text-gray-600 body-font col-span-2 lg:col-span-3">
      <div className="container px-5 mx-auto">
        <ul className="grid lg:gap-4 grid-cols-1 lg:grid-cols-4">
          {listItems}
        </ul>
      </div>
    </section>
  );
};

export default Cards;
