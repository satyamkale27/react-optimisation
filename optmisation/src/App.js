import { useState, memo } from "react";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(false);
  const [dummy, setdummy] = useState(0); // to intionally rerender App component // it will rerender all its children components including Test component // till Test component passes same prop memo will not rerender slowcomponent resulting optimisation //
  return (
    <div className="App">
      <button onClick={() => setShow((show) => true)}>visibleAppCom</button>
      <button onClick={() => setdummy((dummy) => dummy + 1)}>
        clickmeAppCom:{dummy}
      </button>
      <Test show={show} />
    </div>
  );
}

function Test({ show }) {
  // component to optimise the slow component  by children prop //
  const [number, setNumber] = useState(0);

  function handelClick() {
    setNumber((number) => number + 1);
  }
  return (
    <>
      <h1>Slow react component</h1>
      <button onClick={handelClick}>IncrementTestComp:{number}</button>

      <Slowcomponent show={show} />
    </>
  );
}

const Slowcomponent = memo(function Slowcomponent({ show }) {
  // usememo only checks change in prop if same prop then it will not rerender //
  // slow component simulation //

  const [simulate, setSimulate] = useState(0); // memo will not avoid the local state change so this button simulate will be slow insted of using memo //

  const postarr = Array.from(
    { length: 50000 },
    () => "words in my soul loren hits cuts in the heaven to it by ele"
  );
  return (
    <>
      <h1>Posts</h1>
      <button onClick={() => setSimulate((simulate) => simulate + 1)}>
        simulateSlowComp:{simulate}
      </button>
      <h2>visibility:{show ? "true" : "false"}</h2>
      <ul>
        {postarr.map((arr, index) => (
          <li key={index}>
            {index + 1}:{arr}
          </li>
        ))}
      </ul>
    </>
  );
});
