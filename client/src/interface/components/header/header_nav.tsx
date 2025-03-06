import clsx from "clsx";
import { NavLink } from "react-router";

const items = [
  { label: "Accueil", path: "/" },
  { label: "A propos", path: "/about" },
  { label: "Assistance", path: "/assistant" },
];

export const HeaderNavWeb = () => {
  return (
    <div className="md:flex hidden gap-10  font-inter ">
      {items.map((e) => (
        <NavLink to={e.path} className=" " key={e.label}>
          {({ isActive }) => (
            <div className="flex flex-col">
              <span
                className={clsx("", {
                  "font-bold": isActive,
                })}
              >
                {" "}
                {e.label}
              </span>
              <div
                className={clsx("h-1  rounded-lg", {
                  "outline   bg-amber-200": isActive,
                })}
              ></div>
            </div>
          )}
        </NavLink>
      ))}
    </div>
  );
};
