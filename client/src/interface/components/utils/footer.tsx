import { img_logo, svg_loader } from "../../../utils/assets";

export const Footer = () => {
  return (
    <div className="bg-slate-950 h-[50vh] relative  w-full">
      <div className="absolute h-full content-center w-full">
        <div className="m-auto relative size-[30vh] flex">
          <img
            src={img_logo}
            alt=""
            className=" absolute size-full opacity-[.1]  m-auto"
          />
          <img
            src={svg_loader}
            alt=""
            className="size-full  absolute   m-auto"
          />
        </div>
      </div>
      <div className="absolute h-full content-center w-full backdrop-grayscale-100">
        <div className="flex text-white h-full justify-between flex-col">
          <div className="grow">
            <div></div>
          </div>
          <div className={"outline-[0.1px]  outline-slate-500 p-2 "}>
            <p
              className={"text-xs  text-center md:text-left text-slate-200/67"}
            >
              {" "}
              Copyright © 2024 e-visa Séenégal by River Tech Sn.
              <br className={"block md:hidden"}></br> All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
