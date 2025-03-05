
import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import store from "./core/api";
import { RouterProvider } from "react-router";
import { router } from "./router";

function App() {
  return (
    <Provider store={store}>
      <MantineProvider>
        <RouterProvider router={router} />

      </MantineProvider>
    </Provider>
  );
}



export default App;
