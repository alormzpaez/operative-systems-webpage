import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Switch,
} from "@nextui-org/react";
import logo from "./assets/apple.svg";
import "./App.css";
import React from "react";
import useDarkMode from "use-dark-mode";
import Definition from "./components/Definition";
import Versions from "./components/Versions";
import Interface from "./components/Interface";
import Concurrence from "./components/Concurrence";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const darkMode = useDarkMode(true);
  const [page, setPage] = React.useState("Concurrencia");

  const menuItems = [
    "Definición",
    "Historia",
    "Versiones",
    "Interfaz",
    "GUI",
    "Concurrencia",
  ];

  return (
    <main
      className={`${
        darkMode.value ? "dark" : ""
      } text-foreground bg-background`}
    >
      <main className="min-h-screen">
        <Navbar
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </NavbarContent>

          <NavbarContent className="pr-3 sm:hidden" justify="center">
            <NavbarBrand>
              <img src={logo} alt="Logo" className="w-10 h-auto mr-2" />
              <p className="font-bold text-inherit">Mac</p>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden gap-4 sm:flex" justify="center">
            <NavbarBrand>
              <img src={logo} alt="Logo" className="w-5 h-auto mr-2" />
              <p className="font-bold text-inherit">MacOS</p>
            </NavbarBrand>
            <NavbarItem className="ml-10">
              <Link color={page == "Definición" ? "primary" : "foreground"} onPress={() => setPage("Definición")} className="cursor-pointer">
                Definición
              </Link>
            </NavbarItem>
            {/* <NavbarItem isActive>
              <Link color={page == "Historia" ? "primary" : "foreground"} className="cursor-pointer">
                Historia
              </Link>
            </NavbarItem> */}
            <NavbarItem>
              <Link color={page == "Versiones" ? "primary" : "foreground"} onPress={() => setPage("Versiones")} className="cursor-pointer">
                Versiones
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color={page == "Interfaz" ? "primary" : "foreground"} onPress={() => setPage("Interfaz")} className="cursor-pointer">
                Interfaz
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color={page == "Concurrencia" ? "primary" : "foreground"} onPress={() => setPage("Concurrencia")} className="cursor-pointer">
                Concurrencia
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu className="dark">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link className="w-full" color="foreground" href="#" size="lg">
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
        {
          page == "Definición" ?
            <Definition />
          : page == "Versiones" ?
            <Versions />
          : page == "Interfaz" ?
            <Interface />
          : page == "Concurrencia" ?
            <Concurrence />
          :
            null
        }
      </main>
    </main>
  );
}

export default App;
