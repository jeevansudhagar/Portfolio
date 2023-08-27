import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <div className='App1'>
  

</div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="Home" element={<Home/>} />
      <Route path="About" element={<About/>} />
      <Route path="Contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      </>

      
      
     
  
  );
}

export default App;
