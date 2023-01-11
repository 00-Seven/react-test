import React from "react";

const Card = ({id,title,description,deleteCard}) => {                    
    
    return (        
        <div className="Card">
            <h1>{title}</h1>                  
            <p>{description}</p>
            <button  onClick={()=>{deleteCard(id)}} className="DelButton" >Delete</button>
        </div> 
    );
}

export default Card;