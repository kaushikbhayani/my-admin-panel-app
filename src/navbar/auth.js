import { Routes, Route, Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "../Pages/home";
import Dashboard from "../Pages/dashboard";
import AuthUser from "../AuthComponent/AuthUser";
import DrawerLeft from "../Component/DrawerLeft";
import Product from "../Pages/Product";

function Auth() {
  const { token, logout } = AuthUser();

  const logoutUser = () => {
    if (token != undefined) {
      logout();
    }
  };
  return (
    <>
      <nav>
        <DrawerLeft />

        <Outlet />
      </nav>

      <Outlet />
    </>
  );
}

export default Auth;
