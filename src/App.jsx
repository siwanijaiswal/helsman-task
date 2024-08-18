import LogIn from "./components/Auth/LogIn";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ManageOrders from "./components/Product/manageOrders";
import Navigation from "./components/Product/Navigation";
import Dashboard from "./components/Product/Dashboard";
import Order from "./components/Product/Order";

const Layout = () => {
  return (
    <div className="flex">
      <Navigation />

      <div className="ml-64 p-8 flex-1">
        <Routes>
          <Route path="manage-orders" element={<ManageOrders />} />
          <Route path="" element={<Dashboard />} />
          {/* <Route path="transactions" element={<Order />} /> */}
        </Routes>
      </div>
    </div>
  );
};

function App() {
  const location = useLocation();
  const showNavigation = location.pathname !== "/";

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LogIn />} />

        {showNavigation && <Route path="/product/*" element={<Layout />} />}
      </Routes>
    </>
  );
}

export default App;
