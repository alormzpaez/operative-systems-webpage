import { Image } from '@nextui-org/react'
import { FaApple, FaWindows } from 'react-icons/fa'
import { FcLinux } from 'react-icons/fc'
import { IoLogoAndroid } from 'react-icons/io'
import { SiMacos } from 'react-icons/si'
import pc from './../assets/pc.png'
import code from './../assets/code.png'
import laptop from "./../assets/laptop.jpg";

const Definition = () => {
  return (
    <div className="dark:text-gray-200">
          <div className="flex flex-col px-56">
            <div className="grid items-center max-w-screen-xl px-4 py-8 pb-0 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12 justify-items-center">
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-gray-200">
                  ¿Qué es un sistema operativo?
                </h1>
                <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl">
                  Un sistema operativo es el principal programa que ejecuta
                  una computadora con el propósito de coordinar y administrar
                  todos los recursos del dispositivo de manera óptima y
                  eficiente.
                </p>
                <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl">
                  Realizan dos funciones principales: ampliar la capacidad de
                  la máquina y gestionar recursos. Según el usuario, se
                  enfatiza más una función que la otra. Existen diversos ejemplos
                  de sistemas operativos:
                </p>
              </div>
              <div className="col-span-4">
                <Image
                  // isBlurred
                  src={laptop}
                  alt="Laptop"
                  className="m-5"
                />
              </div>
            </div>
            <div className="">
              <div className="grid items-center grid-cols-2 justify-items-center">
                <div>
                  <div
                    className="block max-w-sm p-6 border-gray-200 rounded-lg shadow "
                  >
                    <h5 className="flex items-center gap-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                      <IoLogoAndroid className="text-4xl text-green-500" />Android
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Destinado principalmente para dispositivos moviles.
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    className="block max-w-sm p-6 border-gray-200 rounded-lg shadow "
                  >
                    <h5 className="flex items-center gap-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                      <FaApple />iPhone
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Destinado principalmente para dispositivos moviles.
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    className="block max-w-sm p-6 border-gray-200 rounded-lg shadow "
                  >
                    <h5 className="flex items-center gap-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                      <FaWindows className="text-blue-500" />Windows
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Destinado principalmente para dispositivos de escritorio y portátiles.
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    className="block max-w-sm p-6 border-gray-200 rounded-lg shadow "
                  >
                    <h5 className="flex items-center gap-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                      <SiMacos className="text-4xl" />macOS
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Destinado principalmente para dispositivos de escritorio y portátiles.
                    </p>
                  </div>
                </div>
                <div className="col-span-2">
                  <div
                    className="flex flex-col max-w-sm p-6 border-gray-200 rounded-lg shadow"
                  >
                    <h5 className="flex items-center gap-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                      <FcLinux className="text-5xl" />Linux
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Destinado principalmente para dispositivos de escritorio y portátiles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid items-center max-w-screen-xl px-4 py-8 pb-0 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12 justify-items-center">
              <div className="col-span-4">
                <Image
                  src={code}
                  alt="Laptop"
                  className="m-0"
                />
              </div>
              <div className="col-span-8 col-start-5 ml-10">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl dark:text-gray-200">
                  Sistema operativo como máquina extendida
                </h1>
                <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl">
                  En el nivel de lenguaje de máquina, la arquitectura de la mayoría de las computadoras es primitiva y resulta tediosa de programar, especialmente en lo que concierne a operaciones de entrada y salida.
                </p>
              </div>
            </div>
            <div className="grid items-center max-w-screen-xl px-4 py-8 pb-0 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12 justify-items-center">
              <div className="col-span-7 mr-10">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl dark:text-gray-200">
                  Sistema operativo como administrador de recursos   
                </h1>
                <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl">
                  A los usuarios se les presenta una interfaz cómoda; podría considerarse como una perspectiva descendente (es decir, de arriba hacia abajo). Desde otro enfoque, el sistema operativo tiene como función principal administrar todos los elementos y recursos de un sistema complejo.
                </p>
                <p className="max-w-2xl lg:mb-8 md:text-lg lg:text-xl">
                  Su tarea consiste en realizar un reparto ordenado y controlado de los procesadores, memorias y dispositivos de entrada/salida, entre los diversos programas que compiten por acceder a ellos.
                </p>
              </div>
              <div className="col-span-5">
                <Image
                  src={pc}
                  alt="Laptop"
                  className="m-0"
                />
              </div>
            </div>
          </div>
        </div>
  )
}

export default Definition