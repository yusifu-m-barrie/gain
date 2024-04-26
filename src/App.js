
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/service" element={<Service />}/>
      <Route path="/contact" element={<Contact />}/>
     </Routes>
     
      
    </div>
  );
}

export default App;
