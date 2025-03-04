import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { Header } from "./interface/components/header/header";
import { Footer } from "./interface/components/utils/footer";
import { Home } from "./interface/pages/home/home";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import store from "./core/api";
function App() {
  return (
    <Provider store={store}>
      <MantineProvider>
        <div className="flex w-full bg-light-bg overflow-x-hidden flex-col">
          <Header />
          <Home />
          <Footer />
        </div>
      </MantineProvider>
    </Provider>
  );
}

export default App;
