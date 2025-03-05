import { Outlet } from "react-router";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/utils/footer";

export const BasePage = () => {
  return (
    <div className="flex w-full bg-light-bg overflow-x-hidden flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
