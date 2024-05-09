import uanl from "./../assets/uanl.png";
import fime from "./../assets/fime.png";
import { Image } from "@nextui-org/react";
import natividad from "./../assets/natividad.png";
import emiliano from "./../assets/emiliano.png";
import alonso from "./../assets/alonso.png";
import rocio from "./../assets/rocio.png";
import javier from "./../assets/javier.png";
import carlos from "./../assets/carlos.png";
import daniel from "./../assets/daniel.png";

const FrontPage = () => {
  return (
    <div className="dark:text-gray-200">
      <div className="flex flex-col px-56">
        <section className="">
          <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:px-6">
            <div className="max-w-screen-sm mx-auto mb-8 lg:mb-16">
              <div className="flex p-10 mb-4 text-4xl font-extrabold tracking-tight text-gray-900 rounded-md justify-evenly dark:text-white">
                <Image
                  radius="none"
                  width={300}
                  alt="NextUI hero Image"
                  src={uanl}
                />
                <Image
                  radius="none"
                  width={90}
                  alt="NextUI hero Image"
                  src={fime}
                />
              </div>
              <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                PIA
              </h2>
              <p className="text-xl text-white">Equipo #2</p>
              <p className="text-xl text-white ">
                Sistemas operativos - Clase ordinaria
              </p>
              <p className="text-xl text-white ">Grupo: 002</p>
              <div className="flex justify-center gap-10 text-xl text-white">
                <span>Hora: M4</span>
                <span>Salón: 1303</span>
              </div>
              <p className="text-xl text-white ">
                Docente: Norma Edith Marín Martínez
              </p>
            </div>
            <div className="grid gap-8 lg:gap-28 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="text-lg text-center text-white">
                <img
                  className="mx-auto mb-4 rounded-full w-36 h-36"
                  src={natividad}
                  alt="Bonnie Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Natividad Aron De León Ramírez</a>
                </h3>
                <div className="flex justify-center gap-5">
                  <span>1855134</span>
                  <span>IAS</span>
                </div>
                <div className="flex justify-center gap-5">
                  <span>Porcentaje: 100%</span>
                </div>
                <div className="flex justify-center gap-5">
                  <span>natividad.deleonrm@uanl.edu.mx</span>
                </div>
              </div>
              <div className="text-lg text-center text-white">
                <img
                  className="mx-auto mb-4 rounded-full w-36 h-36"
                  src={emiliano}
                  alt="Bonnie Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Emiliano García Montemayor</a>
                </h3>
                <div className="flex justify-center gap-5">
                  <span>2003905</span>
                  <span>ITS</span>
                </div>
                <div className="flex justify-center gap-5">
                  <span>Porcentaje: 100%</span>
                </div>
                <div className="flex justify-center gap-5">
                  <span>emiliano.garciamnt@uanl.edu.mx</span>
                </div>
              </div>
              <div className="text-lg text-center text-white">
                <img
                  className="mx-auto mb-4 rounded-full w-36 h-36"
                  src={alonso}
                  alt="Bonnie Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Alonso Ramírez Páez</a>
                </h3>
                <div className="flex justify-center gap-5">
                  <span>2127873</span>
                  <span>ITS</span>
                </div>
                <div className="flex justify-center gap-5">
                  <span>Porcentaje: 100%</span>
                </div>
                <div className="flex justify-center gap-5">
                  <span>alonso.ramirezp@uanl.edu.mx</span>
                </div>
              </div>
              <div className="text-lg text-center text-white">
                <img
                  className="mx-auto mb-4 rounded-full w-36 h-36"
                  src={rocio}
                  alt="Bonnie Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Rocío Guadalupe Sánchez Medrano</a>
                </h3>
                <div className="flex justify-center gap-5">
                  <span>1959446</span>
                  <span>IAS</span>
                </div>
                <div className="flex justify-center gap-5">
                  <span>Porcentaje: 100%</span>
                </div>
                <div className="flex justify-center gap-5">
                  <span>rocio.sanchezmdrn@uanl.edu.mx</span>
                </div>
              </div>
              <div className="flex justify-center col-start-1 col-end-5 gap-10">
                <div className="w-1/4 text-lg text-center text-white">
                  <img
                    className="mx-auto mb-4 rounded-full w-36 h-36"
                    src={javier}
                    alt="Bonnie Avatar"
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Javier López Pérez</a>
                  </h3>
                  <div className="flex justify-center gap-5">
                    <span>2127884</span>
                    <span>ITS</span>
                  </div>
                  <div className="flex justify-center gap-5">
                    <span>Porcentaje: 100%</span>
                  </div>
                  <div className="flex justify-center gap-5">
                    <span>javier.lopezpr@uanl.edu.mx</span>
                  </div>
                </div>
                <div className="w-1/4 text-lg text-center text-white">
                  <img
                    className="mx-auto mb-4 rounded-full w-36 h-36"
                    src={carlos}
                    alt="Bonnie Avatar"
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Carlos Gabriel Beas Gonzalez</a>
                  </h3>
                  <div className="flex justify-center gap-5">
                    <span>1940892</span>
                    <span>ITS</span>
                  </div>
                  <div className="flex justify-center gap-5">
                    <span>Porcentaje: 100%</span>
                  </div>
                  <div className="flex justify-center gap-5">
                    <span>carlos.beasgnz@uanl.edu.mx</span>
                  </div>
                </div>
                <div className="w-1/4 text-lg text-center text-white">
                  <img
                    className="mx-auto mb-4 rounded-full w-36 h-36"
                    src={daniel}
                    alt="Bonnie Avatar"
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Daniel Aharon Sánchez González</a>
                  </h3>
                  <div className="flex justify-center gap-5">
                    <span>1967943</span>
                    <span>ITS</span>
                  </div>
                  <div className="flex justify-center gap-5">
                    <span>Porcentaje: 100%</span>
                  </div>
                  <div className="flex justify-center gap-5">
                    <span>aharon.sanchezgnz@uanl.edu.mx</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <p className="text-xl text-justify text-white">
                <b>Misión u objetivo de la página:</b> La misión u objetivo de esta
                página es proporcionar una comprensión integral del sistema
                operativo MacOS, destacando su funcionamiento en áreas clave
                como seguridad informática, hardware, concurrencia a nivel de
                kernel y sistema operativo. Utilizando los conocimientos
                adquiridos durante el semestre, se busca ofrecer una visión
                detallada y accesible de cómo este sistema operativo opera en
                diversos niveles.
              </p>
            </div>
            <div className="max-w-screen-sm mx-auto mt-16">
              <p className="text-xl text-white">
                Ciudad Universitaria, San Nicolás de los Garza, Nuevo León a 09
                de mayo del 2024
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FrontPage;
