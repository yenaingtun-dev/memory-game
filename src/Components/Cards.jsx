import React, { useState } from "react";
import Card from "./Card";
import Header from "./Header";

const Cards = () => {
  const [point, setPoint] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [tees, setTee] = useState([
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
  ]);

  const checkTee = (tees, tee) => {
    if (tee.clicked !== true) {
      tee.clicked = true;
      setPoint((prevPoint) => prevPoint + 1);
    } else {
      tees.map((tee) => {
        tee.clicked = false;
      });
      if (point > highestScore) {
        setHighestScore(point)
      }
      alert("restart");
      setPoint(0);
    }
  };

  return (
    <>
      <Header point={point} highestScore={highestScore} />
      <section className="text-gray-600 body-font col-span-2 lg:col-span-4">
        <div className="container px-5 mx-auto">
          <ul className="grid lg:gap-4 grid-cols-1 lg:grid-cols-4">
            {tees.map((tee) => (
              <li key={tee.id} onClick={() => checkTee(tees, tee)}>
                <Card title={tee.title} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Cards;
