import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/nav';
import { profile } from '../data/profile';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-xl">
      <nav
        className="container-page flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-sm text-muted transition hover:text-text"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.cv.pdf}
          download
          className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg transition hover:bg-accent-strong lg:inline-block"
        >
          Download CV
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="rounded-lg p-2 text-text lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-bg/95 lg:hidden">
          <ul className="container-page flex flex-col py-4">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={close}
                  className="block py-3 text-muted transition hover:text-text"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={profile.cv.pdf}
                download
                className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
