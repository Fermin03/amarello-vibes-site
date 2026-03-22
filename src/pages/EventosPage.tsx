import { useScrollReveal } from '@/hooks/useScrollReveal';
import HeroCompact from '@/components/HeroCompact';
import { Cake, Briefcase, HandMetal, Heart, Check } from 'lucide-react';
import eventosImg from '@/assets/eventos-hero.jpg';

const WHATSAPP_URL = 'https://wa.me/message/NEVZXHDMZR2UO1';

const eventTypes = [
  { icon: Cake, label: 'Cumpleaños' },
  { icon: Briefcase, label: 'Reuniones corporativas' },
  { icon: HandMetal, label: 'Despedidas' },
  { icon: Heart, label: 'Celebraciones especiales' },
];

const includes = [
  'Menú especial para grupos',
  'Decoración básica incluida',
  'Espacio reservado exclusivamente para tu grupo',
  'Carta de vinos disponible',
  'Atención personalizada de principio a fin',
];

export default function EventosPage() {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();
  const ref3 = useScrollReveal();

  return (
    <>
      <HeroCompact title="Haz tu próxima celebración en Amarello" image={eventosImg} />

      {/* Event types */}
      <section ref={ref1} className="section-bone py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 scroll-reveal">
            {eventTypes.map((et, i) => (
              <div key={et.label} className="flex flex-col items-center gap-3 text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                  <et.icon size={28} className="text-accent" />
                </div>
                <span className="font-body text-sm">{et.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section ref={ref2} className="section-cream py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="scroll-reveal">
            <h2 className="font-serif text-3xl font-light text-center mb-2 text-balance leading-[1.15]">¿Qué incluye?</h2>
            <div className="gold-separator mb-10" />
            <ul className="space-y-4">
              {includes.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check size={18} className="text-accent shrink-0" />
                  <span className="font-body text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-serif italic text-lg text-center mt-12 text-muted-foreground">
              "Ya más de 200 eventos celebrados en Amarello. Cada uno, único."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ref3} className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-xl scroll-reveal">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-primary-foreground mb-2 text-balance leading-[1.15]">¿Listo para cotizar tu evento?</h2>
          <div className="gold-separator mb-6" />
          <p className="font-body text-base text-primary-foreground/70 mb-8 leading-relaxed">
            Cuéntanos la fecha, el número de personas y la ocasión. Nosotros armamos la propuesta perfecta para ti.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex font-body text-sm px-8 py-3 bg-accent text-accent-foreground rounded-sm hover:brightness-110 transition-all duration-200 active:scale-[0.97]"
          >
            Cotizar mi evento por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
