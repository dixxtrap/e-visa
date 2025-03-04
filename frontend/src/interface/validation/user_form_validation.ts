import { FormValidateInput, isEmail, isNotEmpty } from "@mantine/form";
import { UserDto } from "../../core/model/user";

export const userFormValidation: FormValidateInput<Partial<UserDto>> = {
  displayname: isNotEmpty("shoud not be empty"),
  phone: isNotEmpty("shoud not be empty"),
  email: isEmail("shoud not be an email like xxxxx@gmail.com"),
};
