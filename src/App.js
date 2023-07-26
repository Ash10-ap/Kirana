import './App.css';
import Login from './view/Login';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/HomePage/Home";
import AddToCart from "./Components/AddToCart/AddToCart";
import Registration from "./Registration";
import Filter from './view/Filter';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<AddToCart />} />
      </Routes> */}
      {/* <Login /> */}
      {/* <TempApp/> */}
      {/* <Registration /> */}
      <Filter />
      
    </div>
  );
}

export default App;
