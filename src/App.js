<<<<<<< HEAD
import './App.css';
// import TempApp from './redux/TempApp';
import Login from './view/Login';

function App() {
  return (
    <div className="App">
      <Login />
      {/* <TempApp/> */}
      
=======
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
>>>>>>> 7cd8876826c6025765554965dd87f152da461f84
    </div>
  );
}

export default App;
