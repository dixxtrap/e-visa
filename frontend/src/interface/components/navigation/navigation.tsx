import { NavLink } from "react-router";
import { clsx } from "clsx";
import { SvgAssets } from "../../../utils/svg_assets";
import {  Fragment, ReactNode, useId } from "react";

const items: {
  label: string;
  to: string;
  viewBox?: string;
  paths: ReactNode[];
}[] = [
  {
    label: "Accueil",
    ...SvgAssets.home,
    to: "/dashboard",
  },
  {
    label: "Agents",
    ...SvgAssets.agent,
    to: "/user",
  },
  {
    label: "Utilisateurs",
    ...SvgAssets.userGroup,
    to: "/customer",
  },
  {
    label: "Demandes",
    ...SvgAssets.stickyNote,
    to: "/visa-application",
  },
  {
    label: "Type de Visa",
    ...SvgAssets.visaType,
    to: "/visa-type",
  },
  {
    label: "Permissions",
    ...SvgAssets.setting3,
    to: "/permission",
  },
  {
    label: "Roles",
    ...SvgAssets.setting2,
    to: "/role",
  },
];
export const Navigation = () => {
  return (
    <div className="flex  flex-col gap-5">
      {items.map((e) => (
        <NavLink to={e.to} key={e.label + "navlink"}>
          {({ isActive }) => (
            <div
              key={e.label + "navlink_contains"}
              className={clsx("flex gap-2 p-2 items-center fill-slate-800", {
                "  outline-1 outline-slate-300 font-bold rounded-md ": isActive,
              })}
            >
              <svg
                viewBox={e.viewBox ?? "0 0 24 24"}
                stroke="black"
                strokeWidth={.8}
                className={clsx("size-5  ", {
                  " fill-amber-500 ": isActive,
                  "stroke-green-800 fill-green-500/70": !isActive,
                })}
              >
                {e.paths.map((e) => (
                  <Fragment key={useId()}>{e}</Fragment>
                ))}
              </svg>
              <span> {e.label}</span>
            </div>
          )}
        </NavLink>
      ))}
    </div>
  );
};
