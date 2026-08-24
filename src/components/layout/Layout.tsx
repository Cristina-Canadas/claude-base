import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTopButton } from "../ui/ScrollToTopButton";

export function Layout() {
  return (
    <div id="top" className="min-h-screen bg-ink-950 text-ink-50">
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
