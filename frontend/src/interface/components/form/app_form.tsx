import { FC, FormHTMLAttributes, useEffect } from "react";

type AppFormProps = FormHTMLAttributes<HTMLFormElement> & {
  isSuccess?: Boolean;
  isError?: Boolean;
  isLoading?: boolean;
  onClose?: () => void;
};
export const AppForm: FC<AppFormProps> = ({ children, isSuccess, ...rest }) => {
  useEffect(() => {
    if (isSuccess === true) {
      console.log("------------call close------------");
      if (rest.onClose) {
        rest.onClose();
      }
    }
  }, [isSuccess]);
  return (
    <form {...rest} className="flex flex-col gap-3">
      {children}
    </form>
  );
};
