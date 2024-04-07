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
              Versiones del macOS
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
              Explora la evolución histórica y las características distintivas
              de cada versión del sistema operativo macOS, desde sus inicios
              hasta las más recientes actualizaciones.
            </p>
          </div>
        </section>
        <ol className="relative self-center w-9/12 mb-10 border-gray-200 border-s dark:border-gray-700">
          <li className="flex mb-10 ms-6">
            <div className="">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 10.0 Cheetah
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2001
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>
                    Lanzamiento inicial de macOS (primera versión en salir).
                  </li>
                  <li>Interfaz gráfica Aqua.</li>
                  <li>Soporte para aplicaciones de Carbón y Cocoa.</li>
                  <li>El sistema operativo era estable.</li>
                  <li>Era increíblemente lento en el hardware.</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 10.1 Puma 
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2001
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>
                    Mejoras de rendimiento (era mucho más rápido) y estabilidad. 
                  </li>
                  <li>Soporte mejorado para dispositivos de hardware.</li>
                  <li>Implemento la reproducción de DVD</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 10.2 Jaguar
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2002
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>Introducción de la función de búsqueda Spotlight.</li>
                  <li>Soporte para iChat y QuickTime 6.</li>
                  <li>Componentes del cliente OpenLDAP.</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 10.3 Panther
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2003
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>Ahora, con esta versión, es posible gestionar ventanas abiertas.</li>
                  <li>Incorporación de Safari como navegador web predeterminado.</li>
                  <li>Mejoras de rendimiento.</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 10.4 Tiger
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2005
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>Lanzamiento del dashboard con widgets.</li>
                  <li>Introducción de Spotlight para búsquedas rápidas.</li>
                  <li>Soporte para aplicaciones de 64 bits.</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 10.5 Leopard
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2007
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>Introducción de Time Machine para realizar copias de seguridad.</li>
                  <li>Incorporación de Boot Camp para ejecutar Windows en Mac.</li>
                  <li>Mejoras en la interfaz gráfica y la accesibilidad.</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 10.6 Snow Leopard
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2009
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>Enfoque en mejoras de rendimiento y estabilidad.</li>
                  <li>Actualización del sistema de archivos HFS+ a HFSX.</li>
                  <li>Soporte para Grand Central Dispatch y OpenCL.</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 10.7 Lion
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2011
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>Incorporación de Mission Control y Launchpad.</li>
                  <li>Gestos multitáctiles inspirados en iOS.</li>
                  <li>Mac App Store integrada.</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 10.8 Mountain Lion
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2012
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>Integración más profunda con iCloud.</li>
                  <li>Centro de Notificaciones similar al de iOS.</li>
                  <li>Dictado de voz en todo el sistema.</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 10.9 Mavericks
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2013
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>Introducción de Apple Maps y iBooks.</li>
                  <li>Optimización de la duración de la batería.</li>
                  <li>Mejoras en la gestión de múltiples pantallas.</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 10.10 Yosemite
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2014
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>Rediseño visual con un tema "Flat".</li>
                  <li>Continuity para una mejor integración con iOS.</li>
                  <li>AirDrop entre Mac y dispositivos iOS.</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 10.11 El Capitan 
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2015
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>Mejoras en la velocidad y rendimiento del sistema.</li>
                  <li>Split View para organizar ventanas fácilmente.</li>
                  <li>Mejoras en Spotlight y Safari.</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 10.12 Sierra
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2016
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>Introducción de Siri en Mac.</li>
                  <li>Auto Unlock con Apple Watch.</li>
                  <li>Almacenamiento optimizado con Optimized Storage.</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 10.13 High Sierra
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2017
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>Sistema de archivos APFS.</li>
                  <li>Soporte para VR y gráficos Metal 2.</li>
                  <li>Mejoras en Safari y Mail.</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 10.14 Mojave
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2018
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>Modo oscuro para cambiar la apariencia del sistema.</li>
                  <li>Desbloqueo con Face ID desde iPhone.</li>
                  <li>Galería de aplicaciones de iOS en Mac.</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 10.15 Catalina
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2019
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>Separación de iTunes en varias aplicaciones.</li>
                  <li>Sidecar para usar el iPad como pantalla secundaria.</li>
                  <li>Mejoras en la seguridad y privacidad del sistema.</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 11 Big Sur
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2020
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>Rediseño completo de la interfaz.</li>
                  <li>Mayor integración con iOS.</li>
                  <li>Soporte para aplicaciones universales.</li>
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
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                macOS 12 Monterey
                <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Más reciente registrada</span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Lanzada en 2021
              </time>
              <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Características:
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-200">
                  <li>Modo Focus para gestionar notificaciones.</li>
                  <li>Universal Control para usar un solo teclado y mouse en varios dispositivos.</li>
                  <li>Mejoras en FaceTime y AirPlay.</li>
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
