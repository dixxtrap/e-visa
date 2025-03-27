import { SvgAssets } from "../../../utils/svg_assets";
import { AppSvg } from "./app_svg";

export const ErrorResponse = (props: any) => {
  return (
    props.isError && (
      <div className="flex flex-col mt-2 rounded-sm bg-red-100 p-2 outline outline-red-600">
        <div className="flex justify-between">
          <div className="font-bold">
            {(props.error as any).data.code?.replace("_", " ") ??
              "Internal Server Error"}
          </div>{" "}
          <div onClick={props.reset}>
            <AppSvg className="size-6 rotate-45" {...SvgAssets.plus}></AppSvg>
          </div>
        </div>
        {((props.error as any).data.message as []).map((e) => (
          <span>{e}</span>
        ))}
      </div>
    )
  );
};
