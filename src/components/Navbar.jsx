
export default function Navbar() {
    return (
        <div className="nav">
            <div className="nav-logo"><a href="#">Seena</a></div>
            <ul className="nav-menu">
                <li><a href="#">Explore</a> </li>
                <li><a href="#">Skill</a></li>
                <li><a href="#">Job</a> </li>
                <li ><a href="#" className="nav-login">Login</a></li>
            </ul>
        </div>
    );
}