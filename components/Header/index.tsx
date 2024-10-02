import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

export function Header() {
  return (
    <header className="animate__animated animate__fadeIn">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-40 w-40"
              src="/Marca d'água - Leticia Jardim-27.png"
              height="500"
              width="500"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <Button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6"
              variant="ghost"
            >
              Inicio
            </Button>
          </div>

          <Button
            type="button"
            className="flex items-center gap-x-1 text-sm font-semibold leading-6"
            variant="ghost"
          >
            Psicologia
          </Button>
          <Button
            type="button"
            className="flex items-center gap-x-1 text-sm font-semibold leading-6"
            variant="ghost"
          >
            Fenomenologia
          </Button>
          <Button
            type="button"
            className="flex items-center gap-x-1 text-sm font-semibold leading-6"
            variant="ghost"
          >
            LabFeno
          </Button>
          <Button
            type="button"
            className="flex items-center gap-x-1 text-sm font-semibold leading-6"
            variant="ghost"
          >
            Contato
          </Button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/login" legacyBehavior>
            <Button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6"
              variant="ghost"
            >
              Login <span aria-hidden="true">&rarr;</span>
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
