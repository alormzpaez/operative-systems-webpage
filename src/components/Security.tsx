import { Image } from "@nextui-org/react";
import { FaApple, FaWindows } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { IoLogoAndroid } from "react-icons/io";
import { SiMacos } from "react-icons/si";
import pc from "./../assets/pc.png";
import code from "./../assets/code.png";
import laptop from "./../assets/laptop.jpg";
import security from "./../assets/security.webp";
import cripto from "./../assets/cripto.jpg";
import peligros from "./../assets/peligros.webp";

const Security = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col px-56">
        <div className="grid items-center max-w-screen-xl px-4 py-8 pb-0 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12 justify-items-center">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-6xl font-extrabold leading-none tracking-tight">
              Requisitos básicos de la seguridad en MacOS
            </h1>
            <p className="max-w-xl mb-6 text-xl text-justify lg:mb-8">
              Para cumplir con los altos estandares de calidad en este sistema operativo, es necesario cumplir con lo siguiente:
            </p>
            <p className="max-w-xl mb-6 text-xl text-justify lg:mb-8">
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                <li>
                  Confidencialidad
                </li>
                <li>Disponibilidad</li>
                <li>Integridad</li>
                <li>Autenticación</li>
              </ul>
            </p>
          </div>
          <div className="col-span-4">
            <Image
              // isBlurred
              src={security}
              alt="Laptop"
              className="m-5"
            />
          </div>
        </div>
        <div className="col-span-8 col-start-5">
            <p className="max-w-2xl mb-6 text-justify lg:mb-8 md:text-lg lg:text-xl">
              A continuación, se explican profundamente algunos conceptos importantes dentro de la seguridad informática de MacOS.
            </p>
          </div>
        <div className="grid items-center max-w-screen-xl px-4 py-8 pb-0 mx-auto text-white lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12 justify-items-center">
          <div className="col-span-4">
            <Image src={cripto} alt="Laptop" className="m-0" />
          </div>
          <div className="col-span-8 col-start-5 ml-10">
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold leading-none tracking-tight">
              Criptografía
            </h1>
            <p className="max-w-2xl mb-6 text-justify lg:mb-8 md:text-lg lg:text-xl">
              La encriptación es el proceso de codificación de un mensaje de forma que queden ocultos sus contenidos. La criptografía se emplea como base para los mecanismos para autenticar la comunicación entre pares de principales.
            </p>
          </div>
        </div>
        <div className="grid items-center max-w-screen-xl px-4 py-8 pb-0 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12 justify-items-center">
          <div className="col-span-7 mr-10">
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold leading-none tracking-tight">
              Tipos de peligros
            </h1>
            <p className="max-w-4xl mb-6 text-justify lg:mb-8 md:text-lg lg:text-xl">
              <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                <li>Interrupción: Se destruye un componente del sistema o no se encuentra disponible (Ataque centrado en la disponibilidad)</li>
                <li>Intercepción: Una parte no autorizada consigue acceso a un componente (Ataque centrado en la confidencialidad).</li>
                <li>Modificación: No solo tiene acceso a un componente, sino que también es capaz de modificarlo (Ataque dirigido a la integridad).</li>
                <li>Fabricación: Un elemento no autorizado inserta extraños en el sistema (Ataque contra la autenticación).</li>
              </ul>
            </p>
          </div>
          <div className="col-span-5">
            <Image src={pc} alt="Laptop" className="m-0" />
          </div>
        </div>
        <div className="grid px-4 pb-0 text-white lg:gap-8 xl:gap-0 lg:pt-16">
          <div className="">
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold leading-none tracking-tight">
              Ataque Activo
            </h1>
            <p className="mb-6 text-justify lg:mb-8 md:text-lg lg:text-xl">
              La encriptación es el proceso de codificación de un mensaje de forma que queden ocultos sus contenidos. La criptografía se emplea como base para los mecanismos para autenticar la comunicación entre pares de principales.
            </p>
          </div>
          <div className="">
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold leading-none tracking-tight">
              Ataque Pasivo
            </h1>
            <p className="mb-6 text-justify lg:mb-8 md:text-lg lg:text-xl">
              Es el espionaje o monitorización de las transmisiones. Hace uso de la información del sistema, pero no afecta a los recursos del mismo.
              Los atacantes pueden capturar los mensajes, pero no pueden extraer la información que contiene. La técnica para ocultar el contenido es el cifrado.
              Aun así, el atacante puede identificar la ubicación e identidad de los ordenadores y si obtiene muchos mensajes puede obtener los patrones de los mensajes y desencriptar 
            </p>
          </div>
          <div className="">
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold leading-none tracking-tight">
              Intrusos
            </h1>
            <p className="mb-6 text-justify lg:mb-8 md:text-lg lg:text-xl">
              <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                <li>
                  Enmascarado: Individuo que no está autorizado para entrar a los controles de acceso del sistema para aprovecharse de una cuenta de usuario legitimo
                </li>
                <li>Trasgresor: Un usuario legítimo autorizado o no, accede a datos, recursos y los utiliza de forma maliciosa.</li>
                <li>Usuario Clandestino: Quién sobrepasa el control de supervisión y uso dicho control para evadir la auditoria y el control de acceso.</li>
              </ul>
            </p>
          </div>
          <div className="">
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold leading-none tracking-tight">
              Malware
            </h1>
            <p className="mb-6 text-justify lg:mb-8 md:text-lg lg:text-xl">
              Es un software diseñado para causar daños o utilizar los recursos de un ordenador
            </p>
            <p className="mb-6 text-justify lg:mb-8 md:text-lg lg:text-xl">
              <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                <li>
                  Virus: Es un tipo de malware que se adhiere a un programa o archivo ejecutable. Se propaga de un sistema a otro cuando el programa o archivo infectado se ejecuta. Puede causar daños al modificar, eliminar o robar archivos.
                </li>
                <li>
                  Troyano: Es un tipo de malware que se presenta como un programa legítimo, pero que en realidad oculta funciones dañinas. Los troyanos pueden crear puertas traseras para permitir a los atacantes acceder al sistema.
                </li>
                <li>
                  Gusano: Es un malware que se propaga de forma independiente a través de redes, copiándose a sí mismo en otros dispositivos o sistemas. A diferencia de los virus, los gusanos no requieren un programa anfitrión para funcionar.
                </li>
                <li>
                Spyware: Es un tipo de malware que recopila información sobre el usuario sin su conocimiento o consentimiento. Puede registrar teclas, tomar capturas de pantalla o monitorear actividades en línea.
                </li>
                <li>
              Ransomware: Es un malware que cifra los datos de la víctima y exige un rescate para restaurarlos. Los atacantes suelen pedir pagos en criptomonedas para evitar ser rastreados.

                </li>
                <li>
              Adware: Es un tipo de malware que muestra anuncios no deseados o redirige las búsquedas a sitios web publicitarios. Aunque es menos dañino que otros tipos de malware, puede ser molesto y afectar el rendimiento del sistema.

                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
