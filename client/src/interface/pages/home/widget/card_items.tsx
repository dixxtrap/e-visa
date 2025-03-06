import { SvgAssets } from "../../../../utils/svg_assets";
import { AppSvg } from "../../../components/utils/app_svg";
import { CardItemWidget, CardItemWidgetProps } from "./card_item_widget";
const classNames = {
  icon: "icon",
  iconContainer: "iconContainer",
};
const items: CardItemWidgetProps[] = [
  {
    label: "Vérification de l’état de la demande",
    icon: (
      <div className={classNames.iconContainer}>
        <AppSvg {...SvgAssets.setting3} className={classNames.icon} />
      </div>
    ),
    onClick: () => {},
    comment: `Personnel d’enregistrement de la compagnie aérienne, consultez ici l’état de la demande d’un voyageur en quelques clics.`,
  },
  {
    label: "Suivi de ma demande",
    icon: (
      <div className={classNames.iconContainer}>
        <AppSvg {...SvgAssets.stickyNote} className={classNames.icon} />
      </div>
    ),
    onClick: () => {},
    comment: `Entrez les informations demandées pour suivre l'évolution de votre demande et obtenir des mises à jour en temps réel.`,
  },
  {
    label: "Politique de confidentialité",
    icon: (
      <div className={classNames.iconContainer}>
        <AppSvg {...SvgAssets.shield} className={classNames.icon} />
      </div>
    ),
    onClick: () => {},
    comment: `Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée.`,
  },
  {
    label: "Informations générales",
    icon: (
      <div className={classNames.iconContainer}>
        <AppSvg {...SvgAssets.setting2} className={classNames.icon} />
      </div>
    ),
    onClick: () => {},
    comment: `Obtenez des détails sur le processus de demande d'eTA pour le Sénégal.`,
  },
];
export const CardItems = () => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch px-3 md:px-5 lg:px-10 gap-5 md:gap-10     py-10">
      {items.map((e) => (
        <CardItemWidget key={e.label} {...e} />
      ))}
    </div>
  );
};
