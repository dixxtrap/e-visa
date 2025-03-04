import { Modal } from "@mantine/core";
import { AppBtnFilled } from "../../components/utils/app_button";
import { useDisclosure } from "@mantine/hooks";
import { AppTextInput } from "../../components/form/text_input";
import {  useForm } from "@mantine/form";
import { PlaceAddressInput } from "../../components/form/google_place_address";
import { AppForm } from "../../components/form/app_form";
import { UserDto } from "../../../core/model/user";
import { UserApi } from "../../../core/api/user.api";
import { getFormInputAttr } from "../../components/form/get_form_input_attribute";
import { RoleInput } from "../role/role_input";
import { userFormValidation } from "../../validation/user_form_validation";

export const UserCreate = () => {
  const [create, createState] = UserApi.useCreateMutation();
  const [opened, { open, close }] = useDisclosure();
  const form = useForm<Partial<UserDto>>({
    validate: userFormValidation,
  });

  const _onsubmit = form.onSubmit((data) => {
    console.log(data);
    create(data);
  });
  return (
    <>
      <AppBtnFilled onClick={open}>Creer un Utilisateur</AppBtnFilled>
      <Modal
        size={"xl"}
        title={<span> Creer un Utilisateur</span>}
        opened={opened}
        onClose={close}
      >
        <AppForm {...{ issuccess: createState.isSuccess }} onSubmit={_onsubmit}>
          {/* {JSON.stringify(form.errors)} */}
          <AppTextInput
            {...getFormInputAttr({ form, path: "displayname" })}
            label="Nom Complet"
          />
          <AppTextInput
            {...getFormInputAttr({ form, path: "email" })}
            label="email"
          />
          <AppTextInput
            {...getFormInputAttr({ form, path: "phone" })}
            label="Téléphone"
          />
          <RoleInput
            {...getFormInputAttr({ form, path: "roleId" })}
            label="Role"
          />
          <PlaceAddressInput {...{ form, withLatLng: false }} />
          <div className="h-5"></div>
          <AppBtnFilled type="submit">Valider</AppBtnFilled>
        </AppForm>
      </Modal>
    </>
  );
};
