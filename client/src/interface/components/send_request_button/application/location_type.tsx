import { FC, useState } from "react";
import { AppTextInput } from "../../utils/text_input";
import { SvgAssets } from "../../../../utils/svg_assets";
import { AppSvg } from "../../utils/app_svg";
import clsx from "clsx";
import { TextInputProps } from "@mantine/core";

const items = [
  {
    label: "Par voie Aerien",
    value: "air",
    icon: {
      viewBox: "1 -1 16 19",
      paths: [
        <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0" />,
      ],
    },
  },
  {
    label: "Par Voie Maritine",
    value: "boat",
    icon: SvgAssets.ship,
  },
  {
    label: "Par voie Terreste",
    value: "land",
    icon: SvgAssets.car,
  },
];
type LocationTypeProps = {
  companyName: Partial<TextInputProps>;
  companyType: Partial<TextInputProps> & { setValue: (val: string) => void };
  companyIdentity: Partial<TextInputProps>;
};
export const LocationType: FC<LocationTypeProps> = ({
  companyName,
  companyIdentity,
  companyType,
}) => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {items.map((e, index) => (
          <div
            onClick={() => {
              setCurrent(index);
              companyType.setValue(e.value);
            }}
            className={`flex bg-[var(--bg-input)] ${
              current === index
                ? " bg-green-300 outline-green-900  "
                : "  group/me outline-slate-200   hover:bg-amber-500/50 hover:outline-green-900 "
            }  justify-center  cursor-pointer gap-3 py-5 px-5 rounded-md  outline items-center `}
          >
            <AppSvg
              className={clsx(
                "size-10 fill-amber-400 stroke-[.5] stroke-black/70  relative",
                { "fill-green-800/70 stroke-slate-600": current === index }
              )}
              {...e.icon}
            />

            <span className="text-xl lg:block hidden  ">{e.label}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <AppTextInput {...companyName} label={"Compagnie name"} />
        <AppTextInput
          {...companyIdentity}
          label={"Locomotive Identification"}
        />
      </div>
    </>
  );
};
