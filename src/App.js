import './App.css';
import Router from './Pages/Router';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,   // 🔥 important
    });
  }, []);
  
  return (
   <>
   <Router/>
   </>
  );
}

export default App;
