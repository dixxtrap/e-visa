import { ReactNode } from "react";
import { SecurityApi } from "../../../core/api/security.api";
import { Navigate } from "react-router";

export const AuthGuard = ({ children }: { children?: ReactNode }) => {
  const profile = SecurityApi.useProfileQuery();
  return profile.isSuccess ? (
    children
  ) : profile.isError ? (
    <Navigate to={"/"} />
  ) : null;
};
