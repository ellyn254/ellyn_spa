import './App.css';
import './Navbar.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './Register';
import Home from './Home';
import Login from './Login';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Contact from './Contact';
import Image from './images/spa.png'



function App() {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
   <div>
    <BrowserRouter>
    <header>
    <img src={Image} alt='images' width={150} height={70}/>
    <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/register">Profile</a>
        <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
        </button>
    </nav>
    <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
    </button>
</header>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      
    </Routes>
    </BrowserRouter>
   </div>
   
  )
}

export default App;
