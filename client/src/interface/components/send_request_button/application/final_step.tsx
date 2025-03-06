import { SvgAssets } from "../../../../utils/svg_assets";
import { AppSvg } from "../../utils/app_svg";

export const FinalStep = () => {
  return (
    <div className="min-h-[80vh] ">
      <div className="flex flex-col  gap-5 items-center py-3  rounded-md">
        <AppSvg
          {...SvgAssets.check}
          className="size-24 fill-green-300 stroke-[.2] stroke-green-800"
        />
        <div className="text-center">
          <h1 className="text-3xl pb-4 font-bold">Demande de visa envoyée !</h1>

          <p className="max-w-xl text-lg">
            Votre demande de visa a bien été prise en compte. Vous recevrez
            prochainement une réponse détaillée par email. En attendant, vous
            pouvez suivre l'évolution de votre dossier directement sur notre
            plateforme via votre espace personnel.<br></br> Merci de votre
            confiance.
          </p>
        </div>
      </div>
    </div>
  );
};
