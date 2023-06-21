// import Image from 'next/image'
import {
  UserGroupIcon,
  UsersIcon,
  TruckIcon,
  CalendarDaysIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Gerenciamento de Alunos.',
    description:
      'Centralize todas as informações dos seus alunos em um só lugar, facilitando o acesso e o acompanhamento de cada um deles.',
    icon: UserGroupIcon,
  },
  {
    name: 'Agendamento de Aulas.',
    description:
      'Agende aulas de forma simples e rápida, otimizando o tempo da sua equipe e dos alunos.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Gerenciamento de Intrutores.',
    description:
      'Gerencie sua equipe de instrutores de maneira eficiente, atribuindo aulas e acompanhando seu desempenho.',
    icon: UsersIcon,
  },
  {
    name: 'Controle de Veículos.',
    description:
      'Mantenha um registro atualizado dos veículos da sua autoescola, garantindo o controle e a disponibilidade adequada para as aulas.',
    icon: TruckIcon,
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-900 pb-28 pt-20 sm:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Potencialize sua autoescola com recursos poderosos.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-gray-300">
            Simplifique a gestão, otimize aulas e ofereça uma experiência
            excepcional aos alunos.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <dl className=" max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-bold text-white">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-amber-500"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </section>
  )
}
