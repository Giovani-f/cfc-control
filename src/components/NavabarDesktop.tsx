'use client'

import { logo } from '@/assets'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

interface NavbarProps {
  setMobileMenuOpen: (value: boolean) => void
}

export default function NavbarDesktop({ setMobileMenuOpen }: NavbarProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav className="relative z-50 flex justify-between">
        <div className="flex items-center md:gap-x-12">
          <Link
            className="flex items-center justify-center gap-4 text-xl font-semibold"
            aria-label="Home"
            href="/#"
          >
            <Image
              src={logo}
              alt="CFC Control Logo"
              className="fill-amber-400"
            />
            <span className="">CFC Control</span>
          </Link>
          <div className="hidden md:flex md:gap-x-6">
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-amber-400 hover:text-slate-900"
              href="/#features"
            >
              Features
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-amber-400 hover:text-slate-900"
              href="/#testimonials"
            >
              Testimonials
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-amber-400 hover:text-slate-900"
              href="/#pricing"
            >
              Pricing
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-x-5 md:gap-x-8">
          <div className="hidden lg:block">
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              href="/login"
            >
              Fazer login
            </Link>
          </div>
          <Link
            className="group hidden items-center justify-center rounded-full bg-amber-400 px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-amber-500 hover:text-slate-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 active:bg-amber-800 active:text-blue-100 lg:inline-flex"
            href="/register"
          >
            <span>Solicitar demonstração</span>
          </Link>
          <div className="-mr-1 lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
