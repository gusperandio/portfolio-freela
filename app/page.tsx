"use client";
import { AD } from "@/components/AD";
import { Header } from "@/components/Header";
import HowIAM from "@/components/HowIAM";
import Specifications from "@/components/Specifications";
import { StackList } from "@/components/StackList";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { LampDemo } from "@/components/Lamp";
import { TracingBeam } from "@/components/TracingBeam";
import Companies from "@/components/Companies";
import Integration from "@/components/Integration";
import { IFeedbackRequest } from "@/types/feedback";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="flex min-h-screen w-full flex-col">
        <div>
          <LampDemo />
        </div>
        <main className="w-full">
          <section className="relative isolate overflow-hidden px-6 py-0 sm:py-32 lg:px-8">
            <TracingBeam className="px-6">
              <div className="max-w-4xl mx-auto antialiased pt-4 relative">
                <Integration />
                <div data-aos="fade-left">
                  <Specifications />
                </div>

                <div data-aos="fade-right">
                  <StackList
                    tec={"FrontEnd"}
                    title="Tecnologias Front End"
                    desc="Foco na criação de interfaces responsivas, intuitivas e com uma
                          experiência de usuário aprimorada, sempre buscando boas práticas e
                          performance otimizada."
                  />
                </div>
                <div data-aos="fade-right">
                  <StackList
                    tec={"BackEnd"}
                    title="Tecnologias Back End"
                    desc="Desenvolvedor back-end com anos de experiência em criação de APIs, gerenciamento de bancos de dados e integração de sistemas, focado em performance e escalabilidade."
                  />
                </div>
                <div data-aos="fade-right">
                  <StackList
                    tec={"BD"}
                    title="Mobile e Banco de Dados"
                    desc="Desenvolvedor back-end com anos de experiência em criação de APIs, gerenciamento de bancos de dados e integração de sistemas, focado em performance e escalabilidade."
                  />
                </div>
                <Companies />
                <HowIAM />
              </div>
            </TracingBeam>
            <InfiniteMovingCardsDemo />
          </section>
        </main>
      </div>
    </div>
  );
}
