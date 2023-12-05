import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";
import UserCreate from "./page/UserCreate";
import Main from "./page/Main";
import ShopPage from "./page/ShopPage";
import AdminPage from "./page/AdminPage";

function App() {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<UserCreate />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route
          path="/dashboard"
          element={loggedIn ? <Main /> : <Navigate to="/login" />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
