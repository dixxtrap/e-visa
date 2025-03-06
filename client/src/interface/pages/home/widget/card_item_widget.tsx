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
    <div className="group outline outline-slate-500/50  min-h-full flex gap-4 transition-all ease-in-out duration-200 tr ring-1 ring-slate-200/20 hover:shadow-2xl bg-slate-200 origin-top-left hover:rotate-0 hover:ring-1  rounded-md ring-inset  flex-col ">
      <div className="peer flex flex-col    outline outline-slate-500/60 transition-all duration-300 h-full p-4 w-full group-hover:bg-green-300 rotate-1 group-hover:rotate-0 origin-top-left  rounded-md   bg-white">
        <div className="min-h-16  flex gap-2 items-start lg:pr-16 lg:flex-col  mt-2">
          <div className="size-10">{icon}</div>
          <h2 className="md:text-2xl text-base  ">{label}</h2>
        </div>
        <div className="grow text-center md:text-left  text-sm md:text-base ">
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};
