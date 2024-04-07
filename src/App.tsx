import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import logo from "./assets/apple.svg";
import "./App.css";
import React from "react";
import useDarkMode from "use-dark-mode";
import Definition from "./components/Definition";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const darkMode = useDarkMode(true);

  const menuItems = [
    "Definición",
    "Historia",
    "Versiones",
    "CLI",
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
              <p className="font-bold text-inherit">Mac</p>
            </NavbarBrand>
            <NavbarItem>
              <Link color="foreground" href="#">
                Definición
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Historia
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Versiones
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                CLI
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                GUI
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
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
        <Definition />
      </main>
    </main>
  );
}

export default App;
