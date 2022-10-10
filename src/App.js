import React from "react";
import Cardklepon from "./components/Cardklepon";
import Hero from "./components/Hero";
import Klepon from "./components/Klepon";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Klepon/>
      <Cardklepon/>
    </div>
  );
}

export default App;
