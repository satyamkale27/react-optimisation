// usememo //
import { memo, useMemo, useState } from "react";
import "./styles.css";

export default function App() {
  const [num, setNum] = useState(0); // to intionally rerender the app component by change in state using button //

  // to avoid this oject to treated as new we can use  usememo for optimisation //
  // it solves the problem of passing new object as prop every time  that triggers rerender //

  const propss = useMemo(() => {
    return {
      show: true,
    };
  }, []); // it gets render at initial render and result gets stored in cache memory that can be displayed evers time without changing //
  // using usememo solves problem of treating object new at every time leading to pass new prop every time //
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
