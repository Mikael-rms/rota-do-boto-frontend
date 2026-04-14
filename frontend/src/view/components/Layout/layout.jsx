import Navbar from "./NavBar/navBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/footer.jsx";

function Layout() {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    )
} export default Layout;