import { img_logo } from "../../../utils/assets";
import { HeaderNavWeb } from "./header_nav";
import { LoginForm } from "../utils/login_form";
import { ProfileWidget } from "../send_request_button/profile_widget";

export const Header = () => {
  return (
    <>
      <div className="md:h-20 h-15 w-full  outline-2 "></div>
      <div className="md:h-20 h-15 fixed z-10 outline outline-slate-600/20  top-0 bg-slate-50 w-screen   ">
        <div className="flex h-full w-full p-2 items-center content-center justify-between">
          <div className="flex gap-3 items-center ">
            <img src={img_logo} alt="" className="md:h-16 h-10" />
            <span className="font-bold hidden md:block text-xs md:text-sm">
              DIRECTION DE L'IMMIGRATION <br></br> ET DES SERVICES AUX CITOYENS
            </span>
            <span className="md:hidden text-xl font-bold">
              {import.meta.env.VITE_APP_NAME}
            </span>
          </div>
          <div className="lg:block hidden">
            <HeaderNavWeb />
          </div>
          <div className="lg:w-[40px]"></div>
          <div className="flex gap-3 items-center">
            <LoginForm />
            <ProfileWidget />
          </div>
        </div>
      </div>
    </>
  );
};
