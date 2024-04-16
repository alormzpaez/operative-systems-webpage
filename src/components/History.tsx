import macos from "./../assets/macOS.webp";
import apple1 from "./../assets/apple1.jpg";
import steve from "./../assets/steve.jpg";
import stephen from "./../assets/stephen.jpg";
import mike from "./../assets/mike.webp";
import ad1984 from "./../assets/1984.jpg";
import superbowl from "./../assets/superbowl.jpg";

const History = () => {
  return (
    <div className="dark:text-gray-200">
      <div className="flex flex-col px-56">
        <section className="">
          <div className="items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img className="w-full" src={macos} alt="dashboard image" />
            <div className="mt-4 md:mt-0">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Historia del macOS
              </h1>
              <p className="mb-6 text-gray-200 md:text-lg">
                macOS, abreviatura de Macintosh Operating System (Sistema
                Operativo de Macintosh), es el nombre del sistema operativo de
                Apple para los ordenadores Macintosh. El macOS original fue el
                primer sistema operativo en incluir una interfaz gráfica de
                usuario.
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6">
            <div className="max-w-screen-sm mx-auto text-center">
              <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                Antecedentes
              </h1>
              <p className="mb-6 text-gray-200 md:text-lg">
                Era el año 1976, cuando de la mano de los jóvenes Steve Jobs,
                Steve Wozniak y Mike Markkula nace el Apple I. El primer
                ordenador personal desarrollado por Apple Computers.
              </p>
            </div>
          </div>
        </section>
        <div className="flex justify-center">
          <img
            className="h-auto max-w-4xl"
            src={apple1}
            alt="image description"
          />
        </div>
        <section className="">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6">
            <div className="max-w-screen-sm mx-auto text-center">
              <p className="mb-6 text-gray-200 md:text-lg">
                Los fundadores Steve Jobs, Steve Wozniak y Mike Markkula,
                introdujeron una arquitectura abierta de computadoras con
                sonido, color y una interfaz gráfica de usuario. Esta GUI estaba
                inicialmente basada en un proyecto de Xerox. Aunque Xerox no
                anticipaba su potencial, Apple siempre ha buscado mejorarla,
                estudiando otras arquitecturas de sistemas operativos.
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 ">
            <div className="grid gap-8 mb-6 place-content-center lg:mb-16 md:grid-cols-2">
              <div className="items-center rounded-lg shadow sm:flex dark:border-gray-700">
                <img
                  className="w-40 rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={steve}
                  alt="Bonnie Avatar"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Steve Jobs
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    Empresario, diseñador industrial, cofundador de Apple, etc.
                  </span>
                  <p className="mt-3 mb-4 text-gray-200">
                    Se desempeñó como líder en el desarrollo de productos
                    tecnológicos.
                  </p>
                </div>
              </div>
              <div className="items-center rounded-lg shadow sm:flex dark:border-gray-700">
                <img
                  className="w-40 rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={stephen}
                  alt="Bonnie Avatar"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Steve Wozniak
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    Ingeniero en computación y programador
                  </span>
                  <p className="mt-3 mb-4 text-gray-200">
                    Wozniak es admirado por su ingenio técnico y su enfoque en
                    la simplicidad y la accesibilidad de la tecnología.
                  </p>
                </div>
              </div>
              <div className="items-center row-span-4 rounded-lg shadow sm:flex dark:border-gray-700">
                <img
                  className="w-40 rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={mike}
                  alt="Bonnie Avatar"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Mike Markkula
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    Ex CEO de Apple
                  </span>
                  <p className="mt-3 mb-4 text-gray-200">
                    Fue un empresario y ejecutivo estadounidense, conocido por
                    ser uno de los primeros inversores y el tercer cofundador de
                    Apple Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                El Impacto del Anuncio '1984' de Apple
              </h1>
              <p className="max-w-2xl mb-6 text-gray-200 lg:mb-8 md:text-lg lg:text-xl ">
              En 1984, el anuncio '1984' del Macintosh durante el Super Bowl catapultó a Apple a la fama mundial. Dirigido por Ridley Scott, presentó el primer ordenador con Interfaz Gráfica de Usuario (GUI) y mouse, revolucionando la industria tecnológica dominada por MS-DOS.
              </p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src={ad1984}
                alt="mockup"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;
