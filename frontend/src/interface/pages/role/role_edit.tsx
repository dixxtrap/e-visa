import  { useEffect } from "react";
import { AppBtnFilled, AppIconEdit } from "../../components/utils/app_button";
import { Modal } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { RoleApi } from "../../../core/api/role.api";
import { AppTextArea, AppTextInput } from "../../components/form/text_input";
import { RoleDto } from "../../../core/model/role";
import { PermissionInput } from "../permission/permission_input";

export const RoleEdit = ({ id }: { id: number }) => {
  console.log(id);
  const [edit, editState] = RoleApi.useEditMutation();
  const old = RoleApi.useGetByIdQuery(id);
  const [opened, { open, close }] = useDisclosure();
  console.log(old.data?.data?.rolePermission);
  const form = useForm<RoleDto>({
    mode: "uncontrolled",

    validate: {
      name: isNotEmpty(),
    },
  });
  useEffect(() => {
    if (old.isSuccess === true) {
      form.setValues({
        name: old.data?.data.name,
        comment: old.data?.data.comment,
        permissionIds: old.data?.data?.rolePermission?.map(
          (e) => e.permissionId + ""
        ),
      });
    }
  }, [old.isSuccess]);
  const _onsubmit = form.onSubmit((body) => {
    if (form.validate())
      edit({
        body: { ...body, permissionIds: body.permissionIds?.map(Number) },
        id: old.data?.data.id!,
      });
  });
  useEffect(() => {
    if (editState.isSuccess) {
      close();
    }
  }, [editState.isSuccess]);
  return (
    <>
      <AppIconEdit onClick={open} />
      <Modal
        size={"xl"}
        title={<span>Creer un Role</span>}
        opened={opened}
        onClose={close}
      >
        <form onSubmit={_onsubmit} className="form">
          <AppTextInput
            error={form.errors["name"]}
            key={form.key("name")}
            {...form.getInputProps("name")}
            label="Nom"
          />

          <AppTextArea
            rows={5}
            error={form.errors["comment"]}
            key={form.key("comment")}
            {...form.getInputProps("comment")}
            label="Description"
          />
          <PermissionInput {...form.getInputProps("permissionIds")} />
          <AppBtnFilled type="submit">Valider</AppBtnFilled>
        </form>
      </Modal>
    </>
  );
};
