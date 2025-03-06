import { FC, ReactNode } from "react";
export type CardItemWidgetProps = {
  label: string;
  icon: ReactNode;
  onClick: () => void;
  comment: string;
};
export const CardItemWidget: FC<CardItemWidgetProps> = ({
  icon,
  label,
  comment,
}) => {
  return (
    <div className="card ">
      <div className="cardContainer">
        <div className="md:min-h-16  flex gap-2 items-start lg:pr-4 lg:flex-col  mt-2">
          <div className=" size-10">{icon}</div>

          <h2 className="md:text-2xl hidden md:block text-base  font-bold">
            {label}
          </h2>
          <div className="md:hidden">
            <h2 className="md:text-2xl  text-base  font-bold">{label}</h2>
            <div className="grow   text-sm md:text-base ">
              <p>{comment}</p>
            </div>
          </div>
        </div>
        <div className="grow hidden md:block   text-sm md:text-base ">
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};
