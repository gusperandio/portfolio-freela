import { CloudDownload, LockKeyholeIcon, ServerIcon } from "lucide-react";
import CardMe from "../CardME";
import { BackgroundBeamsWithCollision } from "../BeamsCollision";
import Logo from "../Logo";

export default function HowIAM() {
  return (
    <div className="relative isolate overflow-hidden bg-[#020617] px-6 py-24 sm:py-14 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden h-[700px]">
        <BackgroundBeamsWithCollision>
          <div></div>
        </BackgroundBeamsWithCollision>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Quem sou eu? 
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl flex flex-row gap-4">
                Gustavo Sperandio <Logo />
              </h1>
              <p className="mt-6 text-xl leading-8 text-slate-300">
                Desenvolvendo software desde 2020, formado em análise e desenvolvimento de sistemas, programando dia após dia por paixão
                e diversão. Meus hobbies são tempo em família, exercícios, programação e o mais importante, cozinhar.
              </p>
            </div>
          </div>
        </div>
        <div className=" -mt-12 p-12  lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <CardMe />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
