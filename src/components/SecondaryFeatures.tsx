import {
  PresentationChartLineIcon,
  UserIcon,
  CalendarDaysIcon,
  CursorArrowRippleIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Eficiência na Gestão',
    description:
      'Simplifique operações diárias, economize tempo e recursos valiosos.',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Experiência do Aluno',
    description:
      'Proporcione aos seus alunos uma jornada de aprendizado mais suave e satisfatória.',
    icon: UserIcon,
  },
  {
    name: 'Agendamento Simples',
    description:
      'Marque aulas em segundos e otimize o tempo da sua equipe e dos alunos.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Controle Total',
    description:
      'Gerencie instrutores, veículos e alunos de forma eficiente, com total controle sobre suas operações.',
    icon: CursorArrowRippleIcon,
  },
]

export default function SecondaryFeatures() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h3 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transforme sua Autoescola com nossos Recursos
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Descubra como nosso software pode fazer a diferença para sua
              autoescola.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-400">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
