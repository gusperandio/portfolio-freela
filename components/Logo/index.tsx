import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Sharingan from "../../public/sharingan2.png"
import styles from "./styles.module.css";
import { cn } from "@/lib/utils";

export function Logo() {
  return (
    <div 
      className={cn("w-12 h-12 px-3 py-3 rounded-md tracking-wider shadow-xl z-10 bg-slate-50")} 
    >
      <Image src={Sharingan} width={56}  height={56} alt="Logo" className={styles.rotating_div}/>
    </div>
  );
}

export default Logo;
