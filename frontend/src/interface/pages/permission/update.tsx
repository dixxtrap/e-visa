import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AppBtnFilled, AppIconEdit } from "../../components/utils/app_button";
import { PermissionDto } from "../../../core/model/permission";
import { AppSelect, AppTextInput } from "../../components/form/text_input";
import { useForm } from "@mantine/form";

export const PermissionUpdate = (permission: PermissionDto) => {
  const [opened, { open, close }] = useDisclosure();
  const form = useForm({ initialValues: permission });
  return (
    <>
      <AppIconEdit onClick={open} />
      <Modal
        size={"xl"}
        title={<span>Modifier la Permision</span>}
        opened={opened}
        onClose={close}
      >
        <form className="flex flex-col  gap-5">
          <AppTextInput
            {...form.getInputProps("code")}
            key={form.key("code")}
            error={form.errors["code"]}
            label={"code"}
          />
          <AppSelect
            {...form.getInputProps("action")}
            key={form.key("action")}
            error={form.errors["action"]}
            label={"Action"}
          />
          <AppSelect
            {...form.getInputProps("moduleId")}
            key={form.key("moduleId")}
            error={form.errors["moduleId"]}
            label={"module"}
          />
          <AppBtnFilled>Valider</AppBtnFilled>
        </form>
      </Modal>
    </>
  );
};
