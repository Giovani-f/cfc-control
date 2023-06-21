'use client'

import { useState } from 'react'
import NavbarDesktop from './NavabarDesktop'
import NavbarMobile from './NavbarMobile'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-custom-black">
      <header className="container mx-auto">
        <NavbarDesktop setMobileMenuOpen={setMobileMenuOpen} />
        <NavbarMobile
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </header>
    </div>
  )
}
