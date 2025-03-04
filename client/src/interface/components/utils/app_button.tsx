import {
  ActionIcon,
  ActionIconProps,
  Button,
  ButtonProps,
} from "@mantine/core";
import { FC, Fragment, ReactNode, useId } from "react";
import { SvgAssets } from "../../../utils/svg_assets";
import clsx from "clsx";

export const AppBtnOutline: FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({ onClick, className, ...rest }) => {
  return (
    <Button
      onClick={onClick}
      {...rest}
      py={10}
      color="transparent"
      styles={{ root: { border: "none" } }}
      classNames={{ root: clsx("btn  outline ", className) }}
    />
  );
};
export const AppBtnFilled: FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = (props) => {
  return <Button {...props} className="btn filled" />;
};
export const AppIcon: FC<
  ActionIconProps & { onClick?: () => void; icon: ReactNode }
> = ({ ...props }) => {
  return (
    <ActionIcon
      {...props}
      onClick={props.onClick}
      styles={{ root: { border: "none" } }}
      classNames={{
        loader: "",
        root: "bg-green-300  btn default outline  outline-slate-500",
        icon: "bg-green-300 ",
      }}
      radius={"md"}
    >
      {props.icon}
    </ActionIcon>
  );
};
export const AppIconEdit: FC<ActionIconProps & { onClick?: () => void }> = (
  props
) => {
  return (
    <AppIcon
      {...props}
      icon={
        <svg viewBox={"0 0 24 24"} className="size-5">
          {SvgAssets.edit.paths.map((e) => (
            <Fragment key={useId()}>{e}</Fragment>
          ))}
        </svg>
      }
    />
  );
};
