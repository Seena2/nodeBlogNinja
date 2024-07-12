
import { useState } from "react";
import SkillsImage from "../assets/largeCar.jpg";
import BookImg from "../assets/note.jpeg";
import Design from "../assets/design.jpeg";
import ArrowBtn from "../assets/arrow.png";
import Navbar from "./Navbar";


//Slide image and text
const sliderData = [
    {
        text: "acquire Skills that benefits you",
        textSub: "from anyWhere",
        image: 'url'
    },
    {
        text: "Create your resume on the fly!",
        textSub: "a Click away",
        image: 'url'
    },
    {
        text: "get a Job, and flex that skill",
        textSub: 'Without a hustle',
        image: 'url'
    }
]
function SliderBgImage({ slideCounter }) {
    if (slideCounter === 0) {
        return (
            <img className="bgImage" src={BookImg} alt="Education" />
        );

    } else if (slideCounter === 1) {
        return (
            <img className="bgImage" src={SkillsImage} alt="Education" />
        );
    } else if (slideCounter === 2) {
        return (
            <img className="bgImage" src={Design} alt="Education" />
        );

    }
}

function InfoText({sliderData,slideCounter,setSlideCounter}){
    return(
        <div className="hero">
            <div className="wecome-txt">
                <p>{sliderData.text}</p>
                <p>{sliderData.textSub}</p>
            </div>
            <div className="explore">
                <p>Explore More</p>
                <img src={ArrowBtn}/>
            </div>
        </div>
    );

}

export default function Slider() {
    //states
    const [slideCounter, setSlideCounter] = useState(0);
    

    return (
        <div>
            <Navbar />
            <SliderBgImage slideCounter={slideCounter} />
            <InfoText sliderData={sliderData[slideCounter]}
            slideCounter={slideCounter} setSlideCounter={setSlideCounter}/>
        </div>
    );
}