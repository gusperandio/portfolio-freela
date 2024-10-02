import Image from "next/image";
import React from "react";
import Js from "../../public/svgs/javascript.svg";
import NodeJS from "../../public/svgs/nodejs-light.svg";
import ReactIcon from "../../public/svgs/react-light.svg";
import TypeScript from "../../public/svgs/typescript.svg";
import NextJS from "../../public/svgs/nextjs-light.svg";
import Csharp from "../../public/svgs/cs.svg";
import Flutter from "../../public/svgs/flutter-light.svg";
import Android from "../../public/svgs/androidstudio-light.svg";
import Dotnet from "../../public/svgs/dotnet.svg";
import Figma from "../../public/svgs/figma-light.svg";
import Kotlin from "../../public/svgs/kotlin-light.svg";
import Laravel from "../../public/svgs/laravel-light.svg";
import Mongo from "../../public/svgs/mongodb.svg";
import Mysql from "../../public/svgs/mysql-light.svg";
import Html from "../../public/svgs/html.svg";
import Css from "../../public/svgs/css.svg";
import TailWind from "../../public/svgs/tailwindcss-light.svg";
import Php from "../../public/svgs/php-light.svg";
import Supabase from "../../public/svgs/supabase-light.svg";
import Swift from "../../public/svgs/swift.svg";
import styles from "./styles.module.css"; 

const CardMe = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center sm:h-72 sm:w-72">
      <div className=" relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
        <button className="profile_item rotate-inverse left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
          <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-[#f0db4f] p-1">
            <Image src={Js} height={60} width={60} alt="img" />
          </span>
        </button>

        <button className="profile_item rotate-inverse right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
          <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-[#007acc] p-1">
            <Image src={TypeScript} height={40} width={40} alt="img" />
          </span>
        </button>

        <button className="profile_item rotate-inverse -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
          <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-[#953cad] p-1">
            <Image src={Csharp} height={40} width={40} alt="img" />
          </span>
        </button>

        <button className="profile_item rotate-inverse -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
          <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
            <Image src={Flutter} height={40} width={40} alt="img" />
          </span>
        </button>

        <button className="profile_item rotate-inverse bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
          <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
            <Image src={NextJS} height={40} width={40} alt="img" />
          </span>
        </button>

        <button className="profile_item rotate-inverse bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
          <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
            <Image src={ReactIcon} height={40} width={40} alt="img" />
          </span>
        </button>

        <button className="profile_item rotate-inverse right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
          <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
            <Image src={NodeJS} height={40} width={40} alt="img" />
          </span>
        </button>

        <button className="profile-button w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
          <div className="w-full h-full rounded-full active:scale-95 hover:border-gray-400 border-2 bg-[url('/profile.jpg')] bg-cover transition-all duration-500" />
        </button>
      </div>
    </div>
  );
};

export default CardMe;
