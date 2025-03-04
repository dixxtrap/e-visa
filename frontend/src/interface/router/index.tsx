import { createBrowserRouter } from "react-router";
import { Login } from "../pages/security/login";
import { Base } from "../pages/base/base";
import { Dashboard } from "../pages/dashboard/dashboard";
import { ResetPassword } from "../pages/security/reset_password";
import PermissionList from "../pages/permission/permission_list";
import { RoleList } from "../pages/role/role_list";
import { UserList } from "../pages/user/user_list";
import { CustomerList } from "../pages/customer/customer_list";
import { AuthGuard } from "../pages/base/auth_guard";
import { DefinePassword } from "../pages/security/define_password";
import { VisaApplicationList } from "../pages/request_application/visa_application_list";
import { VisaTypeList } from "../pages/visa_type/visa_type_list";

export const router = createBrowserRouter([
  { path: "", element: <Login />, index: true },
  { path: "reset-password", element: <ResetPassword />, index: true },
  { path: "define-password/:id", element: <DefinePassword /> },
  {
    path: "",
    element: (
      <AuthGuard>
        <Base />
      </AuthGuard>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "permission",
        children: [
          {
            path: "",
            index: true,
            element: <PermissionList />,
          },
        ],
      },
      {
        path: "role",
        children: [
          {
            path: "",
            index: true,
            element: <RoleList />,
          },
        ],
      },
      {
        path: "user",
        children: [
          {
            path: "",
            index: true,
            element: <UserList />,
          },
        ],
      },
      {
        path: "customer",
        children: [
          {
            path: "",
            index: true,
            element: <CustomerList />,
          },
        ],
      },
      {
        path: "visa-application",
        children: [
          {
            path: "",
            index: true,
            element: <VisaApplicationList />,
          },
        ],
      },
      {
        path: "visa-type",
        children: [
          {
            path: "",
            index: true,
            element: <VisaTypeList />,
          },
        ],
      },
    ],
  },
]);
