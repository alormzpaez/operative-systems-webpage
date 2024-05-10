import { Button, Image, Link } from "@nextui-org/react";
import { FaCode } from "react-icons/fa";
import concurrence from "./../assets/concurrence.png";
import dispatch from "./../assets/dispatch.png";
import swift from "./../assets/swift.png";
import cpu from "./../assets/cpu.jpg";

const Concurrence = () => {
  return (
    <div className="dark:text-gray-200">
      <div className="flex flex-col px-56">
        <section className="">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-6xl font-extrabold leading-none tracking-tight text-white">
                ¿Cómo funciona la concurrencia en macOS?
              </h1>
              <p className="max-w-2xl mb-6 mr-10 text-xl text-justify text-white lg:mb-8">
                MacOS utiliza un sistema de hilos y planificación de procesos
                para gestionar la ejecución de múltiples tareas de manera
                simultánea. Esto se realiza de forma transparente para las
                aplicaciones, sin requerir que los desarrolladores se preocupen
                por la gestión detallada de la concurrencia a nivel del sistema
                operativo.
              </p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={concurrence} alt="mockup" />
            </div>
          </div>
        </section>
        <section className="">
          <div className="items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img className="w-full" src={cpu} alt="dashboard image" />
            <div className="mt-4 md:mt-0">
              <p className="mb-6 text-xl text-justify text-white">
                El kernel de MacOS gestiona la concurrencia mediante la asignación de tiempo de CPU a cada proceso y la coordinación de los recursos del sistema entre los procesos en ejecución. Utiliza algoritmos de planificación para determinar qué proceso debe ejecutarse en cada momento, priorizando tareas según su importancia y otros criterios definidos por el usuario o el sistema.
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <p className="mb-6 text-xl text-justify text-white">
            MacOS también proporciona herramientas y APIs para desarrolladores que les permiten crear aplicaciones concurrentes de manera eficiente y segura. Esto incluye tecnologías como Grand Central Dispatch (GCD) y operaciones asincrónicas, que facilitan la ejecución de tareas en paralelo y la gestión de la concurrencia en aplicaciones MacOS.
          </p>
        </section>
        <div className="grid items-center max-w-screen-xl px-4 py-8 pt-0 pb-0 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12 justify-items-center">
          <div className="col-span-4">
            <Image src={dispatch} alt="Laptop" className="m-0" />
          </div>
          <div className="col-span-8 col-start-5 ml-10">
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold leading-none tracking-tight text-white ">
              Grand Central Dispatch
            </h1>
            <p className="max-w-2xl mb-6 text-xl text-justify text-white lg:mb-8">
              Grand Central Dispatch (GCD), también conocido como "libdispatch",
              está disponible tanto en macOS como en iOS. Es una tecnología
              desarrollada por Apple para optimizar el soporte de aplicaciones
              en la ejecución concurrente (multihilo) en hardware multinúcleo.
            </p>
            <p className="max-w-2xl mb-6 text-xl text-justify text-white lg:mb-8">
              GCD proporciona y gestiona colas FIFO a las que tu aplicación
              puede enviar tareas en forma de objetos de bloque. Los bloques
              enviados a las colas de despacho son ejecutados en un grupo de
              hilos completamente gestionado por el sistema. GCD crea
              automáticamente hilos para ejecutar las tareas en las colas de
              despacho y programa esas tareas para que se ejecuten en los
              núcleos disponibles.
            </p>
          </div>
        </div>
        <section className="">
          <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
            <div className="flex justify-center mb-8 lg:mb-16">
              <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-white">
                Ejemplos de Uso de GCD en Objetive-C
              </h1>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <FaCode className="text-2xl text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  dispatch_async
                </h3>
                <p className="text-xl text-justify text-white">
                  Envía un bloque para su ejecución asíncrona en una cola de
                  despacho y retorna inmediatamente.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <FaCode className="text-2xl text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  dispatch_once
                </h3>
                <p className="text-xl text-justify text-white">
                  Ejecuta un objeto de bloque solo una vez durante la vida útil
                  de una aplicación.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <FaCode className="text-2xl text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  dispatch_sync
                </h3>
                <p className="text-xl text-justify text-white">
                  Envía un objeto de bloque para su ejecución y retorna después
                  de que ese bloque termine de ejecutarse.
                </p>
              </div>
              <div className="">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <FaCode className="text-2xl text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  dispatch_async_and_wait
                </h3>
                <p className="text-xl text-justify text-white">
                  Envía un elemento de trabajo para su ejecución y retorna solo
                  después de que termine de ejecutarse. A diferencia de
                  dispatch_sync, esta función respeta todos los atributos de la
                  cola cuando ejecuta el bloque.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <p className="mb-6 text-xl text-justify text-white">
            Como dato extra, además de proporcionar una amplia gama de herramientas y bibliotecas para desarrolladores experimentados, macOS ofrece una solución específica para aquellos que desean trabajar con el lenguaje de programación Swift.
          </p>
        </section>
        <section className="">
          <div className="max-w-screen-xl pt-5 pb-16 mx-auto">
            <div className="">
              <div className="flex gap-5">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-5xl">
                  Swift
                </h1>
                <Image width={50} alt="image" src={swift} />
              </div>
              <p className="mb-8 text-gray-200 sm:text-xl ">
                "libswiftDispatch" es una biblioteca que ofrece enlaces Swift al
                framework Grand Central Dispatch (GCD), originalmente escrito en
                C. Esta biblioteca envuelve las API de C de GCD en una interfaz
                más amigable para Swift, lo que facilita y hace más intuitivo
                para los desarrolladores de Swift trabajar con GCD.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button
                  href="https://www.swift.org/"
                  as={Link}
                  color="primary"
                  showAnchorIcon
                  variant="solid"
                >
                  Ir a página oficial de Swift
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Concurrence;
