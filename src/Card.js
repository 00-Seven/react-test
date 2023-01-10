import React from "react";
import './Card.css'
import { useState } from 'react';

const Card = ({number}) => {    
    const [check, setCheck] = useState(false);
    const [color, setColor] = useState("Close");
    const [label, setLabel] = useState("Blank")
    console.log(check + " "+ number);
    const className = "Card " + color;
    const btnClick = (msg)=>{
        console.log(msg + " " + number)
        setCheck(!check)
        setColor(color==="Open"?"Close":"Open")
        setLabel(label==="Blank"?number:"Blank")
    }
    return (        
        <div className={className} onClick={()=>{btnClick("Clicked")}} >
            <h1>{label}</h1>                   
        </div> 
    );
}

export default Card;