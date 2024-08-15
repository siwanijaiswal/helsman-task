import LogIn from "./components/Auth/LogIn";
import Product from "./components/product/product";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
