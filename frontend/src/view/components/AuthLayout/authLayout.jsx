import { Outlet } from "react-router-dom";
import Footer from "../Layout/Footer/footer.jsx";

function AuthLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default AuthLayout;