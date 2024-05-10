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
import FrontPage from "./components/FrontPage";
import History from "./components/History";
import Security from "./components/Security";
import Bibliografia from "./components/Bibliografia";
import Conclusiones from "./components/Conclusiones";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const darkMode = useDarkMode(true);
  const [page, setPage] = React.useState("Portada");

  const menuItems = [
    "Definición",
    "Seguridad",
    "Historia",
    "Versiones",
    "Interfaz",
    "GUI",
    "Concurrencia",
    "Bibliografia",
    "Conclusiones",
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
              <Link color={page == "Portada" ? "primary" : "foreground"} onPress={() => {setPage("Portada"); window.scrollTo(0, 0)}} className="cursor-pointer">
                Portada
              </Link>
            </NavbarItem>
            <NavbarItem className="">
              <Link color={page == "Definición" ? "primary" : "foreground"} onPress={() => {setPage("Definición"); window.scrollTo(0, 0)}} className="cursor-pointer">
                Definición
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link color={page == "Historia" ? "primary" : "foreground"} onPress={() => {setPage("Historia"); window.scrollTo(0, 0)}} className="cursor-pointer">
                Historia
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color={page == "Versiones" ? "primary" : "foreground"} onPress={() => {setPage("Versiones"); window.scrollTo(0, 0)}} className="cursor-pointer">
                Versiones y hardware
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color={page == "Interfaz" ? "primary" : "foreground"} onPress={() => {setPage("Interfaz"); window.scrollTo(0, 0)}} className="cursor-pointer">
                Interfaz y kernel
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color={page == "Concurrencia" ? "primary" : "foreground"} onPress={() => {setPage("Concurrencia"); window.scrollTo(0, 0)}} className="cursor-pointer">
                Concurrencia
              </Link>
            </NavbarItem>
            <NavbarItem className="">
              <Link color={page == "Seguridad" ? "primary" : "foreground"} onPress={() => {setPage("Seguridad"); window.scrollTo(0, 0)}} className="cursor-pointer">
                Seguridad
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color={page == "Bibliografia" ? "primary" : "foreground"} onPress={() => {setPage("Bibliografia"); window.scrollTo(0, 0)}} className="cursor-pointer">
                Bibliografia
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color={page == "Conclusiones" ? "primary" : "foreground"} onPress={() => {setPage("Conclusiones"); window.scrollTo(0, 0)}} className="cursor-pointer">
                Conclusiones
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
          page == "Portada" ?
            <FrontPage />
          : page == "Definición" ?
            <Definition />
          : page == "Seguridad" ?
            <Security />
          : page == "Versiones" ?
            <Versions />
          : page == "Interfaz" ?
            <Interface />
          : page == "Concurrencia" ?
            <Concurrence />
          : page == "Historia" ?
            <History />
          : page == "Bibliografia" ?
            <Bibliografia />
          : page == "Conclusiones" ?
            <Conclusiones />
          :
            null
        }
      </main>
    </main>
  );
}

export default App;
