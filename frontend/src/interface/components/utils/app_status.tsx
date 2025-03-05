import clsx from "clsx";

export const AppStatus = ({
  isActive,
  actif = "activer",
  inactif = "Desactiver",
}: {
  isActive: boolean;
  actif?: string;
  inactif?: string;
}) => {
  return (
    <div
      className={clsx(
        "outline capitalize w-20 text-center rounded-md bg-linear-30 px-2",
        {
          " outline-green-600/40 text-green-950 from-green-100 to-green-200":
            isActive,
          "outline-rose-600/40 text-rose-950 from-rose-100 to-rose-200":
            !isActive,
        }
      )}
    >
      {isActive ? actif : inactif}
    </div>
  );
};
