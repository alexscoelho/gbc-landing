import "./App.css";
import Courses from "./components/courses";
import FeatureCard from "./components/featureCard";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
    </>
  );
}

export default App;
