import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = screenSize < 1440;

  return (
    <>
      <Header isSmall={isSmallScreen} />
      <div className={`App ${isSmallScreen ? "sm" : "lg"}`}>
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
