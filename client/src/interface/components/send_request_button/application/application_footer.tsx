import { FC } from "react";
import { AppBtnFilled, AppBtnOutline } from "../../utils/app_button";
type ApplicationFooterProps = {
  next?: () => void;
  prevent?: () => void;
  onDelete?: () => void;
};
export const ApplicationFooter: FC<ApplicationFooterProps> = ({
  prevent,
  onDelete,
}) => {
  return (
    <>
      <div className="h-14"></div>

      <div className=" fixed bottom-0 left-0 right-0  h-14 border-t border-slate-400/80 bg-white">
        <div className="h-full flex items-center gap-4 px-2 ">
          <AppBtnOutline className=" bg-transparent " onClick={onDelete}>
            Annuler
          </AppBtnOutline>
          <div className="grow"></div>
          <AppBtnFilled onClick={prevent} className="btn outline">
            Précédent
          </AppBtnFilled>
          <AppBtnFilled type="submit" className="btn outline">
            Suivant
          </AppBtnFilled>
        </div>
      </div>
    </>
  );
};
