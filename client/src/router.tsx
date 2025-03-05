import { createBrowserRouter } from "react-router";
import { AccountValidation } from "./interface/pages/account-validation/account_validation";
import { BasePage } from "./interface/pages/base/base";
import { Home } from "./interface/pages/home/home";

export const router = createBrowserRouter([
  { path: "account-validation/:code", element: <AccountValidation /> },
  {
    path: "",
    element: <BasePage />,
    children: [
      {
        index: true,
        path: "",
        element: <Home />,
      },
    ],
  },
]);
