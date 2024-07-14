import { useState } from "react";

const SubMenuItems = [
    {
        first: "Learn",
        second: "Teach",
        third: "Get Certified"
    },
    {
        first: "Hire",
        second:"Vacancy",
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



export default function Navbar() {
    return (
        <div >
            <nav className="nav" >
                <div className="nav-logo"><a href="#">Seena</a></div>
                <ul className="nav-menu">
                    <li><a className="menuLink" href="#">Explore</a> </li>
                    <li><a className="menuLink" href="#">Skill</a></li>
                    <li><a className="menuLink" href="#">Build Resume</a></li>
                    <li><a className="menuLink" href="#">Job</a> </li>
                    <li  ><a href="#" className="nav-login" >Login</a></li>
                </ul>
            </nav>
        </div>
    );
}