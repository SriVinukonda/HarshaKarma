import { useState } from "react";
import Button from "./Button";
import "../styles/Slider.css";

function Slider(props) {
    let [slideState,setSlide] = useState(0);

    return (
        
        <div className="slides">
            
            <div className="leftButton" onClick={() => {

                    if (slideState=== 0) {
                        setSlide((props.projects.length)-1);
                    } else {
                    setSlide((slideState-1));
                    }

                }}>{"<"}</div>
            {props.projects[slideState]}

            <div className="rightButton" onClick={() => {
                console.log("woof");
                setSlide((slideState+1)%3);
            }}>{">"}</div>
            

        </div>
   );


}

export default Slider;