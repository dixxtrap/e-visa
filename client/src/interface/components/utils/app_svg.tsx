import { FC } from "react";
import { SvgPath } from "../../../utils/svg_assets";

export const AppSvg: FC<SvgPath & { className?: string }> = (props) => {
  return (
    <svg viewBox={props.viewBox ?? "0 0 24 24"} className={props.className}>
      {props.paths}
    </svg>
  );
};
