import './App.css';
import Title from './Title';
import Card from "./Card";
import { useState } from 'react';
function App() {    
  const [cards,setCards] = useState([]);    

  // const shuffle = (arr) => {
  //   let last_index = arr.length - 1;
  //   while(last_index > 0) {
  //     let random_index = Math.floor(Math.random() * last_index);
  //     let temp = arr[last_index];
  //     arr[last_index] = arr[random_index];
  //     arr[random_index] = temp;
  //     last_index--;
  //   }    
  //   setCards([...arr])               
  // }   
  const addNewCard = () => {
    setCards([...cards,{
      id: Math.floor(Math.random() * 1000),
      title: "This is Card Title",
      description: "This is a card description."
    }])
  }
  const deleteCard = (id) => {                       
    setCards(cards.filter(card => card.id !== id))
  }
  
  return (
    <div className="App">
        <Title/> 
                                
        {/* <button onClick={()=>{shuffle(cards);}}>Shuffle</button> */}
        <input type="text"></input>
        <button onClick={()=>{addNewCard("Seven")}}>Add Card</button>  
        <div className='ListCards'>
        {
          cards.length > 0 ? cards.map((card) => <Card id={card.id} title={card.title} description={card.description} deleteCard={deleteCard} key={card.id}/>):
          <h4>There is no card</h4>
        }
        </div>      
        

    </div>
  );
}

export default App;
