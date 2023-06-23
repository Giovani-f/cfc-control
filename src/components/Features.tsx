'use client'

import { Tab } from '@headlessui/react'
// import Image from 'next/image'
import {
  UserGroupIcon,
  UsersIcon,
  TruckIcon,
  CalendarDaysIcon,
} from '@heroicons/react/20/solid'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import backgroundImage from '@/assets/images/background-features.png'

const features = [
  {
    title: 'Alunos',
    description:
      'Centralize todas as informações dos seus alunos em um só lugar, facilitando o acesso e o acompanhamento de cada um deles.',
    icon: UserGroupIcon,
  },
  {
    title: 'Aulas',
    description:
      'Agende aulas de forma simples e rápida, otimizando o tempo da sua equipe e dos alunos.',
    icon: CalendarDaysIcon,
    image:
      'https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.3f331919.png&w=1200&q=75',
  },
  {
    title: 'Instrutores',
    description:
      'Gerencie sua equipe de instrutores de maneira eficiente, atribuindo aulas e acompanhando seu desempenho.',
    icon: UsersIcon,
  },
  {
    title: 'Veículos',
    description:
      'Mantenha um registro atualizado dos veículos da sua autoescola, garantindo o controle e a disponibilidade adequada para as aulas.',
    icon: TruckIcon,
  },
]

export default function Features() {
  const [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: any) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-900 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Recursos Poderosos para Potencializar seu Negócio
          </h2>
          <p className="mt-6 text-lg tracking-tight text-gray-300">
            Aprimore a gestão, otimize aulas e proporcione uma experiência
            excepcional para seus alunos.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
          <Tab.Group
            as="div"
            className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
            vertical={tabOrientation === 'vertical'}
          >
            {({ selectedIndex }) => (
              <>
                <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                  <Tab.List className="relative z-10 flex space-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:space-x-0 lg:space-y-1 lg:whitespace-normal">
                    {features.map((feature, featureIndex) => (
                      <div
                        key={feature.title}
                        className={clsx(
                          'group relative rounded-full px-4 py-2 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                          {
                            'bg-slate-50/10 ring-1 ring-inset ring-white/10':
                              selectedIndex === featureIndex,
                            'hover:bg-slate-50/10 lg:hover:bg-slate-50/5':
                              selectedIndex !== featureIndex,
                          },
                        )}
                      >
                        <h3>
                          <Tab
                            className={clsx(
                              'font-display text-lg outline-none',
                              {
                                'text-white': selectedIndex === featureIndex,
                                'text-gray-400 hover:text-white lg:text-white':
                                  selectedIndex !== featureIndex,
                              },
                            )}
                          >
                            <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                            <div className="flex items-center justify-center gap-2">
                              <feature.icon
                                className="h-5 w-5 text-amber-400"
                                aria-hidden="true"
                              />
                              {feature.title}
                            </div>
                          </Tab>
                        </h3>
                        <p
                          className={clsx('mt-2 hidden text-sm lg:block', {
                            'text-white': selectedIndex === featureIndex,
                            'text-gray-400 group-hover:text-white':
                              selectedIndex !== featureIndex,
                          })}
                        >
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels className="lg:col-span-7">
                  {features.map((feature) => (
                    <Tab.Panel key={feature.title} unmount={false}>
                      <div className="relative sm:px-6 lg:hidden">
                        <div className="absolute -inset-x-4 -bottom-[4.25rem] -top-[6.5rem] bg-slate-50/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                        <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                          {feature.description}
                        </p>
                      </div>
                      <div className="relative mt-10 aspect-[1085/730] w-[45rem] overflow-hidden rounded-xl bg-slate-900 shadow-xl shadow-slate-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                        <Image
                          src={
                            feature.image ||
                            'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
                          }
                          alt=""
                          layout="fill"
                          priority
                          sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                        />
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </>
            )}
          </Tab.Group>
        </div>
      </div>
    </section>
  )
}
