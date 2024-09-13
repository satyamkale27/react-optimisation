// usecallback //
// usecallback is  is similar to usememo, //
//  but use memo do not call the function immediately insted it memoises the function //
import { memo, useCallback, useMemo, useState } from "react";
import "./styles.css";

export default function App() {
  const [num, setNum] = useState(0); // to intionally rerender the app component by change in state using button //
  const [simulate, setSimulate] = useState(0);

  const handelSetSimulate = useCallback(function handelSetSimulate() {
    // it solves the problem of slow component when function (handelSetSimulate) is passed as prop
    setSimulate((simulate) => simulate + 1);
  }, []); // in usecall back the function is memoised //

  const propss = useMemo(() => {
    return {
      show: true,
    };
  }, []);
  return (
    <>
      <h1>count:{simulate}</h1>
      <button onClick={() => setNum((num) => num + 1)}>click:{num}</button>
      <Slowcomponent show={propss} handelSetSimulate={handelSetSimulate} />
    </>
  );
}

const Slowcomponent = memo(function Slowcomponent({ show, handelSetSimulate }) {
  const postarr = Array.from(
    { length: 50000 },
    () => "words in my soul loren hits cuts in the heaven to it by ele"
  );
  return (
    <>
      <h1>Posts</h1>
      <button onClick={handelSetSimulate}>clickMeSlowcomp</button>

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
