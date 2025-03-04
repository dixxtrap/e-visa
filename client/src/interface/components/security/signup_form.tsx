import { Form, useForm } from "@mantine/form";
import { SecurityApi } from "../../../core/api/security.api";
import { LoginDto } from "../../../core/model/login";
import { AppTextInput } from "../utils/text_input";
import { AppBtnFilled } from "../utils/app_button";

export const SignupForm = ({ switchForm }: { switchForm: () => void }) => {
  const [] = SecurityApi.useLoginMutation();
  const form = useForm<LoginDto>({});
  //   const _onSubmit = (data: LoginDto) => {
  //     console.log(data);
  //     login({ ...data, type: "CUSTOMER" });
  //   };
  return (
    <Form className="flex flex-col gap-5" form={form}>
      <AppTextInput label="Prénom" />
      <AppTextInput label="Nom" />

      <AppTextInput {...form.getInputProps("username")} label="Email" />
      <AppTextInput {...form.getInputProps("password")} label="Mot de passe" />
      <AppTextInput label="Mot de Passe confirmation" />
      <AppBtnFilled type="submit">S'inscrire</AppBtnFilled>
      <button onClick={switchForm} type="button" className="text-green-400">
        Se Connecter
      </button>
    </Form>
  );
};
