import { useState } from "react";
import { motion } from "motion/react";
import { AppSvg } from "../../../components/utils/app_svg";
import { SvgAssets } from "../../../../utils/svg_assets";
import clsx from "clsx";
const faqs: { label: string; description: string }[] = [
  {
    label: "Quels documents dois-je fournir pour ma demande de visa ?",
    description:
      " Vous devez fournir un passeport valide, une photo d’identité récente, un billet d’avion aller-retour, une preuve d’hébergement et tout document complémentaire selon le type de visa demandé",
  },
  {
    label: "Combien coûte la demande de visa ?",
    description:
      " Les frais de visa varient selon la durée et le type de visa choisi. Vous pouvez consulter les tarifs directement sur notre site lors de votre demande en ligne.",
  },
  {
    label: "J’ai oublié mon identifiant/mot de passe, comment le récupérer ?",
    description:
      ' Cliquez sur "Mot de passe oublié" sur la page de connexion et suivez les instructions pour réinitialiser votre mot de passe via votre adresse e-mail',
  },
  {
    label: "Comment savoir si ma demande a été acceptée ou refusée ?",
    description:
      " Vous recevrez une notification par e-mail une fois votre demande traitée. Vous pouvez également suivre le statut en temps réel sur notre site en vous connectant à votre compte.",
  },
];

export const FaqItem = ({
  isActive,
  label,
  description,
  setCurrent,
}: {
  label: string;
  isActive: boolean;
  description: string;
  setCurrent: () => void;
}) => {
  return (
    <div
      key={label}
      onClick={setCurrent}
      className="outline pb-3  divide-y divide-slate-300 rounded-sm outline-slate-400/70 ring-slate-300 bg-[white!important] "
    >
      <div className="flex justify-between flex-nowrap p-2">
        <span className="font-bold ">{label}</span>
        <AppSvg
          {...SvgAssets.plus}
          className={clsx(
            "size-7  min-w-7 fill-amber-300 stroke-black stroke-[0.5px]  transform-3d transition-all duration-300",
            {
              "rotate-45": isActive,
            }
          )}
        />
      </div>

      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "max-content", type: "" }}
          transition={{ duration: 0.1, type: "tween", damping: 15 }}
          className="relative  px-3 pt-5 overflow-hidden h-min"
        >
          <span className="text-sm  md:text-base">{description}</span>
        </motion.div>
      )}
    </div>
  );
};

export const FaqItems = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="flex flex-col gap-5 ">
      {faqs.map((e, index) => (
        <FaqItem
          setCurrent={() => {
            setCurrent(index);
          }}
          label={e.label}
          description={e.description}
          isActive={index == current}
        />
      ))}
    </div>
  );
};
