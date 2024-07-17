import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../src/Components/Header"
import Menu from "../src/Pages/Menu"
import Hours from "../src/Pages/Hours"
import AboutUs from "../src/Pages/AboutUs"
import FindUs from "../src/Pages/FindUs"
import ScrollTop from './Components/ScrollTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
     
      <Routes>
      <Route path="/" element={ <Menu/>} />
        <Route path="/hours" element={<Hours />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/find-us" element={<FindUs />} />
      </Routes>
      <ScrollTop/>
      </Router>



    </div>
  );
}

export default App;
