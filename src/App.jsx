import { useState } from "react";
import "./App.css";
import {
  Nav,
  Header,
  About,
  Skills,
  Experience,
  Work,
  Testimonials,
  Footer,
} from "./Components/index";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <div className="">
        <Nav />
        <Header />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
