import "./App.css";
import { useState } from 'react';



const App = () => {
  
  const [diceNumber,setDiceNumber] = useState(1)
  const [diceNumber2,setDiceNumber2] = useState(6)


  const refreshDice=() => {
    const ranno = Math.floor(Math.random() * 6) + 1
    setDiceNumber(ranno)
    const ranno2 = Math.floor(Math.random() * 6) + 1
    setDiceNumber2(ranno2)

  }

  return (
    <div className="App">
      <center>
        <img width={200} height={200} src={require(`./assets/${diceNumber}.png`)}></img>
        <img width={200} height={200} src={require(`./assets/${diceNumber2}.png`)}></img>
        <br/>
        <button onClick={() => {
          refreshDice()
        }} className="button">Roll</button>
      </center>

    </div>
  );
}

export default App;
