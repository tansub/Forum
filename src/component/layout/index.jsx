import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer/footer";
import { Bottom } from "../bottom/bottom";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Bottom />
      <Footer />
      
    </div>
  );
};
