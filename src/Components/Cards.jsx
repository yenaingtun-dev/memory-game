import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Cards = () => {
  const [point, setPoint] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [isFlipped, setIsFlipped] = useState(false);

  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const [condition, setCondition] = useState(true);
  const [fetchCount, setfetchCount] = useState(20);
  const [people, setPeople] = useState([]);



  useEffect(() => {
    fetchItems(fetchCount);
  }, []);
  const [checkToFetch, setCheckToFetch] = useState([])

  const fetchItems = (count) => {
    fetch("https://hp-api.onrender.com/api/characters")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const slicedData = data.slice(0, count);
          setPeople(slicedData);
          const highestScoreLocal = localStorage.getItem("Highest Score");
          if (highestScoreLocal) {
            setHighestScore(highestScoreLocal);
          }
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        })
        .finally((people) => {
          console.log(people);
          // if (checkToFetch) {
          //   const newFetchCount = fetchCount + 4;
          //   setfetchCount(newFetchCount);
          //   fetchItems(newFetchCount);
          // }
          // if (slicedData.filter(person => person.clicked) ? 'true' : 'false') {
          //   console.log('herer');
          // }
        })

        setCondition(false);
  };

  // const checkToFetch = people.filter(person => person.clicked).length == people.length ? 'true' : 'false';

  const checkPerson = (people, person) => {
    if (person.clicked !== true) {
      person.clicked = true;
      setPoint((prevPoint) => prevPoint + 1);
      setPeople((prevData) => shuffleArray([...prevData]));
    } else {
      people.map((person) => {
        person.clicked = false;
      });
      if (point > highestScore) {
        setHighestScore(point);
        localStorage.setItem("Highest Score", point);
      }
      if (point == fetchCount) {
        // setCondition(true);
        // MySwal.fire({
        //   title: "You Have Completed!",
        //   text: `Your Score ${point}, Highest Score ${highestScore}`,
        //   icon: "success", // 'warning', 'error', 'info', 'question'
        //   confirmButtonText: "Restart",
        // });
      } else {
        MySwal.fire({
          title: "You Have Clicked twice!",
          text: `Your Score ${point}, Highest Score ${highestScore}`,
          icon: "error", // 'warning', 'error', 'info', 'question'
          confirmButtonText: "Restart",
        });
      }
      setPoint(0);
      setPeople((prevData) => shuffleArray([...prevData]));
    }
  };

  // useEffect(() => {
  //     if (checkToFetch) {
  //       const newFetchCount = fetchCount + 4;
  //       setfetchCount(newFetchCount);
  //       fetchItems(newFetchCount);
  // }
  // }, [checkPerson]);

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
