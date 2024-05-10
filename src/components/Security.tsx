import { FaRegWindowRestore } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { GiSpy } from "react-icons/gi";
import { FaWorm } from "react-icons/fa6";
import { Image } from "@nextui-org/react";
import security from "./../assets/security.webp";
import cripto from "./../assets/cripto.jpg";
import damages from "./../assets/damages.png";
import intruso from "./../assets/intruso.jpg";
import { CiVirus } from "react-icons/ci";
import { GiTrojanHorse } from "react-icons/gi";

const Security = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col px-56">
        <div className="grid items-center max-w-screen-xl px-4 py-8 pb-0 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12 justify-items-center">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-6xl font-extrabold leading-none tracking-tight text-white">
              Requisitos básicos de la seguridad en MacOS
            </h1>
            <p className="max-w-xl mb-6 text-xl text-justify lg:mb-8">
              Para cumplir con los altos estandares de calidad en este sistema
              operativo, es necesario cumplir con lo siguiente:
            </p>
            <p className="max-w-xl mb-6 text-xl text-justify lg:mb-8">
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                <li>Confidencialidad</li>
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
          <p className="mb-6 text-justify lg:mb-8 md:text-lg lg:text-xl">
            A continuación, se explican profundamente algunos conceptos
            importantes usados dentro de la seguridad informática de MacOS.
            Aunque, a decir verdad, son conceptos que perfectamente podrían
            aplicar a muchos sistemas operativos actuales.
          </p>
        </div>
        <div className="grid items-center max-w-screen-xl py-8 pb-0 mx-auto text-white lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12 justify-items-center">
          <div className="col-span-4">
            <Image src={cripto} alt="Laptop" className="m-0" />
          </div>
          <div className="col-span-8 col-start-5 ml-10">
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold leading-none tracking-tight">
              Criptografía
            </h1>
            <p className="max-w-2xl mb-6 text-justify lg:mb-8 md:text-lg lg:text-xl">
              La encriptación es el proceso de codificación de un mensaje de
              forma que queden ocultos sus contenidos. La criptografía se emplea
              como base para los mecanismos para autenticar la comunicación
              entre pares de principales.
            </p>
          </div>
        </div>
        <div className="grid items-center max-w-screen-xl py-8 pb-0 mx-auto text-justify lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12 justify-items-center">
          <div className="col-span-7 mr-10">
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold leading-none tracking-tight">
              Tipos de peligros
            </h1>
            <p className="max-w-4xl mb-6 text-justify lg:mb-8 md:text-lg lg:text-xl">
              <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                <li>
                  <b>Interrupción:</b> Se destruye un componente del sistema o
                  no se encuentra disponible (ataque centrado en la
                  disponibilidad)
                </li>
                <li>
                  <b>Intercepción:</b> Una parte no autorizada consigue acceso a
                  un componente (ataque centrado en la confidencialidad).
                </li>
                <li>
                  <b>Modificación:</b> No solo tiene acceso a un componente,
                  sino que también es capaz de modificarlo (ataque dirigido a la
                  integridad).
                </li>
                <li>
                  <b>Fabricación:</b> Un elemento no autorizado inserta extraños
                  en el sistema (ataque contra la autenticación).
                </li>
              </ul>
            </p>
          </div>
          <div className="col-span-5">
            <Image src={damages} alt="Laptop" className="m-0" />
          </div>
        </div>
        <section className="mt-10">
          <p className="text-xl text-justify text-white">
            Existen dos tipos de ataques de los que este sistema operativo
            debería protegerse.
          </p>
        </section>
        <div className="grid pt-4 pb-0 text-white lg:gap-8 xl:gap-0">
          <div className="">
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold leading-none tracking-tight">
              Ataque Activo
            </h1>
            <p className="mb-6 text-justify lg:mb-8 md:text-lg lg:text-xl">
              Es el tipo de ataque que intenta alterar los recursos del sistema
              o afecta a su operatividad.
            </p>
          </div>
          <div className="">
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold leading-none tracking-tight">
              Ataque Pasivo
            </h1>
            <p className="mb-6 text-justify lg:mb-8 md:text-lg lg:text-xl">
              Es el espionaje o monitorización de las transmisiones. Hace uso de
              la información del sistema, pero no afecta a los recursos del
              mismo. Los atacantes pueden capturar los mensajes, pero no pueden
              extraer la información que contiene. La técnica para ocultar el
              contenido es el cifrado. Aun así, el atacante puede identificar la
              ubicación e identidad de los ordenadores y si obtiene muchos
              mensajes puede obtener los patrones de los mensajes y desencriptar
            </p>
          </div>
        </div>
        <section className="mt-5">
          <p className="text-xl text-justify text-white">
            Aunque cada medio les suele nombrar de diferentes maneras, MacOS
            también debe protegerse de los siguientes intrusos:
          </p>
        </section>
        <section className="">
          <div className="items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img className="w-full" src={intruso} alt="dashboard image" />
            <div className="mt-4 md:mt-0">
              <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-white">
                Intrusos
              </h1>
              <p className="mb-6 text-justify lg:mb-8 md:text-lg lg:text-xl">
                <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>
                    <b>Enmascarado:</b> individuo que no está autorizado para
                    entrar a los controles de acceso del sistema para
                    aprovecharse de una cuenta de usuario legitimo
                  </li>
                  <li>
                    <b>Trasgresor:</b> un usuario legítimo autorizado o no,
                    accede a datos, recursos y los utiliza de forma maliciosa.
                  </li>
                  <li>
                    <b>Usuario clandestino:</b> quién sobrepasa el control de
                    supervisión y uso dicho control para evadir la auditoria y
                    el control de acceso.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>
        <section className="mb-10 ">
          <div className="mx-auto">
            <div className="mb-8 lg:mb-16">
              <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-white">
                Tipos de malware
              </h2>
              <p className="text-xl text-justify text-white">
                Aunque el malware no es específicamente un problema de macOS
                (puesto que cualquier sistema operativo podría sufrir de esto),
                este sistema debería ser capaz de contrarrestar los daños de los
                siguientes tipos de malware:
              </p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <CiVirus className="flex text-3xl font-bold text-blue-700" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Virus</h3>
                <p className="text-lg text-justify text-white">
                  Es un tipo de malware que se adhiere a un programa o archivo
                  ejecutable. Se propaga de un sistema a otro cuando el programa
                  o archivo infectado se ejecuta. Puede causar daños al
                  modificar, eliminar o robar archivos.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <GiTrojanHorse className="flex text-3xl font-bold text-blue-700" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Troyano</h3>
                <p className="text-lg text-justify text-white">
                  Es un tipo de malware que se presenta como un programa
                  legítimo, pero que en realidad oculta funciones dañinas. Los
                  troyanos pueden crear puertas traseras para permitir a los
                  atacantes acceder al sistema.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <FaWorm className="flex text-2xl text-blue-700" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Gusano</h3>
                <p className="text-lg text-justify text-white">
                  Es un malware que se propaga de forma independiente a través
                  de redes, copiándose a sí mismo en otros dispositivos o
                  sistemas. A diferencia de los virus, los gusanos no requieren
                  un programa anfitrión para funcionar.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <GiSpy className="flex text-3xl text-blue-700" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Spyware</h3>
                <p className="text-lg text-justify text-white">
                  Es un tipo de malware que recopila información sobre el
                  usuario sin su conocimiento o consentimiento. Puede registrar
                  teclas, tomar capturas de pantalla o monitorear actividades en
                  línea.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <FaLock className="flex text-xl text-blue-700" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Ransomware
                </h3>
                <p className="text-lg text-justify text-white">
                  Es un malware que cifra los datos de la víctima y exige un
                  rescate para restaurarlos. Los atacantes suelen pedir pagos en
                  criptomonedas para evitar ser rastreados.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <FaRegWindowRestore className="flex text-xl text-blue-700" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Adware</h3>
                <p className="text-lg text-justify text-white">
                  Es un tipo de malware que muestra anuncios no deseados o
                  redirige las búsquedas a sitios web publicitarios. Aunque es
                  menos dañino que otros tipos de malware, puede ser molesto y
                  afectar el rendimiento del sistema.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Security;
