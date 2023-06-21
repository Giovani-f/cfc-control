'use client'

import { logo } from '@/assets'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

interface NavbarProps {
  setMobileMenuOpen: (value: boolean) => void
}

const navigation = [
  { name: 'Produto', href: '#' },
  { name: 'Solução', href: '#' },
  { name: 'Planos', href: '#' },
]

export default function NavbarDesktop({ setMobileMenuOpen }: NavbarProps) {
  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">CFC Control</span>
          <div className="flex items-center justify-center gap-4">
            <Image src={logo} alt="Any Company" />
            <span className="text-xl font-bold text-white">CFC Control</span>
          </div>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium leading-6 text-white hover:text-custom-yellow-400"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="hidden items-center gap-10 md:ml-10 lg:flex lg:flex-1 lg:justify-end">
        <div className="flex w-auto items-center justify-center rounded bg-custom-yellow-400 py-3 text-sm font-medium text-custom-black lg:px-6 xl:px-8">
          <Link href="#">Solicitar demonstração</Link>
        </div>
        <a href="#" className="text-sm font-medium leading-6 text-white">
          Fazer Login
        </a>
      </div>
    </nav>
  )
}
