import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/HomePage/Home";
import Login from "./view/Login";
import AddToCart from "./Components/AddToCart/AddToCart";
import Registration from "./Registration";
function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<AddToCart />} />
      </Routes> */}
      <Registration />
    </div>
  );
}

export default App;
