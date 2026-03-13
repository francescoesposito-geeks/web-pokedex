import { Outlet } from "react-router";
import { Navbar } from "/src/components/Navbar.jsx";
import { Footer } from "/src/components/Footer.jsx";

export function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
