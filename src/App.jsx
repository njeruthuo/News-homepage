import Headlines from "./components/Headlines";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-offWhite w-full min-h-screen">
      <Navbar />
      <section className="w-3/4 mx-auto">
        <Home />
        <Headlines />
      </section>
    </div>
  );
};
export default App;
