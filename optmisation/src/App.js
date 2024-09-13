// issue with memo is, in js two object or function that look same are not same //
//  {} != {} //
// if i pass the object as prop in memo, //
// memo will identify that passed object as new object every time, identifying new prop causes rerender and not optimisation in memo //
//ex:-

import { memo, useState } from "react";
import "./styles.css";

export default function App() {
  const [num, setNum] = useState(0); // to intionally rerender the app component by change in state using button //

  // ******************************** imp note  **************************************** //
  // propss object is considers as new object at every time, //
  // propss object is been passed as prop in memoised  slow component //
  // component is memoised, //
  //  but it get rerender every time beacuase of the object that is treated new every time, //
  // that is been passes in memoised slow component  triggering rerender //
  const propss = {
    show: true,
  };
  return (
    <>
      <button onClick={() => setNum((num) => num + 1)}>click:{num}</button>
      <Slowcomponent show={propss} />
    </>
  );
}

const Slowcomponent = memo(function Slowcomponent({ show }) {
  const postarr = Array.from(
    { length: 50000 },
    () => "words in my soul loren hits cuts in the heaven to it by ele"
  );
  return (
    <>
      <h1>Posts</h1>

      <h2>visibility:{show.show ? "true" : "false"}</h2>
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
