import { useState } from 'react';
import './index.css';

function App() {

  let [userInput, setUserInput] = useState("");
  let [results, setResults] = useState("");

  let londonDistricts = ["westminister", "camden", "kensington", "saint pancras", "borough"];

  function userEntered(e){

    setUserInput(e.target.value);

    for (let index = 0; index < londonDistricts.length; index++) {

      if(userInput === londonDistricts[index]){
        setResults(userInput)
      }
    }

  }

  return (
    <div className="App">
      <input type="text" value={userInput} onChange={userEntered}/>

      <div className="results">
        {
          <h1>{results}</h1>
        }
      </div>
    </div>
  );
}

export default App;
