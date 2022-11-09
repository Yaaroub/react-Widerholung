import mohanad from "./Data";

export default function Test({ food }) {
  //   const arrF = food.map((el, i) => {
  //     return (
  //       <>
  //         <div key={i}>{el.name}</div>
  //       </>
  //     );
  //   });

  const clickHandler = () => {
    console.log("mohannad");
  };
  console.log(food);
  return (
    <>
      <img src={mohanad[0].picture} />
      <h1>hello</h1>
      <div>{food.name}</div>
      <button onClick={() => clickHandler()}>Klick</button>
    </>
  );
}
