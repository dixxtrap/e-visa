import { hasLength, matchesField, useForm } from "@mantine/form";
import {
  AppPasswordInput,
} from "../../components/form/text_input";
import { AppBtnFilled } from "../../components/utils/app_button";
import { Assets } from "../../../utils/assets";
import {  getFormInputAttr } from "../../components/form/get_form_input_attribute";

export const DefinePassword = () => {
    const form = useForm({
      mode
      :"controlled",
    initialValues: { password: "", confirmPassword: "" },
    validate: {
      password: hasLength(
        { min: 8, max: 14 },
        "password must be 8-14 characters long"
      ),
      confirmPassword: matchesField("password", "Passwords are not the same"),
    },
  });
    const _onsubmit = form.onSubmit((data) => {
      console.log(data)
  });
  return (
    <div className="h-full content-center bg-linear-150 from-white  to-slate-50 ">
      <form
        onSubmit={_onsubmit}
        className="mx-auto gap-5 py-20 md:px-10 flex flex-col bg-linear-20 shadow-2xl from-20% from-slate-100 to-white outline rounded-md outline-slate-200  max-w-xl  p-2  "
      >
        <div className="flex flex-col  items-center ">
          <img src={Assets.logo} className="h-20 mx-auto" />
                  <h2 className="text-2xl ">{ import.meta.env.VITE_APP_NAME}</h2>
          <p>Vieillez définir votre mot de passe</p>
              </div>
              <AppPasswordInput
          error={form.errors["password"]}
          key={form.key("password")}
          {...form.getInputProps("password")}
          label={"mot de passe"}
        />
        <AppPasswordInput
         {...getFormInputAttr({form:form, path:"confirmPassword"})}
          label={"Confirmer votre mot de passe"}
        />

        <div className="h-5"></div>
        <AppBtnFilled type="submit">Valider</AppBtnFilled>
      </form>
    </div>
  );
};
