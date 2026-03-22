import { useScrollReveal } from '@/hooks/useScrollReveal';
import HeroCompact from '@/components/HeroCompact';
import heroImg from '@/assets/space-campestre.jpg';

const WHATSAPP_URL = 'https://wa.me/message/NEVZXHDMZR2UO1';

export default function ContactoPage() {
  const ref = useScrollReveal();

  return (
    <>
      <HeroCompact title="Estamos para ti" image={heroImg} />

      <section ref={ref} className="section-bone py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact info */}
            <div className="scroll-reveal">
              <h2 className="font-serif text-3xl font-light mb-2 leading-[1.15]">Datos de contacto</h2>
              <div className="gold-separator !mx-0 mb-8" />
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-body text-xs uppercase tracking-widest text-accent mb-2">WhatsApp</h3>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-sm px-5 py-2.5 bg-[#25D366] text-background rounded-sm hover:brightness-110 transition-all active:scale-[0.97]"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Escríbenos por WhatsApp
                  </a>
                </div>

                <div>
                  <h3 className="font-body text-xs uppercase tracking-widest text-accent mb-2">Instagram</h3>
                  <a
                    href="https://instagram.com/amarellorestaurante"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm hover:text-accent transition-colors"
                  >
                    @amarellorestaurante
                  </a>
                </div>

                <div>
                  <h3 className="font-body text-xs uppercase tracking-widest text-accent mb-2">Horario</h3>
                  <p className="font-body text-sm">Lun – Dom: 8:00am – 10:00pm</p>
                </div>

                <div>
                  <h3 className="font-body text-xs uppercase tracking-widest text-accent mb-2">Eventos</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Contáctanos y te armamos una propuesta en menos de 24 horas.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
              <h2 className="font-serif text-3xl font-light mb-2 leading-[1.15]">Envíanos un mensaje</h2>
              <div className="gold-separator !mx-0 mb-8" />
              
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-muted-foreground block mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full font-body text-sm px-4 py-3 bg-secondary border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-accent transition-shadow"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-muted-foreground block mb-2">Teléfono</label>
                  <input
                    type="tel"
                    className="w-full font-body text-sm px-4 py-3 bg-secondary border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-accent transition-shadow"
                    placeholder="Tu teléfono"
                  />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-widest text-muted-foreground block mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full font-body text-sm px-4 py-3 bg-secondary border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-accent transition-shadow resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <button
                  type="submit"
                  className="font-body text-sm px-8 py-3 bg-primary text-primary-foreground rounded-sm hover:brightness-125 transition-all duration-200 active:scale-[0.97]"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
