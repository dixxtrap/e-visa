import { FC, ReactNode, useState } from "react";
import { Modal } from "@mantine/core";

import { AppBtnFilled } from "./app_button";
import { SignupForm } from "../security/signup_form";
import { SignInForm } from "../security/signin_form";
import { useDisclosure } from "@mantine/hooks";
import { SecurityApi } from "../../../core/api/security.api";
type LoginFormProps = {
  children?: ReactNode;
};
export const LoginForm: FC<LoginFormProps> = ({ children }) => {
  const profile = SecurityApi.useProfileQuery();
  const [opened, { open, close }] = useDisclosure(false);
  const [isSignup, setIsSignup] = useState(false);
  return (
    <>
      {profile.isError && (
        <AppBtnFilled
          className="p-0 border-none ring-0 outline-none m-0 "
          title=""
          onClick={open}
        >
          {children ? children : <div className=" ">Se connecter</div>}
        </AppBtnFilled>
      )}
      <Modal
        title={
          <span className="text-2xl font-bold">
            {import.meta.env.VITE_APP_NAME}
          </span>
        }
        opened={opened}
        onClose={close}
      >
        {isSignup ? (
          <SignupForm switchForm={() => setIsSignup(false)} />
        ) : (
          <SignInForm switchForm={() => setIsSignup(true)} />
        )}
      </Modal>
    </>
  );
};
