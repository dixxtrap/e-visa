import { UseFormReturnType } from "@mantine/form";

export const getFormInputAttr = ({
  form,
  path,
}: {
  form: UseFormReturnType<any, any>;
  path: string;
}) => {
  return {

    error: form.errors[path],
    ...form.getInputProps(path),
  };
};
