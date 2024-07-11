import Cards from "./Components/Cards";
import Score from "./Components/Score";

const App = () => {
  return (
    <section className="max-w-7xl p-4">
      <h1 className="text-xl text-black p-5">Header</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 content-start place-items-start">
        <Cards  />
        <div className="">
          <Score />
        </div>
      </div>
    </section>
  );
};

export default App;
