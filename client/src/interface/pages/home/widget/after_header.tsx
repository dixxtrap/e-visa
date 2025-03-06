import { SecurityApi } from "../../../../core/api/security.api";
import {
  img_after_header,
  img_bg_color,
  svg_plane,
} from "../../../../utils/assets";
import { SendRequestButton } from "../../../components/send_request_button/send_request_button";
import { CheckRequestButton } from "../../../components/utils/check_request_button";

export const AfterHeader = () => {
  const profile = SecurityApi.useProfileQuery();
  return (
    <div className="w-[100dvw] flex relative">
      <img
        className=" absolute w-full h-full  z-[1]"
        src={img_after_header}
        alt=""
      />
      <img
        className=" absolute w-full h-full  z-[2]"
        src={img_bg_color}
        alt=""
      />
      <img
        className=" absolute right-10 md:right-20 h-[150px] sm:h-[200px] md:h-[400px] bottom-0  z-[5]"
        src={svg_plane}
        alt=""
      />

      <div className="min-h-[0vh] md:py-10 flex flex-col  items-start justify-center h-[30vh] sm:h-[40vh] md:h-[70vh] text-white bg-linear-30 from-40% from-black/70  to-black/0 text-center content-center w-full bg-transparent  z-[3]">
        <div className=" max-w-6xl flex flex-col items-start gap- mx-auto">
          <p className="text-2xl px-5 md:text-5xl lg:text-7xl font-inter  text-left font-bold z-10">
            <span className="text-clip italic bg-linear-90 bg-clip-text font-extralight text-sm md:text-3xl text-transparent from-1% from-yellow-500 to-green-400">
              Sénégal
            </span>
            <br />
            Obtenez votre visa électronique
            <br />
            pour le{" "}
            <span className="text-clip bg-linear-140 bg-clip-text italic text-transparent from-5% from-yellow-500 to-green-400">
              Pays de la téranga
            </span>
            <br></br> <span>en toute simplicité.</span>
          </p>
          <div className="h-[2vh] md:h-[6vh] lg:h-[10vh]"></div>
          {profile.isSuccess && profile.data?.data.customer && (
            <div className="gap-4 flex px-1">
              <SendRequestButton />
              <CheckRequestButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
