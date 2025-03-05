import { hasLength, matches, useForm } from "@mantine/form";
import { SecurityApi } from "../../../core/api/security.api";
import { AppPasswordInput, AppTextInput } from "../utils/text_input";
import { AppBtnFilled } from "../utils/app_button";
import { SignupDto } from "../../../core/model/user";
import { excludeFields } from "../../../utils/exclude_key";
import { PlaceAddressInput } from "../utils/google_place_address";
import { AppSvg } from "../utils/app_svg";
import { SvgAssets } from "../../../utils/svg_assets";

export const SignupForm = ({ switchForm }: { switchForm: () => void }) => {
  const [signup, signupState] = SecurityApi.useSignupMutation();
  const form = useForm<SignupDto>({
    initialValues: { password: "", confirmPassword: "" },
    validate: {
      password: hasLength({ min: 3 }, "minimum lenght is 3"),
      phone: matches(
        /^\+\d{1,4}\s?\d{6,15}$/,
        "phone format seems like +221 772371668"
      ),
      confirmPassword: (val) => {
        if (val !== form.getValues().password)
          return "password and confirmPassword should be the same";
      },
    },
  });
  const _onsubmit = form.onSubmit((data) => {
    console.log(data);
    const body = excludeFields(data, ["confirmPassword"]);
    signup(body);
  });
  return (
    <>
      {(signupState.isUninitialized || signupState.isError) && (
        <form className="flex flex-col gap-5" onSubmit={_onsubmit}>
          <AppTextInput
            {...form.getInputProps("displayname")}
            label="Nom Complet"
          />

          <AppTextInput {...form.getInputProps("email")} label="Email" />
          <AppTextInput
            placeholder="+221 77xxxxxx"
            {...form.getInputProps("phone")}
            label="Téléphone"
          />
          <PlaceAddressInput form={form} />
          <AppPasswordInput
            {...form.getInputProps("password")}
            label="Mot de passe"
          />
          <AppPasswordInput
            {...form.getInputProps("confirmPassword")}
            label="Mot de Passe confirmation"
          />
          <AppBtnFilled type="submit">S'inscrire</AppBtnFilled>
          <button
            onClick={switchForm}
            type="button"
            className="text-green-700 underline-offset-4 underline"
          >
            Se Connecter
          </button>
        </form>
      )}
      {signupState.isSuccess && (
        <div className="flex flex-col  gap-5 items-center py-3  rounded-md">
          <AppSvg
            {...SvgAssets.check}
            className="size-24 fill-green-300 stroke-[.3] stroke-green-800"
          />
          <div className="text-center">
            <h1 className="text-3xl pb-4 font-bold">Inscription réussie !</h1>

            <p className="max-w-xl text-lg">
              Pour finaliser votre inscription, veuillez consulter votre boîte
              email et cliquer sur le lien de validation.
            </p>
            <p className="max-w-xl text-lg">
              Si vous ne recevez pas l'email dans quelques minutes, pensez à
              vérifier votre dossier spam.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
