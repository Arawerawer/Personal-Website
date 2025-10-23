import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import "@/styles/app.scss";
import { ThemeProvider } from "./context/ThemeContext";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Toaster position="top-center" />
      <div className="app">
        <Loader isLoading={isLoading} />
        {!isLoading && (
          <>
            <Hero />
            <Services />
            <Contact />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
