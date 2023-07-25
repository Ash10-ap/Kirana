import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/HomePage/Home";
import AddToCart from "./Components/AddToCart/AddToCart";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<AddToCart />} />
      </Routes>
    </div>
  );
}

export default App;
