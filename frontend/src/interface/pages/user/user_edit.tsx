import { useDisclosure } from "@mantine/hooks";
import { AppBtnFilled, AppIconEdit } from "../../components/utils/app_button";
import { Modal } from "@mantine/core";
import { AppForm } from "../../components/form/app_form";
import { AppSwitch, AppTextInput } from "../../components/form/text_input";
import { getFormInputAttr } from "../../components/form/get_form_input_attribute";
import { useForm } from "@mantine/form";
import { UserDto } from "../../../core/model/user";
import { userFormValidation } from "../../validation/user_form_validation";
import { RoleInput } from "../role/role_input";
import { PlaceAddressInput } from "../../components/form/google_place_address";
import {  pickFields } from "../../../utils/exclude_key";
import { UserApi } from "../../../core/api/user.api";

export const UserEdit = ({ old }: { old: UserDto }) => {
  const [edit, editState] = UserApi.useEditMutation();
  console.log(old);
  const form = useForm<UserDto>({
    initialValues: {
      ...pickFields(old, ["displayname", "email", "phone", "address"]),
      login: {
        isActive: old.login?.isActive,
        isBlocked: old.login?.isBlocked,
        isArchived: old.login?.isArchived,
        roleId: `${old.login?.roleId}`,
      },
    },
    validate: userFormValidation,
  });
  const [opened, { open, close }] = useDisclosure();
  const _onsubmit = form.onSubmit((body) => {
    edit({
      body: {
        ...body,
        login: { ...body.login, roleId: Number(body.login?.roleId) },
      },
      id: old.loginId!,
    });
  });
  return (
    <>
      <AppIconEdit onClick={open} />
      <Modal
        size={"xl"}
        opened={opened}
        onClose={() => {
          form.reset();
          close();
        }}
      >
        <AppForm
          onSubmit={_onsubmit}
          onClose={() => {
            editState.reset();
            close();
          }}
          {...{ isSuccess: editState.isSuccess }}
        >
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
            {...getFormInputAttr({ form, path: "login.roleId" })}
            label="Role"
          />
          <PlaceAddressInput {...{ form, withLatLng: false }} />
          <AppSwitch
            label="status"
            checked={form.getValues().login?.isActive ?? false}
            setChecked={(val) => {
              form.setFieldValue("login.isActive", val);
            }}
          />
          <AppSwitch
            label="bloquer"
            checked={form.getValues().login?.isBlocked ?? false}
            setChecked={(val) => {
              form.setFieldValue("login.isBlocked", val);
            }}
          />
          <div className="h-5"></div>
          <AppBtnFilled type="submit">Valider</AppBtnFilled>
        </AppForm>
      </Modal>
    </>
  );
};
