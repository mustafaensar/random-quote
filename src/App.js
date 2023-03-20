import React from 'react';
import './App.css';

function App() {
  
  const [quotes, setQuotes] = React.useState("");

  React.useEffect(() =>{
    getQuote()
  },[])

  const getQuote = () =>{
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data)=> {
      let randomNumber = Math.floor(Math.random()* data.length)
      setQuotes(data[randomNumber])
    })
  }
  
  return (
    <div onClick={getQuote} className="App">
          <h1>{quotes.text}</h1>
    </div>
  );
}

export default App;
