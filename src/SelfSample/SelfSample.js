import React from "react";
import  './SelfSample.css'



const SelfSample = (props) => {
    return (
        <div className="SelfSample">
            <h1 onClick={props.click}>My name is {props.name} and i am {props.age} years old</h1>
            <h1>{props.children}</h1>

            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default SelfSample;