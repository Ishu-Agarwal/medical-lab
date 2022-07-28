import React,{useEffect , useContext, useState} from 'react';
import { Link,useLocation,useHistory } from "react-router-dom";
import { LabLoginContext , LoginContext} from './App';
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
    const [isLabLogin, setIsLabLogin] =  useContext(LabLoginContext);
    const [isLogin, setIsLogin] =  useContext(LoginContext);
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  const func=()=>{
    setIsLabLogin(false);
    setIsLogin(false);
    window.localStorage.setItem('login',JSON.stringify({user:isLogin,lab:isLabLogin}));
  }

useEffect(()=>{
  if (localStorage.getItem("login") !== null) {
    const form = window.localStorage.getItem('login');
    const val=JSON.parse(form);
    console.log(val);
    setIsLogin(val.user);
    setIsLabLogin(val.lab);
  }
},[]);

useEffect(()=>{
  window.localStorage.setItem('login',JSON.stringify({user:isLogin,lab:isLabLogin}));
})

  return (
        <nav className='main-nav'>
                <div className="logo">
                    <h2>
                        <span>M</span>agic
                        <span>P</span>athlab
                    </h2>
                </div>
                

        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li onClick={func}><NavLink to='/Main' >Home</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            {isLabLogin ? <li onClick={() => setIsLabLogin(false)}><Link to="/LabLogin"><span class="glyphicon glyphicon-user"></span> Lab Logout</Link></li> : <></>} 
            {isLogin ? <li onClick={() => setIsLogin(false)}><Link to="/Login"><span class="glyphicon glyphicon-user"></span> User Logout</Link></li> : <></>} 
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">

          </ul>
          <div className="hamburger-menu">
            <a  onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>


        </nav>
  )
}

export default Navbar;