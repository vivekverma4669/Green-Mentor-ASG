import React, { useState } from "react";
import "../styles/Nav.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../Authcontext';
 import { useContext } from "react";

 const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   const { setLoggedIn ,setUser,  user} = useContext(AuthContext);
  
   const logout = ()=> {
    setUser('');
    localStorage.setItem('userEmail', '');
    setLoggedIn(false);
    alert('log out done✅')
   }
  return ( 
     
    <nav>
      <Link to="/" className="title">
      <img src="https://assets-global.website-files.com/64c3b8862b0f016d651c7638/659e4ff303acf6ed2d198a03_Asset%202.svg" alt='logo ' style={{height: "30px", marginLeft :'12px'}}/>
      </Link>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen) }>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""} id="atag">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/create">Add-Task</NavLink>
        </li>
        <li>
          <NavLink to="/list">Task List</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
         {/* <li>
          <NavLink to="/login">Login</NavLink>
        </li>  */}
        
        </ul> 
        <div   id="log" style={{marginRight: "30px",  display : menuOpen? "block" : ""}} >
        <h3>  {user==''?   <NavLink to="/login" style={{borderRadius :"5px", padding:'10px' , color :'black'}}> Login</NavLink>  :  <p style={{color :'black'}}> {user}  <br/> <button onClick={logout}> log out </button> </p> }  </h3>

         
       </div> 
      
    </nav>                   
  );                          
};
 export default Navbar;