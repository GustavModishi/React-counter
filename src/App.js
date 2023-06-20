import { useState } from "react";

function App() {

  let [count, setCount] = useState(0);

  const handleIncr = () => {
    setCount( count+1);
  };

  const handleDec = () => {
    setCount(count-1);
  };

  const handleRes = () => {
    setCount( 0 );
  };


  return (
    <div>
        <h2>React Router 6 Tutorial</h2>
        <button onClick={handleIncr}>increase</button>
        <button onClick={handleDec}>Decrease</button>
        <button onClick={handleRes}>Reset</button>

        <h1>{count}</h1>
 
    </div>
   
  );
}

export default App;
