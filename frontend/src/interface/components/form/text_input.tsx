import {
  NumberInputProps,
  PasswordInput,
  PasswordInputProps,
  Select,
  SelectProps,
  Switch,
  NumberInput,
  Textarea,
  TextareaProps,
  TextInput,
  TextInputProps,
} from "@mantine/core";
import { DateInput, DateInputProps } from "@mantine/dates";
import { FC, useId } from "react";

type TextInpoutProps = TextInputProps & {};

export const AppTextInput: FC<TextInpoutProps> = (props) => {
  return (
    <TextInput
      {...props}
      styles={{
        input: { background: "var(--bg-input)", outlineColor: "inherit" },
      }}
      classNames={{ label: "text-lg capitalize", root: "", input: "  " }}
    />
  );
};
export const AppNumberInput: FC<NumberInputProps> = (props) => {
  return (
    <NumberInput
      {...props}
      styles={{
        input: { background: "var(--bg-input)", outlineColor: "inherit" },
      }}
      classNames={{ label: "text-lg capitalize", root: "", input: "  " }}
    />
  );
};
export const AppPasswordInput: FC<PasswordInputProps> = ({ ...rest }) => {
  return (
    <PasswordInput
      {...rest}
      styles={{
        input: { background: "var(--bg-input)", outlineColor: "inherit" },
      }}
      classNames={{ label: "text-lg", root: "", input: "  " }}
    />
  );
};
export const AppSelect: FC<SelectProps> = ({ ...props }) => {
  return (
    <Select
      {...props}
      styles={{
        input: { background: "var(--bg-input)", outlineColor: "inherit" },
      }}
    />
  );
};

export const AppDateInput: FC<DateInputProps> = ({ ...props }) => {
  return (
    <DateInput
      {...props}
      styles={{
        input: { background: "var(--bg-input)", outlineColor: "inherit" },
      }}
    />
  );
};

export const AppTextArea: FC<TextareaProps> = (props) => {
  return <Textarea {...props} />;
};

export const AppSwitch: FC<{
  label?: string;
  checked: boolean;
  setChecked: (v: boolean) => void;
}> = ({ label, ...props }) => {
  const name = useId();
  return (
    <>
      <label htmlFor={name} className="flex items-center pt-1 justify-between">
        <span className="capitalize">{label}</span>
        <Switch
          radius={"sm"}
          color="var(--color-green-300)"
          classNames={{
            track: " ring ring-slate-600",
            thumb: "bg-green-300  ring ring-slate-600",
          }}
          checked={props.checked}
          onChange={(event) => props.setChecked(event.currentTarget.checked)}
        />
      </label>
    </>
  );
};
