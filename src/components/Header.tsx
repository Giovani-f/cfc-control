'use client'

import { useState } from 'react'
import NavbarDesktop from './NavabarDesktop'
import NavbarMobile from './NavbarMobile'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="py-10">
        <NavbarDesktop setMobileMenuOpen={setMobileMenuOpen} />
        <NavbarMobile
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </header>
    </div>
  )
}
