import { useReducer } from "react";

const state = {
  status: 0,
};

const reducer = (count, action) => {
  switch (action.type) {
    case "up":
      console.log(action);
      return (count = {
        ...count,
        status: count.status + 1,
      });
    case "down":
      console.log(action);
      return (count = {
        ...count,
        status: count.status - 3,
      });
    case "0":
      console.log(action);
      return (count = {
        ...count,
        status: 0,
      });

    default:
  }
};

export default function UseReducer() {
  const [count, dispatch] = useReducer(reducer, state);
  console.log(count);
  return (
    <>
      <button onClick={() => dispatch({ type: "up" })}>Up</button>
      <button onClick={() => dispatch({ type: "down" })}>down</button>
      <button onClick={() => dispatch({ type: "0" })}>0</button>
      <div>{count.status}</div>
    </>
  );
}
