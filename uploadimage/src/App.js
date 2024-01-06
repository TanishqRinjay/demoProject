import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar" 
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      {/* <Route path="/Login" element={<Home/>}/> */}
      <Route path="/Signup" element={<Signup/>}/>
    </Routes>
    </div>
  );
}

export default App;
