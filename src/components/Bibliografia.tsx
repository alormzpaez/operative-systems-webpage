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

const Bibliografia = () => {
  return (
    <div className="dark:text-gray-200">
      <div className="flex flex-col px-56">
      <section className="">
          <div className="max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 sm:py-16 lg:px-6">
            <div className="mt-4 md:mt-0">
              <h1 className="mb-4 text-6xl font-extrabold leading-none tracking-tight text-white">
                Bibliografía
              </h1>
              {/* <p className="mb-6 text-xl text-justify text-white">
                A continuación, para demostrar los avances hechos a lo largo del
                semestre, se cuenta con unos botones de descarga para obtener
                cada una de las actividades fundamentales realizadas por nuestro
                equipo.
              </p> */}
              <ul className="space-y-1 text-xl text-white list-disc list-inside">
                <li>Jordan, T., & Taylor, P. (2002). Hacktivism and cyberwars. Taylor & Francis e-Library. </li>
                <li>Laguna, C. P., & Oruña, A. R. (2003). MAC OS X: PANTHER. LA EVOLUCIÓN DE LAS ESPECIES. Barcelona. Recuperado de http://docencia.ac.upc.es/FIB/CASO/seminaris/1q0304/M11_Informe. pdf.</li>
                <li>REAL ACADEMIA ESPAÑOLA: Diccionario de la lengua española, 23.ª ed., [versión 23.7 en línea]. https://dle.rae.es [Fecha de la consulta].</li>
                <li>¿Qué es una CLI? - Explicación sobre la interfaz de línea de comandos - AWS. (s. f.). Amazon Web Services, Inc. https://aws.amazon.com/es/what-is/cli/.</li>
                <li>Tanenbaum, A. S. (2003). Sistemas operativos modernos. Pearson Educación.</li>
                <li>Wolf, G. (2015). Fundamentos de sistemas operativos. Lulu.com.</li>
                <li>Jepson, B., & Rotbman, E. E. (2002). Mac OS X for Unix Geeks (1.a ed.).</li>
                <li>Gutiérrez Cañizares, J. J. (2015). UF1271 - Instalación y configuración del software de servidor web (5.a ed.). Elearning, S.L.,.</li>
                <li>Munslow Vilar, B. (2007). Estudio, diseño e implementación de widgets.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bibliografia;