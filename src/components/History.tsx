import macos from "./../assets/macOS.webp";
import apple1 from "./../assets/apple1.jpg";
import steve from "./../assets/steve.jpg";
import stephen from "./../assets/stephen.jpg";
import mike from "./../assets/mike.webp";
import ad1984 from "./../assets/1984.jpg";
import superbowl from "./../assets/superbowl.jpg";
import pixar from "./../assets/pixar.jpg";
import macosx from "./../assets/macosx.jpg";

const History = () => {
  return (
    <div className="dark:text-gray-200">
      <div className="flex flex-col px-56">
        <section className="">
          <div className="items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img className="w-full" src={macos} alt="dashboard image" />
            <div className="mt-4 md:mt-0">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Historia del MacOS
              </h1>
              <p className="mb-6 text-xl text-justify text-white">
                MacOS, abreviatura de Macintosh Operating System (Sistema
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
              <p className="mb-6 text-xl text-justify text-white">
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
              <p className="mb-6 text-xl text-justify text-white">
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
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6">
            <div className="grid gap-8 mb-6 place-content-center lg:mb-16 md:grid-cols-2">
              <div className="items-center rounded-lg shadow sm:flex dark:border-gray-700">
                <img
                  className="w-40 rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={steve}
                  alt="Bonnie Avatar"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    Steve Jobs
                  </h3>
                  <span className="text-xl">
                    (Empresario, diseñador industrial, cofundador de Apple,
                    etc.)
                  </span>
                  <p className="mt-3 mb-4 text-xl">
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
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    Steve Wozniak
                  </h3>
                  <span className="text-xl text-white">
                    (Ingeniero en computación y programador)
                  </span>
                  <p className="mt-3 mb-4 text-xl text-justify">
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
                  <span className="text-xl">(Ex CEO de Apple)</span>
                  <p className="mt-3 mb-4 text-xl text-justify text-white">
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
              <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-white">
                El Impacto del Anuncio '1984' de Apple
              </h1>
              <p className="max-w-2xl mb-6 text-xl text-justify text-white">
                En 1984, el anuncio '1984' del Macintosh durante el Super Bowl
                catapultó a Apple a la fama mundial. Dirigido por Ridley Scott,
                presentó el primer ordenador con Interfaz Gráfica de Usuario
                (GUI) y mouse, revolucionando la industria tecnológica dominada
                por MS-DOS.
              </p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={ad1984} alt="mockup" />
            </div>
          </div>
        </section>
        <section className="">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={pixar} alt="mockup" />
            </div>
            <div className="ml-8 mr-auto place-self-center lg:col-span-7">
              <p className="max-w-2xl mb-6 text-xl text-justify text-white">
                En 1985, Apple enfrentó serias dificultades cuando Steve Jobs
                renunció en mayo de ese año. Después de su salida, Jobs se
                dedicó a otras empresas como Pixar Entertainment y NeXT
                Computer. Sin embargo, la situación de Apple empeoró con el
                tiempo hasta que Jobs regresó en julio de 1997, siendo su
                retorno fundamental para sacar a la compañía de la bancarrota.
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <div className="">
            <div className="">
              <p className="mb-6 text-xl text-justify text-white">
                Tras el retorno de Jobs, Apple experimentó un renacimiento
                notable, destacándose por el diseño innovador de sus
                computadoras y por mantener beneficios consistentes desde el
                lanzamiento del iMac, incluso en tiempos de crisis en la
                industria.
              </p>
              <br />
              <div className="flex justify-center w-full mb-2">
                <div className="flex max-w-xl">
                  <img src={macosx} alt="mockup" />
                </div>
              </div>
              <p className="mb-6 text-xl text-justify text-white">
                En 1996, Apple adquirió NeXT Computer, incorporando su sistema
                operativo basado en el kernel Mach y BSD 4.4, lo que revitalizó
                el desarrollo de un nuevo sistema operativo. Surgió así el
                proyecto Rhapsody, basado en OpenStep y concebido para ofrecer
                estabilidad, seguridad, extensibilidad y facilidad de uso. Este
                proyecto evolucionó hacia MacOS X, cuyo kernel, llamado Darwin,
                fue desarrollado como un proyecto de código abierto, permitiendo
                su adaptación a diferentes arquitecturas de hardware.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;
