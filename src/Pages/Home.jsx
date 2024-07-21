import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";


const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Slider/>
            <div className="content">
                
                <h1>Home page</h1>
                <button onClick={() => { navigate("/Contact") }}>Go to Contact</button>
            </div>
        </div>

    );
}

//exporting the default function
export default Home;
