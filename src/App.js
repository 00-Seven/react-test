import './App.css';
import Title from './Title';
import ListCards from './ListCards';
import { useState } from 'react';
function App() {    
  const [numbers,setNumbers] = useState(["One","Two","Three","Four","Five","Six"]);    

  const shuffle = (arr) => {
    let last_index = arr.length - 1;
    while(last_index > 0) {
      let random_index = Math.floor(Math.random() * last_index);
      let temp = arr[last_index];
      arr[last_index] = arr[random_index];
      arr[random_index] = temp;
      last_index--;
    }    
    setNumbers([...arr])               
  }   
  
  
  return (
    <div className="App">
        <Title/> 
                                
        <button onClick={()=>{shuffle(numbers);}}>Shuffle</button>
        <ListCards numbers={numbers}/>

    </div>
  );
}

export default App;
