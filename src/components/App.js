import React, {  useEffect, useState } from "react";
import '../styles/App.css';



const App = () => {

    const [renderBall,setRenderBall] = useState(false);
    const [posi,setPosi] = useState(0);
    const [ballPosition,setBallPosition] = useState({left:5,top:0});
    
    function move(l,t){
           setBallPosition((prevstate) => {
            // console.log("here i am",ballPosition.left,state.left);
            ballPosition.left =prevstate.left +l;
            ballPosition.top = prevstate.top +t;
            return ballPosition;
        });
        //    console.log(posi,ballPosition.left,ballPosition.top);
        setPosi({
            pos : posi+1,
        })
    }
    // bind ArrowRight keydown event
    useEffect(()=> {
        document.addEventListener("keydown",(event)=>{
            switch(event.keyCode){
                case 37 :
                    move(-5,0);
                    //  console.log(ballPosition);
                break;
                case 38 :
                    move(0,-5);
                    // console.log(ballPosition);

                break;
                case 39 :
                    move(5,0);
                    // console.log(ballPosition);

                break;
                case 40 :
                    move(0,5);
                //     console.log(ballPosition);
                break;
            }
        });

    },[ballPosition]);
  
    const buttonClickHandler = () => {
        setRenderBall(true);
   };
    const renderBallOrButton = () => {
		if (renderBall) {
		    return <div className="ball" style={{
                left : ballPosition.left +"px",
                top : ballPosition.top + "px",
                position: "absolute",
            }}></div>
		} else {
		    return <button onClick={buttonClickHandler} >Click For One Ball</button>
		}
    };

   
   
    return  <div className="playground"> {renderBallOrButton()}</div>;
};


export default App;
