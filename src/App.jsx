import Cards from "./Components/Cards";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
    <Header />
      <section className="max-w-7xl p-4">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 content-start place-items-start">
          <Cards />
        </div>
      </section>
    </>
  );
};

export default App;
