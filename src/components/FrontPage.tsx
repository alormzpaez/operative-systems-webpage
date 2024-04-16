import uanl from "./../assets/uanl.png";
import fime from "./../assets/fime.png";
import { Image } from "@nextui-org/react";

const FrontPage = () => {
  return (
    <div className="dark:text-gray-200">
      <div className="flex flex-col px-56">
        <section className="">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <div className="max-w-screen-sm mx-auto mb-8 lg:mb-16">
              <div className="flex p-10 mb-4 text-4xl font-extrabold tracking-tight text-gray-900 border rounded-md justify-evenly dark:text-white">
                <Image
                  radius="none"
                  width={300}
                  alt="NextUI hero Image"
                  src={uanl}
                />
                <Image
                  radius="none"
                  width={100}
                  alt="NextUI hero Image"
                  src={fime}
                />
              </div>
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                PIA
              </h2>
              <p className="text-gray-200 sm:text-xl ">
                Equipo #2
              </p>
              <p className="text-gray-200 sm:text-xl ">
                Sistemas operativos
              </p>
              <div className="flex justify-center gap-10 text-gray-200 sm:text-xl">
                <span>
                  Hora: M4
                </span>
                <span>
                  Salón: 1303
                </span>
              </div>
            </div>
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="text-center text-gray-500 dark:text-gray-400">
                <img
                  className="mx-auto mb-4 rounded-full w-36 h-36"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="Bonnie Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Natividad Aron De León Ramírez</a>
                </h3>
                <p>1855134</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FrontPage;
