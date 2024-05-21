// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Arrivals from "./components/Arrivals";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Grow from "./components/Grow";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Resources from "./components/Resources";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <div className="overlay">
        <Nav />
        <Hero />
        <Categories />
        <Arrivals />
        <Grow />
        <Resources />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
