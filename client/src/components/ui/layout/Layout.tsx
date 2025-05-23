import { lazy } from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Footer = lazy(() => import("../../navbar-footer/Footer"));
const Navbar = lazy(() => import("../../navbar-footer/Navbar"));

const Layout = () => (
  <>
    <Navbar />
    <div className="layout">
      <Outlet />
      <Footer />
    </div>
  </>
);

export default Layout;
