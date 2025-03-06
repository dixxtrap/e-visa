import { Link, useParams } from "react-router";
import { SvgAssets } from "../../../utils/svg_assets";
import { AppSvg } from "../../components/utils/app_svg";
import { SecurityApi } from "../../../core/api/security.api";

export const AccountValidation = () => {
  const { code } = useParams();
  const activation = SecurityApi.useActivationQuery(code!);

  return (
    <div className="flex items-center justify-center h-screen w-screen ">
      <div className="flex outline gap-5 items-center py-3  rounded-md">
        <AppSvg
          {...SvgAssets.check}
          className="size-24 fill-green-300 stroke-[.3] stroke-green-800"
        />
        {activation.isSuccess && (
          <div>
            <h1 className="text-3xl font-bold">Validation échouée</h1>
            <p className="max-w-xl text-lg">
              La validation de votre compte n'a pas abouti. Veuillez vérifier le
              lien de validation ou contacter notre support pour obtenir de
              l'aide.
            </p>
            <Link to="/">Retour à l'accueil</Link>
          </div>
        )}
        {activation.isError && (
          <div>
            <h1 className="text-3xl font-bold">Compte validé !</h1>
            <p className="max-w-xl text-lg">
              Votre compte a été validé avec succès. Vous pouvez désormais vous
              connecter et profiter de toutes les fonctionnalités.
            </p>
            <Link to="/">Se connecter</Link>
          </div>
        )}
      </div>
    </div>
  );
};
