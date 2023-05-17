import './App.css';
import { useState, useEffect } from 'react';

// functions
import { getIndex } from './functions';
function App() {
  const [data,setData] = useState("Hola Mundo");

  useEffect(() => {
    getIndex().then((res) => {
      setData(res.message);
    })
    .catch((err) =>  console.log(err))
  }, [])
  return (
    <div className="App">
      <h1>{data}</h1>
    </div>
  );
}

export default App;
