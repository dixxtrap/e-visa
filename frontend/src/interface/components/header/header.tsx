import { Assets } from "../../../utils/assets";
import { UserProfile } from "./user_profil";

export const Header = () => {
  return (
    <div className="w-full h-full flex items-center gap-3 px-3 justify-between  bg-">
      <img src={Assets.logo} className="size-8" />
      <div>{ import.meta.env.VITE_APP_NAME}</div>
      <div className="grow"></div>
      <div>
        <UserProfile />
      </div>
    </div>
  );
};
