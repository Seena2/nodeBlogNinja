import {
    BrowserRouter as Router,
    Routes, Route, Link, useNavigate, Outlet,
  } from 'react-router-dom';// to create router

const SubMenuItems = [
    {
        first: "Learn",
        second: "Teach",
        third: "Get Certified"
    },
    {
        first: "Hire",
        second: "Vacancy",
        third: "Get Hired"
    },
    {
        first: "Learn",
        second: "Teach",
        third: "Get Certified"
    }
]

function Dropdown({ items }) {
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownActive(true);
    }
    const handleMouseLeave = () => {
        setIsDropdownActive(false);
    }
    /*
    return(
        <div className="mainItem">
            {SubMenuItems[item].map(item)=>{
                <ul>
                    <li>{item.first}</li>
                    <li>{item.second}</li>
                    <li>{item.third}</li>
                </ul>
            }}
        </div>
    );
*/
}
const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <div className="nav-logo"><Link to="/">Seena</Link></div>
                <ul className="nav-menu">
                    <li><Link to="/explore" className="menuLink" >Explore</Link> </li>
                    <li><Link to="/skill" className="menuLink">Skill</Link></li>
                    <li><Link to="/resume" className="menuLink" >Build Resume</Link></li>
                    <li><Link to="/job" className="menuLink">Job</Link> </li>
                    <li><Link to="/login" className="nav-login" >Login</Link></li>

                </ul>
            </nav>
        </div>


    );
}


export default Navbar;