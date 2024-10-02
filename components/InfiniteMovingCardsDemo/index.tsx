"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  const testimonials = [
    {
      quote: "O suporte foi excelente, a integração do novo módulo agilizou nossos processos em 50%. Antes, perdíamos muito tempo em tarefas repetitivas, e agora conseguimos focar mais na análise de resultados. A equipe ficou muito satisfeita com a velocidade das implementações.",
      name: "Carlos Oliveira",
      title: "Solução Gerencial Alpha"
    },
    {
      quote: "Graças às melhorias na interface, nossos clientes tiveram uma experiência muito mais intuitiva. O fluxo de navegação ficou mais fluido e reduziu a necessidade de suporte técnico. Além disso, o design renovado trouxe um visual mais moderno para nossa plataforma.",
      name: "Fernanda Souza",
      title: "Plataforma Flex"
    },
    {
      quote: "A performance do sistema melhorou significativamente, eliminando gargalos antigos! Anteriormente, enfrentávamos muitos problemas de lentidão em operações críticas, mas com a nova otimização, conseguimos reduzir o tempo de execução e a utilização de recursos. A estabilidade também foi um grande ganho.",
      name: "João Silva",
      title: "Sistema Delta"
    },
    {
      quote: "As alterações no front-end trouxeram uma grande melhoria na experiência do usuário. O novo layout e a implementação de componentes reativos deixaram a interface mais agradável e responsiva, facilitando o uso em diferentes dispositivos. Os feedbacks dos usuários foram extremamente positivos.",
      name: "Mariana Ferreira",
      title: "Gerenciador Omega"
    },
    {
      quote: "A consultoria nos ajudou a identificar problemas críticos e melhorar nossa arquitetura. Com as orientações técnicas, conseguimos reorganizar o fluxo de dados e implementar boas práticas que reduziram o acoplamento entre módulos. Hoje, temos uma aplicação mais estável e de fácil manutenção.",
      name: "Rafael Lima",
      title: "Software Orion"
    }
  ];
  

  return (
    <div className="mt-24">
      <h3 className="ml-24 text-2xl font-bold tracking-tight text-gray-900">Feedbacks</h3>
      <div className="h-[20rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
