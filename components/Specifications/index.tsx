import Image from "next/image"
import chadCN from '../../public/og.png'
import uiux from '../../public/uiux.png'
import stripe from '../../public/stripe.jpeg'

const features = [
  { name: 'Manutenção', description: 'Manutenção no seu projeto, seja ele front-end ou back-end, se necessário organização do seu código mantendo ele de uma forma mais limpa e de fácil leitura com formatadores e design.' },
  { name: 'Banco de dados', description: 'Modelagem de banco de dados, vinculação de tabelas, estruturação de consultas e ordenação.' },
  { name: 'UI/UX', description: 'Aplicando CSS para deixar seu projeto/site totalmente responsivo para uso em Computadores ou Celulares. Aplico componentes de tela Shadcn UI para acelerar o processo de desenvolvimento das telas ou outra framework que deseja.' },
  { name: 'Pagamento', description: 'Posso vincular seu projeto a plataforma de pagamentos STRIPE ou outra plataforma na qual ja é cliente.' },
  { name: 'Dispositivos Móveis', description: 'Criação de Apps nativos para Android (Kotlin) e iOS (Swift) e desenvolvimento multiplataforma com Flutter. Foco em interfaces intuitivas, integração de APIs e alto desempenho para garantir soluções eficientes e adaptadas às necessidades do projeto.' },
  { name: 'Documentação', description: 'Documentação do seu back-end implementando informações com base nas ferramentas de engenharia de software.' },
]

export default function Specifications() {
  return (
    <div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6  lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Serviços oferecidos</h2>
          <p className="mt-4 text-slate-200">
            É possível abrangir diversas etapas das soluções que deseja, o que procura está listado. Leia:
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-slate-600 pt-4">
                <dt className="font-medium text-slate-50">{feature.name}</dt>
                <dd className="mt-2 text-sm text-slate-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src={chadCN}
            className="rounded-lg bg-gray-100"
            height={200}
            width={200}
          />
          <Image
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            src={uiux}
            className="rounded-lg bg-gray-100"
            height={200}
            width={200}
          />
          <Image
            alt="Side of walnut card tray with card groove and recessed card area."
            src={stripe}
            className="rounded-lg bg-gray-100"
            height={200}
            width={200}
          />
          <Image
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            className="rounded-lg bg-gray-100"
            height={200}
            width={200}
          />
        </div>
      </div>
    </div>
  )
}
