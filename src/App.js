import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from './views/Home';
import Skill from './views/Skill';
import Project from './views/Project';
import { ThemeProvider } from "./themeProvider";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 400)
  }, [])

  return (
    <ThemeProvider>
      <>
        {!loading ? (
          <div >
            <Navbar />
            <Home />
            <About />
            <Skill />
            <Project />
            <Contact />
          </div>
        ) : (
          <LoadingScreen />
        )}
      </>
    </ThemeProvider>
  );
}

export default App;