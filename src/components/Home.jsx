import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Slider from "./Slider";


const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="content">
                <Slider/>
                <h1>Home page</h1>
                <button onClick={() => { navigate("/Contact") }}>Go to Contact</button>
            </div>
        </div>

    );
}

//exporting the default function
export default Home;
