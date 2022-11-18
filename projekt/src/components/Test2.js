import { useState } from "react";
export default function Test2() {
  const [count, setCount] = useState(false);
  console.log(count);
  const clickHandler2=()=>{
    setCount(!count)
  }
  return (
    <>
      <h2>{count?"Mohannad":"yaman"}</h2>

      <button onClick={clickHandler2} >klicken Sie hier</button>
    </>
  );
}
