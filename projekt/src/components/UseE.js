import { useEffect, useState } from "react";

export default function UseE() {
  const [count, setCount] = useState(0);
  const arr = [];
  console.log(arr);

  const clickHandler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    arr.push(count);
  }, [count]);

  return (
    <>
      <div>UseE</div>
      <button onClick={clickHandler}>useEffect</button>
      <h1>{count}</h1>
    </>
  );
}
