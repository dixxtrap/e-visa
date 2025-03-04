import { Modal } from "@mantine/core";
import { AppBtnFilled } from "../../components/utils/app_button";
import { useDisclosure } from "@mantine/hooks";
import { AppTextArea, AppTextInput } from "../../components/form/text_input";
import { isNotEmpty, useForm } from "@mantine/form";
import { RoleDto } from "../../../core/model/role";
import { RoleApi } from "../../../core/api/role.api";
import {  useEffect } from "react";

export const RoleCreate = () => {
  const [create, createState] = RoleApi.useCreateMutation();
  const [opened, { open, close }] = useDisclosure();
  const form = useForm<RoleDto>({
    mode: "uncontrolled",
    validate: {
      name: isNotEmpty("could not be empty"),
    },
  });
  const _onsubmit = form.onSubmit((val) => {
    if (form.validate()) create(val);
  });
  useEffect(() => {
    if (createState.isSuccess) {
      form.reset();
      close();
    }
  }, [createState.isSuccess]);
  return (
    <>
      <AppBtnFilled type="button" onClick={open}>
        Creer un Role
      </AppBtnFilled>
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
          <AppBtnFilled type="submit">Valider</AppBtnFilled>
        </form>
      </Modal>
    </>
  );
};
