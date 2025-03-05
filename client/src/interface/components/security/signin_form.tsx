import { useForm } from "@mantine/form";
import { AppPasswordInput, AppTextInput } from "../utils/text_input";
import { SecurityApi } from "../../../core/api/security.api";
import { LoginDto } from "../../../core/model/login";
import { AppBtnFilled } from "../utils/app_button";
import { useEffect } from "react";

export const SignInForm = ({ switchForm }: { switchForm: () => void }) => {
  const [login, loginState] = SecurityApi.useLoginMutation();
  const form = useForm<LoginDto>({});
  const _onsubmit = form.onSubmit((data) => {
    console.log(data);
    login({ ...data, type: "CUSTOMER" });
  });
  useEffect(() => {
    if (loginState.isSuccess) {
      window.location.reload();
    }
  }, [loginState.isSuccess]);
  return (
    <form onSubmit={_onsubmit} className="flex flex-col gap-5">
      <AppTextInput
        {...form.getInputProps("username")}
        name="username"
        label={"Email"}
      />
      <AppPasswordInput
        {...form.getInputProps("password")}
        name="password"
        label="Password"
      />
      <AppBtnFilled type="submit">Se connecter</AppBtnFilled>
      <button
        type="button"
        onClick={switchForm}
        className="text-green-700 underline-offset-4 underline"
      >
        S'inscrire
      </button>
    </form>
  );
};
