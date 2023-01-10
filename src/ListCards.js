import React from "react";
import Card from "./Card";
import './ListCards.css'

const ListCards = ({numbers}) => {    

    const listCards = numbers.map((number) => <Card number={number} key={number}/>);    
 
    return (<div className='ListCards'>{listCards}</div>);    
}

export default ListCards;