import { FormValidateInput, isEmail, isNotEmpty } from "@mantine/form";
import { UserDto } from "../../core/model/user";
const required = isNotEmpty("shoud not be empty")
const email=isEmail("shoud not be an email like xxxxx@gmail.com")
export const userFormValidation: FormValidateInput<Partial<UserDto>> = {
  displayname: required,
  phone: required,
  email: email ,
};
