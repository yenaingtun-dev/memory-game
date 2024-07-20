import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";

const Cards = () => {
  const [point, setPoint] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(response => {
         if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const slicedData = data.slice(0, 12);
        setPeople(slicedData);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  },[]);

  const [people, setPeople] = useState([]);

  const checkPerson = (people, person) => {
    if (person.clicked !== true) {
      person.clicked = true;
      setPoint((prevPoint) => prevPoint + 1);
    } else {
      people.map((person) => {
        person.clicked = false;
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
            {people.map((person) => (
              <li key={person.id} onClick={() => checkPerson(people, person)}>
                <Card person={person} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Cards;
