'use client'

import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'

const links = [
  { href: '/', label: 'Home' },
  { href: '/sanctum-hq', label: 'Sanctum HQ' },
  { href: '/events-experiences', label: 'Events & Experiences' },
  { href: '/member-benefits', label: 'Member Benefits' },
  { href: '/membership-packages', label: 'Membership Packages' },
  { href: '/enquire-now', label: 'Enquire Now' },
  { href: '/apply-now', label: 'Apply Now' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="bg-charcoal sticky top-0 z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 min-[985px]:px-10 h-[64px] min-[985px]:h-[72px] flex items-center justify-between">
          <Link href="/" aria-label="SANCTUM — home" onClick={() => setOpen(false)} className="text-foreground">
            <Logo className="h-[26px] w-[26px] min-[985px]:h-[30px] min-[985px]:w-[30px]" />
          </Link>

          <div className="hidden min-[985px]:flex gap-7 items-center">
            {links.slice(0, 5).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-foreground/55 text-[11px] tracking-[0.14em] uppercase font-sans font-light hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/members-hq"
              className="bg-gold/15 border border-gold/40 text-gold px-[16px] py-[8px] rounded-[3px] text-[10px] font-normal tracking-[0.14em] uppercase font-sans transition-all duration-200 hover:bg-gold/25 active:scale-[0.97]"
            >
              Members HQ
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col justify-center gap-[5px] cursor-pointer min-[985px]:hidden w-6 h-6"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <span className={`w-5 h-px bg-foreground/70 block transition-transform origin-center ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`w-5 h-px bg-foreground/70 block transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-px bg-foreground/70 block transition-transform origin-center ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`fixed inset-0 top-[64px] bg-charcoal z-40 flex flex-col pt-6 pb-8 px-8 overflow-y-auto min-[985px]:hidden transition-opacity duration-200 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-foreground/70 text-[13px] tracking-[0.14em] uppercase font-sans font-light py-4 border-b border-white/10 hover:text-foreground transition-colors"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/members-hq"
          onClick={() => setOpen(false)}
          className="mt-6 bg-gold/15 border border-gold/40 text-gold py-[14px] rounded-[3px] text-[11px] tracking-[0.14em] uppercase font-sans font-normal text-center transition-all duration-200 hover:bg-gold/25 active:scale-[0.97]"
        >
          Members HQ
        </Link>
      </div>
    </>
  )
}
