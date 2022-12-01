import Topbar from "./topbar/Topbar"
import {useState, useEffect} from 'react';
import Home from "./pages/home/Home";
import Single from "./single/Single";
import Write from "./write/Write";
import Settings from "./settings/Settings";
import Login from "./login/Login";
import Register from "./register/Register";
import {Route, Outlet, Routes,} from "react-router-dom";
import Footer from "./footer/Footer";






function App() {
  
  const {search, setSearch} = useState('');
  const{searchResult, setSearchResult} = useState([])


  return (
    <>
    <Topbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
