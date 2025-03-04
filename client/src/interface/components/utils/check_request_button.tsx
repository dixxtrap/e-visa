import { AppBtnOutline } from "./app_button";

export const CheckRequestButton = () => {
  return (
    <>
      <div className=" md:hidden">
        <AppBtnOutline size="sm" type="button" className=" onblack  ">
          Suivre ma demande
        </AppBtnOutline>
      </div>
      <div className=" md:block hidden">
        <AppBtnOutline size="lg" type="button" className=" onblack  ">
          Suivre ma demande
        </AppBtnOutline>
      </div>
    </>
  );
};
