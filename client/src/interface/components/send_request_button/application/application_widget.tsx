import { ContactForm } from "./contact_form";
import { PassortForm } from "./passport_form";
import { TripInfo } from "./trip_info";
import { AppSvg } from "../../utils/app_svg";
import { SvgAssets } from "../../../../utils/svg_assets";

export const ApplicationWidget = ({
  form,
  items,
  current: label,
  setLabel,
}: {
  form: any;
  current: number;
  items: any[];
  onClose: () => void;
  setLabel: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const getPage = () => {
    switch (label) {
      case 1:
        return (
          <PassortForm
            next={() => setLabel(3)}
            form={form}
            prevent={() => setLabel(1)}
            close={close}
          />
        );
        break;
      case 3:
        return (
          <ContactForm
            form={form}
            next={() => setLabel(4)}
            prevent={() => setLabel(1)}
            close={close}
          />
        );
        break;
      case 4:
        return (
          <TripInfo
            next={() => setLabel(4)}
            form={form}
            prevent={() => setLabel(3)}
            close={close}
          />
        );
        break;
      default:
        return <div></div>;
        break;
    }
  };
  return (
    <>
      <div className="    flex  top-0 w-full relative divide-x divide-slate-400/80 gap-2 grid-cols-8">
        <div className="relative  md:block hidden">
          <div className=" pt-10 bg-red-500/0 sticky top-0 md:min-w-[260px]  md:flex gap-5 hidden flex-col ">
            {items.map((e) => (
              <button
                className={`flex items-center cursor-pointer px-2 gap-2 ${
                  label === e.key ? " font-bold " : label > e.key ? "" : ""
                }`}
              >
                {label > e.key ? (
                  <AppSvg
                    {...SvgAssets.check}
                    className="size-5 fill-green-300 stroke-1 stroke-black/40"
                  />
                ) : label === e.key ? (
                  <div
                    className={`size-4 outline content-center ml-0.5  rounded-full ${
                      label === e.key
                        ? " bg-amber-300/50 outline-amber-400"
                        : label > e.key
                        ? "bg-green-300 outline-green-400"
                        : "bg-slate-300 outline-slate-400 "
                    }`}
                  >
                    <div className="rounded-full m-auto contain-content size-2 bg-amber-500"></div>
                  </div>
                ) : (
                  <div
                    className={`size-3.5 outline content-center ml-0.5  rounded-full ${
                      label === e.key
                        ? " bg-cyan-300 outline-cyan-400"
                        : label > e.key
                        ? "bg-green-300 outline-green-400"
                        : "bg-slate-300 outline-slate-400 "
                    }`}
                  >
                    {" "}
                  </div>
                )}

                <span
                  className={
                    "text-black  text-left " +
                    `${label === e.key ? " font-bold " : ""}`
                  }
                >
                  {e.label}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="grow pt-10 px-1  relatiive   overflow-clip  ">
          {getPage()}
        </div>
      </div>
    </>
  );
};
