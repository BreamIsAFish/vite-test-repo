// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Test from "./src/test";
import Vid from "./src/vid/test";

function App() {
  // const [count, setCount] = useState(0)
  // const [count, setCount] = useState(0)
  console.log("VITE_FEATURE_CONFIG", import.meta.env.VITE_FEATURE_CONFIG);
  console.log(
    "VITE_FEATURE_CONFIG",
    JSON.parse(import.meta.env.VITE_FEATURE_CONFIG)
  );
  console.log(
    "VITE_FEATURE_CONFIG",
    JSON.parse(JSON.parse(import.meta.env.VITE_FEATURE_CONFIG))
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          Component={Test}
          path="/"
        />
        <Route
          Component={Vid}
          path="/vid"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
