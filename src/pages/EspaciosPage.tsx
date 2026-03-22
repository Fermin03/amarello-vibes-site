import { useScrollReveal } from '@/hooks/useScrollReveal';
import HeroCompact from '@/components/HeroCompact';
import heroImg from '@/assets/restaurant-interior.jpg';
import arbideImg from '@/assets/space-arbide.jpg';
import campestreImg from '@/assets/space-campestre.jpg';

const WHATSAPP_URL = 'https://wa.me/message/NEVZXHDMZR2UO1';

const spaces = [
  {
    name: 'Amarello Arbide',
    desc: 'Nuestro espacio original. Ambiente cálido e íntimo, perfecto para el desayuno de cada día, la reunión con amigos o ese brunch que llevas semanas queriendo disfrutar.',
    hours: 'Lun – Dom: 8:00am – 10:00pm',
    img: arbideImg,
    map: 'https://maps.app.goo.gl/b2ggdHTbEw9j4Vk6A',
  },
  {
    name: 'Amarello Campestre',
    desc: 'Amplia terraza, luz natural y el ambiente ideal para los planes grandes. Perfecto para grupos, eventos corporativos o simplemente tomarte el tiempo que mereces.',
    hours: 'Lun – Dom: 8:00am – 10:00pm',
    img: campestreImg,
    map: 'https://maps.app.goo.gl/z7v2zNEPbMpFohwi6',
  },
];

export default function EspaciosPage() {
  const ref = useScrollReveal();
  const mapRef = useScrollReveal();

  return (
    <>
      <HeroCompact title="Dos espacios únicos en León" image={heroImg} />

      <section ref={ref} className="section-bone py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {spaces.map((s, i) => (
              <div key={s.name} className="scroll-reveal bg-secondary rounded-sm overflow-hidden" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="img-overlay aspect-video overflow-hidden">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h2 className="font-serif text-3xl font-light mb-3">{s.name}</h2>
                  <p className="font-body text-sm text-muted-foreground mb-2 leading-relaxed">{s.desc}</p>
                  <p className="font-body text-xs text-accent mb-6">{s.hours}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={s.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm px-6 py-2.5 bg-primary text-primary-foreground rounded-sm text-center hover:brightness-125 transition-all active:scale-[0.97]"
                    >
                      Cómo llegar
                    </a>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm px-6 py-2.5 border border-primary text-primary rounded-sm text-center hover:bg-primary/5 transition-all active:scale-[0.97]"
                    >
                      Reservar en {s.name.split(' ')[1]}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={mapRef} className="scroll-reveal">
        <iframe
          title="Mapa de sucursales"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119348.45!2d-101.75!3d21.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf99b0c2a839%3A0x71a0c42d5a7e0f9!2sLe%C3%B3n%2C%20Gto.!5e0!3m2!1ses!2smx!4v1"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </section>
    </>
  );
}
