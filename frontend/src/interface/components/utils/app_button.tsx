import {
  ActionIcon,
  ActionIconProps,
  Button,
  ButtonProps,
} from "@mantine/core";
import { FC, Fragment, ReactNode, useId } from "react";
import { SvgAssets } from "../../../utils/svg_assets";

export const AppBtnOutline: FC<PropTypes> = (props) => {
  return (
    <Button
      {...props}
      styles={{ root: { background: "var(--color-green-500)" } }}
      className="btn outline "
    />
  );
};
export const AppBtnFilled: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <Button {...props} className="btn filled" />;
};
export const AppIcon: FC<ActionIconProps & { onClick?: () => void , icon:ReactNode}> = ({
  ...props
}) => {
  return (
    <ActionIcon
          {...props}
          onClick={props.onClick}
      styles={{ root: { border: "none" } }}
      classNames={{
        loader: "",
        root: "bg-green-300  outline  outline-slate-500",
        icon: "bg-green-300 ",
      }}
      radius={"md"}
    >
   {props.icon}
    </ActionIcon>
  );
};
export const AppIconEdit:FC<ActionIconProps & { onClick?: () => void}> = (props) => {
    return <AppIcon {...props} icon={   <svg viewBox={"0 0 24 24"} className="size-5">{SvgAssets.edit.paths.map((e) => <Fragment key={useId()} >{e }</Fragment>)}</svg>} />
}
type PropTypes = ButtonProps & {
  type?: "reset" | "submit" | "button";
};
