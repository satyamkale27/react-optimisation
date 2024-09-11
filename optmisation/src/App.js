import { Children, useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Test />
    </div>
  );
}

function Counter({ children }) {
  // component to optimise the slow component  by children prop //
  const [number, setNumber] = useState(0);

  function handelClick() {
    setNumber((number) => number + 1);
  }
  return (
    <>
      <h1>Slow react component</h1>
      <button onClick={handelClick}>Increment:{number}</button>

      {children}
    </>
  );
}

function Test() {
  return (
    <div>
      <Counter>
        <Slowcomponent />
      </Counter>
    </div>
  );
}

function Slowcomponent() {
  // slow component simulation //
  const postarr = Array.from(
    { length: 50000 },
    () => "words in my soul loren hits cuts in the heaven to it by ele"
  );
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {postarr.map((arr, index) => (
          <li key={index}>
            {index + 1}:{arr}
          </li>
        ))}
      </ul>
    </>
  );
}
