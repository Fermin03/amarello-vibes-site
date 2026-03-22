import { useScrollReveal } from '@/hooks/useScrollReveal';
import HeroCompact from '@/components/HeroCompact';
import heroImg from '@/assets/restaurant-interior.jpg';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const WHATSAPP_URL = 'https://wa.me/message/NEVZXHDMZR2UO1';

const faqs = [
  { q: '¿Con cuánto tiempo debo reservar?', a: 'Para grupos de hasta 6 personas, con 2 horas es suficiente. Para grupos mayores, recomendamos 24 horas de anticipación.' },
  { q: '¿Tienen espacio para sillas de ruedas o carriola?', a: 'Sí, ambos espacios tienen acceso para sillas de ruedas y carriolas.' },
  { q: '¿Puedo llegar sin reservación?', a: '¡Claro que sí! Tenemos espacio para walk-ins, aunque en fin de semana recomendamos reservar para asegurar tu mesa.' },
  { q: '¿Aceptan tarjeta?', a: 'Sí, aceptamos todas las tarjetas de crédito y débito, transferencia y efectivo.' },
];

const locations = [
  { name: 'Amarello Arbide', desc: 'Ambiente cálido e íntimo, perfecto para el desayuno diario.' },
  { name: 'Amarello Campestre', desc: 'Terraza amplia con luz natural, ideal para grupos.' },
];

export default function ReservacionesPage() {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();
  const ref3 = useScrollReveal();

  return (
    <>
      <HeroCompact title="Reserva tu mesa" image={heroImg} />

      {/* Two options */}
      <section ref={ref1} className="section-bone py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {locations.map((loc, i) => (
              <div key={loc.name} className="scroll-reveal bg-secondary rounded-sm p-8 text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <h2 className="font-serif text-2xl font-light mb-3">{loc.name}</h2>
                <p className="font-body text-sm text-muted-foreground mb-2 leading-relaxed">{loc.desc}</p>
                <p className="font-body text-xs text-accent mb-6">8:00am – 10:00pm</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm px-6 py-3 bg-[#25D366] text-background rounded-sm hover:brightness-110 transition-all active:scale-[0.97]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Reservar en {loc.name.split(' ')[1]}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section ref={ref2} className="section-cream py-12">
        <div className="container mx-auto px-4 max-w-2xl text-center scroll-reveal">
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Todas las reservaciones se confirman vía WhatsApp. Tiempo de respuesta: menos de 
            30 minutos en horario de operación. Para grupos de más de 10 personas, contáctanos 
            con al menos 24 horas de anticipación.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section ref={ref3} className="section-bone py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-serif text-3xl font-light text-center mb-2 text-balance leading-[1.15] scroll-reveal">Preguntas frecuentes</h2>
          <div className="gold-separator mb-10 scroll-reveal" />
          <Accordion type="single" collapsible className="scroll-reveal">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                <AccordionTrigger className="font-body text-sm text-left hover:text-accent transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
