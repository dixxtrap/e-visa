import { Navigate } from "react-router"
import { SecurityApi } from "../../../core/api/security.api"
import { Assets } from "../../../utils/assets"
import { AppBtnFilled } from "../../components/utils/app_button"
import { AppPasswordInput, AppTextInput } from "../../components/form/text_input"
import { isNotEmpty, useForm } from "@mantine/form"
import { LoginDto } from "../../../core/model/login"

export const Login = () => {
    const profile = SecurityApi.useProfileQuery();
    const [login] = SecurityApi.useLoginMutation();
    const form = useForm<LoginDto>({
        mode: "controlled",
        validate: {
            username: isNotEmpty("Could not be empty"),
            password: isNotEmpty("Could not be empty")
        }
    })
    const _onsubmit = form.onSubmit((data) => {

        console.log(form.validate())
        login({ ...data, type: "USER" })
    })
    return (

        profile.isSuccess ? <Navigate to={"dashboard"} /> :
            <div className="h-full content-center bg-linear-150 from-white  to-slate-50 ">


                <form onSubmit={_onsubmit} className="mx-auto gap-5 py-20 md:px-10 flex flex-col bg-linear-20 shadow-2xl from-20% from-slate-100 to-white outline rounded-md outline-slate-200  max-w-xl  p-2  ">
                    <div className="flex flex-col  items-center ">
                        <img src={Assets.logo} className="h-20 mx-auto" />
                        <h2 className="text-2xl ">E-visa Senegal</h2>
                    </div>
                    <AppTextInput error={form.errors['username']} key={form.key("username")} {...form.getInputProps("username")} label={"Email"} />
                    <AppPasswordInput error={form.errors['password']} key={form.key("password")} {...form.getInputProps("password")} label={"mot de passe"} />
                    <div className="h-5"></div>
                    <AppBtnFilled type="submit" >Valider</AppBtnFilled>
                </form>
            </div >

    )
}



