import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";

const Cards = () => {
  const [point, setPoint] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const slicedData = data.slice(0, 20);
        setPeople(slicedData);
        const highestScoreLocal = localStorage.getItem('Highest Score');
        if (highestScoreLocal) {
          setHighestScore(highestScoreLocal)
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const [people, setPeople] = useState([]);

  const checkPerson = (people, person) => {
    if (person.clicked !== true) {
      person.clicked = true;
      setPoint((prevPoint) => prevPoint + 1);
      setPeople(prevData => shuffleArray([...prevData]));
    } else {
      people.map((person) => {
        person.clicked = false;
      });
      if (point > highestScore) {
        setHighestScore(point);
        localStorage.setItem('Highest Score', point);
      }
      alert("restart");
      setPoint(0);
      setPeople(prevData => shuffleArray([...prevData]));
    }
  };

  if (loading) return <p>Loading...</p>;

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
