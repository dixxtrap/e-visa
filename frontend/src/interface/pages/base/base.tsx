import { AppShell } from "@mantine/core";
import { Header } from "../../components/header/header";
import { Navigation } from "../../components/navigation/navigation";
import { Outlet } from "react-router";
import { useDisclosure } from "@mantine/hooks";
export const Base = () => {
  const [opened] = useDisclosure();
  return (
    <AppShell
      header={{ height: "50px" }}
      navbar={{
        collapsed: { mobile: !opened },
        width: "280px",
        breakpoint: "md",
      }}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Navbar className=" px-5 pt-8">
        <Navigation />
      </AppShell.Navbar>
      <AppShell.Main>
        <div className="px-5 pt-8">
          <Outlet />
        </div>
      </AppShell.Main>
    </AppShell>
  );
};
