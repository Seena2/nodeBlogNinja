import {
    BrowserRouter as Router,
    Routes, Route, Link,NavLink, useNavigate, Outlet, //NavLink is to identfy active links
  } from 'react-router-dom';// to create router


const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <div className="nav-logo"><Link to="/">Seena</Link></div>
                <ul className="nav-menu">
                    <li><NavLink to="/explore" className="menuLink" >Explore</NavLink> </li>
                    <li><NavLink to="/skill" className="menuLink">Skill</NavLink></li>
                    <li><NavLink to="/resume" className="menuLink" >Build Resume</NavLink></li>
                    <li><NavLink to="/job" className="menuLink">Job</NavLink> </li>
                    <li><NavLink to="/login" className="nav-login" >Login</NavLink></li>

                </ul>
            </nav>
        </div>


    );
}


export default Navbar;