import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
const PrivateRoutes = ({ auth }) => {
  return auth ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoutes;
