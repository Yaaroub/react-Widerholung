import Test from "./components/Test";
import Test2 from "./components/Test2";
import UseE from "./components/UseE";
import UseReducer from "./components/UseReducer";
import { useState } from "react";
const favoriteFood = [
  {
    name: "Spaghetti Bolognese",
    img: "https://ais.kochbar.de/kbrezept/451209_892854/1200x1200/spaghetti-bolognese-rezept-bild-nr-4003.jpg",
  },
  {
    name: "Hallaca",
    img: "https://www.goya.com/media/7874/hallacas.jpg?quality=80",
  },
  {
    name: "Ghormeh Sabzi",
    img: "https://cdn.gutekueche.de/upload/rezept/11616/ghormeh-sabzi.jpg",
  },
  {
    name: "Sprotten ohne Öl",
    img: "https://essenrezept.de/wp-content/uploads/2021/08/Sprotten-Rezept.jpg",
  },
];

function App() {
  const [zahl, setZahl] = useState(0);

  const clickHandlerZ = () => {
    setZahl(zahl + 1);
  };
  return (
    <div className="App">
      {favoriteFood.map((el, i) => {
        return <Test key={i} food={el} />;
      })}
      <Test2 />
      <button onClick={clickHandlerZ}>counter</button>
      <h1>{zahl}</h1>
      <button onClick={() => setZahl(zahl-1)}>reset</button>
      <UseE/>
      <UseReducer/>
    </div>
  );
}

export default App;
