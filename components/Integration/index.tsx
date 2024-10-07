import { Drill, Server, TabletSmartphone, Cable } from "lucide-react";

const features = [
  {
    name: "Manutenção",
    description:
      "Manutenção do seu projeto, corrigindo bugs, layouts e novas regras de negócios",
    icon: Drill,
  },
  {
    name: "Deploy",
    description:
      "Deploy do seu site para produção onde seus clientes consigam utilizar ",
    icon: Server,
  },
  {
    name: "Aplicativos",
    description:
      "Criação de aplicativos para ambas lojas para consumo em Android e iOS",
    icon: TabletSmartphone,
  },
  {
    name: "Integrações",
    description:
      "As integrações que decidir serão aplicadas, seja integração com plataformas, consumo de APIs externas e até pagamento vinculando a carteiras digitais",
    icon: Cable,
  },
];

export default function Integration() {
  return (
    <div className="bg-[#020617] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-cyan-400">
            Alto desempenho e perforamance
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
            Tudo o que você precisa saber
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-50">
            Eleve o nível do seu negócio com soluções que entregam velocidade
            impressionante, estabilidade inabalável e uma experiência
            inesquecível para os seus clientes. Cada segundo conta, e um
            desempenho de alto impacto é o que separa o comum do extraordinário.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-slate-100">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
