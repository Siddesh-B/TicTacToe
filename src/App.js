import Tictactoe from "./Components/TicTacToe/tictactoe";
import './App.css';
import React, { useState, useEffect } from 'react'; 

function App() {
      return (
        <div>
          <Tictactoe />
        </div>
        )   
}

export default App;

 
 /*function App() {
  const MyComponent = () => { 
  const [showComponent, setShowComponent] = useState(false); 
 
  useEffect(() => { 
    const timeout = setTimeout(() => { 
      setShowComponent(true); 
    }, 1000); 
 
    return () => clearTimeout(timeout); 
  }, []); 
 
  return ( 
    <div> 
      {showComponent && <Tictactoe />} 
    </div> 
  ); 
}; 

}; 
 
export default App;*/
