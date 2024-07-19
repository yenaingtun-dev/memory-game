import React from "react";
import Card from "./Card"

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
      <Card title={tee.title} />
    </li>
  ));

  return (
    <section className="text-gray-600 body-font col-span-2 lg:col-span-4">
      <div className="container px-5 mx-auto">
        <ul className="grid lg:gap-4 grid-cols-1 lg:grid-cols-4">
          {listItems}
        </ul>
      </div>
    </section>
  );
};

export default Cards;
