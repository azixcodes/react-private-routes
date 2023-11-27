import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
function App() {
  let auth = true;
  return (
    <section className="flex flex-col">
      <Routes>
        <Route path="/" element={<h4>Main Root page</h4>} />

        <Route element={<PrivateRoutes auth={auth} />}>
          <Route path="/about-us" element={<h4>About us page</h4>} />
          <Route path="/contact" element={<h4> Contact page</h4>} />
          <Route path="/users" element={<h4>Users page</h4>} />
          <Route path="/home" element={<h4>Home page</h4>} />
          <Route path="/settings" element={<h4> Settings page</h4>} />
        </Route>
        <Route path="/login" element={<h4>login</h4>} />
        <Route path="/forgot-password" element={<h4>Forgot Password</h4>} />
        <Route path="/send-otp" element={<h4>OTP</h4>} />
      </Routes>
    </section>
  );
}

export default App;
