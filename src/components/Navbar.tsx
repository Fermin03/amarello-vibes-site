import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/menu', label: 'Menú' },
  { to: '/espacios', label: 'Espacios' },
  { to: '/eventos', label: 'Eventos' },
  { to: '/reservaciones', label: 'Reservaciones' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="font-serif text-primary-foreground text-xl md:text-2xl tracking-widest-xl font-light">
          —amarello—
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body text-sm tracking-wide transition-colors duration-200 ${
                location.pathname === l.to
                  ? 'text-accent'
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          to="/reservaciones"
          className="hidden lg:inline-flex font-body text-sm px-5 py-2 bg-accent text-accent-foreground rounded-sm hover:brightness-110 transition-all duration-200 active:scale-[0.97]"
        >
          Reservar
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-72 bg-primary transform transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-8 gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`font-body text-base tracking-wide transition-colors ${
                location.pathname === l.to
                  ? 'text-accent'
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/reservaciones"
            onClick={() => setOpen(false)}
            className="font-body text-sm px-5 py-3 bg-accent text-accent-foreground rounded-sm text-center mt-4 active:scale-[0.97]"
          >
            Reservar
          </Link>
        </div>
      </div>

      {open && (
        <div
          className="lg:hidden fixed inset-0 top-16 bg-foreground/30 z-[-1]"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}
