import Cards from "./Components/Cards";
import CurrentScore from "./Components/CurrentScore";
import HighestScore from "./Components/HighestScore";

const App = () => {
  return (
    <>
      <h1 className="text-xl text-black">Header</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 content-start  place-items-start">
        <Cards  />
        <div className="bg-green-300">
          <CurrentScore />
          <HighestScore />
        </div>
      </div>
    </>
  );
};

export default App;
