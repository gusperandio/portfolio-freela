import Image from "next/image";
import { Button } from "../ui/button";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import Html from "../../public/svgs/html.svg";
import Css from "../../public/svgs/css.svg";
import Js from "../../public/svgs/javascript.svg";
import React from "../../public/svgs/react-light.svg";
import TailWind from "../../public/svgs/tailwindcss-light.svg";
import TypeScript from "../../public/svgs/typescript.svg";
import Android from "../../public/svgs/androidstudio-light.svg";
import Csharp from "../../public/svgs/cs.svg";
import Dotnet from "../../public/svgs/dotnet.svg";
import Figma from "../../public/svgs/figma-light.svg";
import Flutter from "../../public/svgs/flutter-light.svg";
import Kotlin from "../../public/svgs/kotlin-light.svg";
import Laravel from "../../public/svgs/laravel-light.svg";
import Mongo from "../../public/svgs/mongodb.svg";
import Mysql from "../../public/svgs/mysql-light.svg";
import NextJS from "../../public/svgs/nextjs-light.svg";
import Php from "../../public/svgs/php-light.svg";
import Supabase from "../../public/svgs/supabase-light.svg";
import Swift from "../../public/svgs/swift.svg";
import NodeJS from "../../public/svgs/nodejs-light.svg";

interface Technologies {
  name: string;
  role: string;
  imageUrl: any;
  module?: string;
}

interface Props {
  tec: string;
  title: string;
  desc: string;
}

const frontEnd: Technologies[] = [
  {
    name: "HTML",
    role: "5 Anos de experiência",
    imageUrl: Html,
  },
  {
    name: "CSS",
    role: "5 Anos de experiência",
    imageUrl: Css,
  },
  {
    name: "JavaScript",
    role: "5 Anos de experiência",
    imageUrl: Js,
  },
  {
    name: "React",
    role: "3 Anos de experiência",
    imageUrl: React,
  },
  {
    name: "NextJS",
    role: "2 Anos de experiência",
    imageUrl: NextJS,
  },
  {
    name: "TypeScript",
    role: "2 Anos de experiência",
    imageUrl: TypeScript,
  },
  {
    name: "TailWind",
    role: "2 Anos de experiência",
    imageUrl: TailWind,
  },
];

const backEnd: Technologies[] = [
  {
    name: "C#",
    role: "4 Anos de experiência",
    imageUrl: Csharp,
  },
  {
    name: ".NET",
    role: "4 Anos de experiência",
    imageUrl: Dotnet,
  },
  {
    name: "PHP",
    role: "2 Anos de experiência",
    imageUrl: Php,
  },
  {
    name: "Laravel",
    role: "2 Anos de experiência",
    imageUrl: Laravel,
  },
  {
    name: "NodeJS",
    role: "2 Anos de experiência",
    imageUrl: NodeJS,
  },
  {
    name: "Kotlin Back-end",
    role: "1 Ano de experiência",
    imageUrl: Kotlin,
  },
];

const bD: Technologies[] = [
  {
    name: "Kotlin (Android)",
    role: "3 Anos de experiência",
    imageUrl: Android,
    module: "Dispositivos Móveis",
  },
  {
    name: "Swift (iOS)",
    role: "1 Ano de experiência",
    imageUrl: Swift,
    module: "Dispositivos Móveis",
  },
  {
    name: "Flutter (Android e iOS)",
    role: "2 Anos de experiência",
    imageUrl: Flutter,
    module: "Dispositivos Móveis",
  },
  {
    name: "MongoDB",
    role: "3 Anos de experiência",
    imageUrl: Mongo,
    module: "Banco de dados",
  },
  {
    name: "MYSql",
    role: "5 Anos de experiência",
    imageUrl: Mysql,
    module: "Banco de dados",
  },
  {
    name: "Supabase",
    role: "1 Ano de experiência",
    imageUrl: Supabase,
    module: "Banco de dados + Autenticação",
  },
];

export function StackList(props: Props) {
  let selectedArray: Technologies[] = [];
  if (props.tec === "FrontEnd") selectedArray = frontEnd;
  if (props.tec === "BackEnd") selectedArray = backEnd;
  if (props.tec === "BD") selectedArray = bD;

  return (
    <div className="py-24 sm:py-26">
      <div className="mx-auto grid max-w-4xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            {props.title}
          </h2>

          <p className="mt-6 text-lg text-justify leading-8 text-slate-200">
            {props.desc}
            <br />
            <br />
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {selectedArray.map((techs) => (
            <li key={techs.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  alt=""
                  src={techs.imageUrl}
                  className="h-16 w-16"
                  width={180}
                  height={180}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-slate-100">
                    {techs.name}
                  </h3>
                  {techs.module && (
                    <h3 className="text-xs font-semibold leading-7 tracking-tight text-slate-100">
                      {techs.module}
                    </h3>
                  )}
                  <p className="text-sm font-semibold leading-6 text-[#13a8be]">
                    {techs.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
