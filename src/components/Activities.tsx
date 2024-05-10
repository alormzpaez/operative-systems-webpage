import { Button } from "@nextui-org/react";
import { FaFile } from "react-icons/fa";
import af1 from "./AF1_SO.pdf";
import af2video from "./AF2_SO VIDEO.pdf";
import af2inv from "./AF2_SO INV.pdf";
import af3 from "./AF3_SO.pdf";
import af4 from "./AF4_SO.pdf";

const Activities = () => {
  return (
    <div className="dark:text-gray-200">
      <div className="flex flex-col px-56">
        <section className="">
          <div className="max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 sm:py-16 lg:px-6">
            <div className="mt-4 md:mt-0">
              <h1 className="mb-4 text-6xl font-extrabold leading-none tracking-tight text-white">
                Actividades a descargar
              </h1>
              <p className="mb-6 text-xl text-justify text-white">
                A continuación, para demostrar los avances hechos a lo largo del
                semestre, se cuenta con unos botones de descarga para obtener
                cada una de las actividades fundamentales realizadas por nuestro
                equipo.
              </p>
              <p className="mb-6 text-xl text-justify text-white">
                <b>Actividad fundamental #1:</b> Investigación acerca de los
                sistemas operativos
                <br className="" />
                <Button
                  color="primary"
                  className="mt-2 text-sm"
                  endContent={<FaFile />}
                  onPress={() => {
                    window.open(af1);
                  }}
                >
                  Ver investigación PDF
                </Button>
              </p>
              <p className="mb-6 text-xl text-justify text-white">
                <b>Actividad fundamental #2:</b> Video e investigación sobre concurrencia
                <br className="" />
                <Button
                  color="primary"
                  className="mt-2 text-sm"
                  endContent={<FaFile />}
                  onPress={() => {
                    window.open(af2video);
                  }}
                >
                  Ver documento sobre vídeo en PDF
                </Button>
                <Button
                  color="primary"
                  className="mt-2 ml-2 text-sm"
                  endContent={<FaFile />}
                  onPress={() => {
                    window.open(af2inv);
                  }}
                >
                  Ver investigación PDF
                </Button>
              </p>
              <p className="mb-6 text-xl text-justify text-white">
                <b>Actividad fundamental #3:</b> Investigación sobre memoria
                <br className="" />
                <Button
                  color="primary"
                  className="mt-2 text-sm"
                  endContent={<FaFile />}
                  onPress={() => {
                    window.open(af3);
                  }}
                >
                  Ver investigación PDF
                </Button>
              </p>
              <p className="mb-6 text-xl text-justify text-white">
                <b>Actividad fundamental #4:</b> Presentación sobre seguridad informática
                <br className="" />
                <Button
                  color="primary"
                  className="mt-2 text-sm"
                  endContent={<FaFile />}
                  onPress={() => {
                    window.open(af4);
                  }}
                >
                  Ver presentación PDF
                </Button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Activities;
