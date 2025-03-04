import { Modal } from "@mantine/core";
import { AppBtnFilled } from "../../components/utils/app_button";
import { useDisclosure } from "@mantine/hooks";
import {
  AppNumberInput,
  AppSwitch,
  AppTextArea,
  AppTextInput,
} from "../../components/form/text_input";
import { AppForm } from "../../components/form/app_form";
import { AppDivider } from "../../components/utils/app_divider";
import { getFormInputAttr } from "../../components/form/get_form_input_attribute";
import { useForm } from "@mantine/form";
import { VisaTypeDto } from "../../../core/model/visa_type";
import { VisaTypeAPi } from "../../../core/api/visa_type.api";

export const VisaTypeCreate = () => {
  const [create, createState] = VisaTypeAPi.useCreateMutation();
  const [opened, { open, close }] = useDisclosure();
  const form = useForm<VisaTypeDto>({
    mode: "uncontrolled",
  });
  const _onsubmit = form.onSubmit((data) => {
    console.log(data);
    create({ ...data, amount: Number(data.amount) });
  });
  const _onclose = () => {
    createState.reset();
    form.reset();
    close();
  };
  return (
    <>
      <AppBtnFilled onClick={open}>Creer un Visa Type</AppBtnFilled>
      <Modal
        title={<span className="font-bold">Creer un Visa Type</span>}
        opened={opened}
        size={"lg"}
        onClose={close}
      >
        <AppForm
          isSuccess={createState.isSuccess}
          onSubmit={_onsubmit}
          onClose={_onclose}
        >
          <AppTextInput
            {...getFormInputAttr({ form, path: "name" })}
            label={"Nom"}
          />
          <AppNumberInput
            label={"Montant"}
            {...getFormInputAttr({ form, path: "amount" })}
            rightSection={<span className="mr-8">Fcfa</span>}
            suffix={""}
          />

          <AppTextArea
            label={"Description"}
            {...getFormInputAttr({ form, path: "comment" })}
          />
          <AppSwitch
            label="status"
            checked={form.getValues().isActive!}
            setChecked={(v) => form.setFieldValue("isActive", v)}
          />
          <AppDivider />
          <AppBtnFilled type="submit">Valider</AppBtnFilled>
        </AppForm>
      </Modal>
    </>
  );
};
