import cli from "./../assets/cli.png";
import cli2 from "./../assets/cli2.png";
import commands from "./../assets/commands.svg";
import kernel from "./../assets/kernel.jpg";
import processes from "./../assets/procesos.jpg";

const Interface = () => {
  return (
    <div className="dark:text-white">
      <div className="flex flex-col px-56">
        <section className="">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="mb-4 text-6xl font-extrabold leading-none tracking-tight text-white ">
                ¿Qué es una interfaz?
              </h1>
              <p className="mt-4 text-xl text-justify text-white">
                La Real Academia Española define una interfaz como: la conexión,
                física o lógica, entre una computadora y el usuario, un
                dispositivo periférico o un enlace de comunicaciones. Existen
                tres tipos:
              </p>
            </div>

            <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <span className="bg-green-100 text-green-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  Usado en macOS
                </span>
                <h3 className="text-xl font-bold leading-tight text-white">
                  CLI (Interfaz de línea de comandos)
                </h3>
                <p className="text-xl text-justify text-white">
                  Se utiliza para interactuar con el sistema operativo mediante
                  el teclado y texto.
                </p>
              </div>

              <div className="space-y-4">
                <span className="bg-green-100 text-green-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  Usado en macOS
                </span>
                <h3 className="text-xl font-bold leading-tight text-white">
                  GUI (Interfaz gráfica de usuario)
                </h3>
                <p className="text-xl text-justify text-white">
                  Permite la interacción con un programa informático a través de
                  elementos gráficos como ventanas, botones, menús, iconos, etc.
                </p>
              </div>

              <div className="space-y-4">
                <span className="bg-red-100 text-red-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                  No usada en macOS
                </span>
                <h3 className="text-xl font-bold leading-tight text-white">
                  NUI (Interfaz de usuario natural)
                </h3>
                <p className="text-xl text-justify text-white">
                  Se utilizan movimientos, gestos, voz, y otros medios naturales
                  de comunicación para interactuar con el sistema operativo.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="max-w-screen-xl px-4 mx-auto lg:px-6">
            <div className="flex flex-col items-center">
              <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight">
                ¿Cómo funciona la CLI (interfaz de línea de comandos)?
              </h1>
              <p className="mb-8 text-xl text-justify text-white">
                Para que una línea de comandos funcione, se requiere la ayuda de
                un shell predeterminado. Un shell es un programa que actúa como
                intermediario entre el usuario y el sistema operativo. Algunos
                ejemplos incluyen Bash, cmd.exe y PowerShell, además de otros
                diseñados para funciones más específicas.
              </p>
              <div className="flex items-center gap-10">
                <figure className="max-w-lg">
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={cli}
                    alt="image description"
                  />
                  <figcaption className="mt-2 text-xl text-center text-white">
                    CLI en macOS.
                  </figcaption>
                </figure>
                <figure className="max-w-lg">
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={cli2}
                    alt="image description"
                  />
                  <figcaption className="mt-2 text-xl text-center text-white">
                    CLI en Windows, su principal competidor.
                  </figcaption>
                </figure>
              </div>
              <p className="my-8 text-xl text-justify text-white">
                El shell se encarga de gestionar diversas tareas, como el
                análisis de comandos, la administración de entornos y la
                ejecución de procesos. Esta es la manera de abrir la CLI en
                macOS:
              </p>
            </div>
          </div>
        </section>
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 ">
          <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto text-xl text-white">
              <h3>
                1. Buscar la aplicación Finder, que suele encontrarse en la
                barra de herramientas.
              </h3>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto text-xl text-white">
              <h3>2. Ir a Aplicaciones/Utilidades.</h3>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto text-xl text-white">
              <h3>3. Seleccionar "Terminal".</h3>
            </blockquote>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto text-xl text-white">
              <h3>4. Escribir un comando en la línea de comandos.</h3>
            </blockquote>
          </figure>
        </div>
        <section className="">
          <div className="items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img className="w-full" src={commands} alt="image" />
            <div className="mt-4 md:mt-0">
              <h2 className="mb-6 text-5xl font-extrabold text-white">
                Funcionamiento de los comandos
              </h2>
              <div>
                <ol className="relative text-xl text-justify text-white border-gray-700 border-s">
                  <li className="mb-4 ms-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 text-blue-400 bg-blue-900 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900">
                      1
                    </span>
                    <h3 className="leading-tight">
                      El intérprete de línea de comandos del shell descompone el
                      comando para entender su estructura, separando el nombre,
                      las opciones y los argumentos.
                    </h3>
                  </li>
                  <li className="mb-4 ms-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 text-blue-400 bg-blue-900 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900">
                      2
                    </span>
                    <h3 className="leading-tight">
                      El shell busca el comando en su lista y ejecuta la acción
                      deseada por el usuario.
                    </h3>
                  </li>
                  <li className="mb-4 ms-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 text-blue-400 bg-blue-900 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900">
                      3
                    </span>
                    <h3 className="leading-tight">
                      Busca en la variable PATH del sistema el archivo
                      correspondiente al comando.
                    </h3>
                  </li>
                  <li className="mb-4 ms-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 text-blue-400 bg-blue-900 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900">
                      4
                    </span>
                    <h3 className="leading-tight">
                      El shell de la CLI llama al archivo correcto y utiliza las
                      opciones y argumentos como entrada.
                    </h3>
                  </li>
                  <li className="mb-4 ms-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 text-blue-400 bg-blue-900 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900">
                      5
                    </span>
                    <h3 className="leading-tight">
                      El sistema operativo realiza las acciones necesarias.
                    </h3>
                  </li>
                  <li className="mt-6 mb-4 ms-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 text-blue-400 bg-blue-900 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900">
                      6
                    </span>
                    <h3 className="leading-tight">
                      Puede generar elementos de salida, como mensajes
                      informativos o de error, los datos solicitados o los
                      resultados de la operación.
                    </h3>
                  </li>
                  <li className="mb-4 ms-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 text-blue-400 bg-blue-900 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900">
                      7
                    </span>
                    <h3 className="leading-tight">
                      El shell de la CLI los muestra para que el usuario pueda
                      ver lo que produjo el comando.
                    </h3>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
            <div className="col-span-7 mr-auto place-self-center">
              <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-white">
                ¿Cómo funciona el kernel en MacOS?
              </h1>
              <p className="max-w-2xl mb-6 text-xl text-justify text-white">
                Proporciona las funciones básicas del sistema operativo, como la
                gestión y la comunicación entre procesos. Basándose en el kernel
                Mach y componentes de código abierto de FreeBSD, esto se hace
                para proporcionar un entorno eficiente y seguro.
              </p>
              <p className="max-w-2xl mb-6 text-xl text-justify text-white">
                Gestiona de manera eficiente los recursos del sistema, asignando
                memoria a los procesos de manera dinámica, administrando la
                concurrencia para garantizar la ejecución simultánea de
                múltiples tareas y proporcionando un entorno seguro para la
                ejecución de software.
              </p>
            </div>
            <div className="flex justify-center col-span-5">
              <img src={kernel} alt="mockup" />
            </div>
          </div>
        </section>
        <section className="mt-10">
          <p className="mb-6 text-xl text-justify text-white">
            Para recordar la relevancia de los procesos en un sistema operativo
            (tema visto en clase), es esencial comprender sus estados
            fundamentales. Estos estados reflejan la dinámica de ejecución de un
            programa y son cruciales para gestionar eficientemente los recursos
            del sistema.
          </p>
          <div className="flex justify-center w-full mb-10">
            <div className="max-w-lg">
              <img src={processes} alt="mockup" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Interface;
