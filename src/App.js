import "./styles.css";
import Header from "./components/Header";
import Service from "./components/Service";
import About from "./components/About";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Contact />
    </>
  );
}
