import { Image } from "@nextui-org/react";
import version1 from './../assets/version1.png';
import version2 from './../assets/version2.png';
import version3 from './../assets/version3.png';
import version4 from './../assets/version4.png';
import version5 from './../assets/version5.png';
import version6 from './../assets/version6.png';
import version7 from './../assets/version7.png';
import version8 from './../assets/version8.png';
import version9 from './../assets/version9.png';
import version10 from './../assets/version10.png';
import version11 from './../assets/version11.png';
import version12 from './../assets/version12.png';
import version13 from './../assets/version13.png';
import version14 from './../assets/version14.png';
import version15 from './../assets/version15.png';
import version16 from './../assets/version16.png';
import version17 from './../assets/version17.png';
import version18 from './../assets/version18.png';

const Versions = () => {
  return (
    <div className="dark:text-white">
      <div className="flex flex-col px-56">
        <section className="">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Versiones del MacOS
            </h1>
            <p className="mb-8 text-lg font-normal text-justify text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
              Explora la evolución histórica y las características distintivas
              de cada versión del sistema operativo MacOS, desde sus inicios
              hasta las más recientes actualizaciones. Además, revisita <b>cuáles eran los principales componentes de hardware necesarios para correr dichas versiones.</b>
            </p>
          </div>
        </section>
        <ol className="relative self-center w-9/12 mb-10 border-gray-200 border-s dark:border-gray-700">
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 10.0 Cheetah
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2001
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>
                    Lanzamiento inicial de MacOS (primera versión en salir).
                  </li>
                  <li>Interfaz gráfica Aqua.</li>
                  <li>Soporte para aplicaciones de Carbón y Cocoa.</li>
                  <li>El sistema operativo era estable.</li>
                  <li>Era increíblemente lento en el hardware.</li>
                  <li>Se necesitaba un procesador PowerPC G3, G4 o G5, con al menos 128 MB de RAM y 1.5 GB de espacio en disco.</li>
                </ul>
              </div>
            </div>
            <div className="ml-20">
                <Image
                    isBlurred
                    width={240}
                    src={version1}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 10.1 Puma 
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2001
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>
                    Mejoras de rendimiento (era mucho más rápido) y estabilidad. 
                  </li>
                  <li>Soporte mejorado para dispositivos de hardware.</li>
                  <li>Implemento la reproducción de DVD</li>
                  <li>Se requería un procesador PowerPC G3, G4 o G5, junto con al menos 128 MB de RAM y 1.5 GB de espacio disponible en disco.</li>
                </ul>
              </div>
            </div>
            <div className="ml-20 ">
                <Image
                    isBlurred
                    width={240}
                    src={version2}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 10.2 Jaguar
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2002
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>Introducción de la función de búsqueda Spotlight.</li>
                  <li>Soporte para iChat y QuickTime 6.</li>
                  <li>Componentes del cliente OpenLDAP.</li>
                  <li>Se requería un procesador PowerPC G3, G4 o G5, junto con al menos 128 MB de RAM y 3 GB de espacio disponible en disco..</li>
                </ul>
              </div>
            </div>
            <div className="ml-20 ">
                <Image
                    isBlurred
                    width={240}
                    src={version3}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 10.3 Panther
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2003
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>Ahora, con esta versión, es posible gestionar ventanas abiertas.</li>
                  <li>Incorporación de Safari como navegador web predeterminado.</li>
                  <li>Mejoras de rendimiento.</li>
                  <li>Requería un procesador PowerPC G3, G4 o G5, con al menos 128 MB de RAM y 3 GB de espacio disponible en disco.</li>
                </ul>
              </div>
            </div>
            <div className="ml-20 ">
                <Image
                    isBlurred
                    width={240}
                    src={version4}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 10.4 Tiger
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2005
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>Lanzamiento del dashboard con widgets.</li>
                  <li>Introducción de Spotlight para búsquedas rápidas.</li>
                  <li>Soporte para aplicaciones de 64 bits.</li>
                  <li>Se necesitaba un procesador PowerPC G3, G4 o G5, con al menos 256 MB de RAM y 3 GB de espacio disponible en disco.</li>
                </ul>
              </div>
            </div>
            <div className="ml-20 ">
                <Image
                    isBlurred
                    width={240}
                    src={version5}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 10.5 Leopard
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2007
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>Introducción de Time Machine para realizar copias de seguridad.</li>
                  <li>Incorporación de Boot Camp para ejecutar Windows en Mac.</li>
                  <li>Mejoras en la interfaz gráfica y la accesibilidad.</li>
                  <li>Se requería un procesador Intel, PowerPC G4 o G5, con al menos 512 MB de RAM y 9 GB de espacio disponible en disco.</li>
                </ul>
              </div>
            </div>
            <div className="ml-20 ">
                <Image
                    isBlurred
                    width={240}
                    src={version6}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 10.6 Snow Leopard
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2009
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>Enfoque en mejoras de rendimiento y estabilidad.</li>
                  <li>Actualización del sistema de archivos HFS+ a HFSX.</li>
                  <li>Soporte para Grand Central Dispatch y OpenCL.</li>
                  <li>Se necesitaba un procesador Intel, con al menos 1 GB de RAM y 5 GB de espacio disponible en disco.</li>
                </ul>
              </div>
            </div>
            <div className="ml-20 ">
                <Image
                    isBlurred
                    width={240}
                    src={version7}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 10.7 Lion
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2011
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>Incorporación de Mission Control y Launchpad.</li>
                  <li>Gestos multitáctiles inspirados en iOS.</li>
                  <li>Mac App Store integrada.</li>
                  <li>Se requería un procesador Intel Core 2 Duo, Core i3, Core i5, Core i7 o Xeon, con al menos 2 GB de RAM y 7 GB de espacio disponible en disco.</li>
                </ul>
              </div>
            </div>
            <div className="ml-20 ">
                <Image
                    isBlurred
                    width={240}
                    src={version8}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 10.8 Mountain Lion
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2012
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>Integración más profunda con iCloud.</li>
                  <li>Centro de Notificaciones similar al de iOS.</li>
                  <li>Dictado de voz en todo el sistema.</li>
                  <li>Se necesitaba un procesador Intel Core 2 Duo, Core i3, Core i5, Core i7 o Xeon, con al menos 2 GB de RAM y 8 GB de espacio disponible en disco.</li>
                </ul>
              </div>
            </div>
            <div className="ml-20 ">
                <Image
                    isBlurred
                    width={240}
                    src={version9}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 10.9 Mavericks
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2013
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>Introducción de Apple Maps y iBooks.</li>
                  <li>Optimización de la duración de la batería.</li>
                  <li>Mejoras en la gestión de múltiples pantallas.</li>
                  <li>Se requería un procesador Intel Core 2 Duo, Core i3, Core i5, Core i7 o Xeon, con al menos 2 GB de RAM y 8 GB de espacio disponible en disco.</li>
                </ul>
              </div>
            </div>
            <div className="ml-20 ">
                <Image
                    isBlurred
                    width={240}
                    src={version10}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 10.10 Yosemite
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2014
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>Rediseño visual con un tema "Flat".</li>
                  <li>Continuity para una mejor integración con iOS.</li>
                  <li>AirDrop entre Mac y dispositivos iOS.</li>
                  <li>Se necesitaba un procesador Intel Core 2 Duo, Core i3, Core i5, Core i7 o Xeon, con al menos 2 GB de RAM y 8 GB de espacio disponible en disco.</li>
                </ul>
              </div>
            </div>
            <div className="ml-20 ">
                <Image
                    isBlurred
                    width={240}
                    src={version11}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 10.11 El Capitan 
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2015
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>Mejoras en la velocidad y rendimiento del sistema.</li>
                  <li>Split View para organizar ventanas fácilmente.</li>
                  <li>Mejoras en Spotlight y Safari.</li>
                  <li>Se requería un procesador Intel Core 2 Duo, Core i3, Core i5, Core i7 o Xeon, con al menos 2 GB de RAM y 8.8 GB de espacio disponible en disco.</li>
                </ul>
              </div>
            </div>
            <div className="ml-20 ">
                <Image
                    isBlurred
                    width={240}
                    src={version12}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 10.12 Sierra
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2016
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>Introducción de Siri en Mac.</li>
                  <li>Auto Unlock con Apple Watch.</li>
                  <li>Almacenamiento optimizado con Optimized Storage.</li>
                  <li>Se necesitaba un procesador Intel Core 2 Duo, Core i3, Core i5, Core i7 o Xeon, con al menos 2 GB de RAM y 8.8 GB de espacio disponible en disco..</li>
                </ul>
              </div>
            </div>
            <div className="ml-20 ">
                <Image
                    isBlurred
                    width={240}
                    src={version13}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 10.13 High Sierra
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2017
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>Sistema de archivos APFS.</li>
                  <li>Soporte para VR y gráficos Metal 2.</li>
                  <li>Mejoras en Safari y Mail.</li>
                  <li>Se requería un procesador Intel Core 2 Duo, Core i3, Core i5, Core i7 o Xeon, con al menos 2 GB de RAM y 14.3 GB de espacio disponible en disco.</li>
                </ul>
              </div>
            </div>
            <div className="ml-20 ">
                <Image
                    isBlurred
                    width={240}
                    src={version14}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 10.14 Mojave
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2018
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>Modo oscuro para cambiar la apariencia del sistema.</li>
                  <li>Desbloqueo con Face ID desde iPhone.</li>
                  <li>Galería de aplicaciones de iOS en Mac.</li>
                  <li>Se necesitaba un procesador Intel Core 2 Duo, Core i3, Core i5, Core i7 o Xeon, con al menos 2 GB de RAM y 12.5 GB de espacio disponible en disco.</li>
                </ul>
              </div>
            </div>
            <div className="ml-20 ">
                <Image
                    isBlurred
                    width={240}
                    src={version15}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 10.15 Catalina
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2019
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>Separación de iTunes en varias aplicaciones.</li>
                  <li>Sidecar para usar el iPad como pantalla secundaria.</li>
                  <li>Mejoras en la seguridad y privacidad del sistema.</li>
                  <li>Se requería un procesador Intel Core 2 Duo, Core i3, Core i5, Core i7 o Xeon, con al menos 4 GB de RAM y 12.5 GB de espacio disponible en disco.</li>
                </ul>
              </div>
            </div>
            <div className="ml-20 ">
                <Image
                    isBlurred
                    width={240}
                    src={version16}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 11 Big Sur
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2020
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>Rediseño completo de la interfaz.</li>
                  <li>Mayor integración con iOS.</li>
                  <li>Soporte para aplicaciones universales.</li>
                  <li>Se necesitaba un procesador Intel Core i3, Core i5, Core i7, Core i9 o procesador Apple Silicon, con al menos 4 GB de RAM y 35.5 GB de espacio disponible en disco.</li>
                </ul>
              </div>
            </div>
            <div className="ml-20 ">
                <Image
                    isBlurred
                    width={240}
                    src={version17}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-xl font-bold text-white">
                MacOS 12 Monterey
                <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Más reciente registrada</span>
              </h3>
              <time className="block mb-2 text-xl font-normal leading-none text-white">
                Lanzada en 2021
              </time>
              <div>
                <h2 className="mb-2 text-xl font-bold text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-xl text-justify text-white list-disc list-inside">
                  <li>Modo Focus para gestionar notificaciones.</li>
                  <li>Universal Control para usar un solo teclado y mouse en varios dispositivos.</li>
                  <li>Mejoras en FaceTime y AirPlay.</li>
                  <li>Se requiere un procesador compatible con Intel Core i5, i7, i9, o procesador Apple Silicon, al menos 4 GB de RAM y 30 GB de espacio de almacenamiento disponible.</li>
                </ul>
              </div>
            </div>
            <div className="ml-20 ">
                <Image
                    isBlurred
                    width={240}
                    src={version18}
                    alt="Version 1"
                    className="m-5"
                />
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Versions;
