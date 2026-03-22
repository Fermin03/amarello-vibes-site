import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronDown, Clock, MapPin, UtensilsCrossed, Smartphone } from 'lucide-react';

import heroImg from '@/assets/hero-home.jpg';
import interiorImg from '@/assets/restaurant-interior.jpg';
import chilaquilesImg from '@/assets/food-chilaquiles.jpg';
import huevosImg from '@/assets/food-huevos.jpg';
import toastImg from '@/assets/food-toast.jpg';
import croissantImg from '@/assets/food-croissant.jpg';
import affogatoImg from '@/assets/food-affogato.jpg';
import desayunoImg from '@/assets/food-desayuno.jpg';
import arbideImg from '@/assets/space-arbide.jpg';
import campestreImg from '@/assets/space-campestre.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

const WHATSAPP_URL = 'https://wa.me/message/NEVZXHDMZR2UO1';

const destacados = [
  { name: 'Chilaquiles Amarello', price: '$179', desc: 'Chilaquiles en salsa verde o roja, chistorra y huevo estrellado. El favorito de la casa.', img: chilaquilesImg },
  { name: 'Huevos Amarello', price: '$160', desc: 'Huevos estrellados con chicharrón prensado, salsa de tres chiles, queso asadero y crema.', img: huevosImg },
  { name: 'Toast de aguacate', price: '$125', desc: 'Pan artesanal, aguacate, queso crema, arándanos y nuez. El toque fresco que necesitas.', img: toastImg },
  { name: 'Croissant mañanero', price: '$179', desc: 'Croissant con huevo revuelto, jamón, queso y tocino. El desayuno perfecto.', img: croissantImg },
  { name: 'Affogato de café', price: '$98', desc: 'Helado de vainilla, espresso y licor de café. El postre que siempre termina la mesa.', img: affogatoImg },
  { name: 'Desayuno Amarello', price: '$205', desc: 'Sabana de res con chilaquiles, huevito, frijoles y papas. La experiencia completa.', img: desayunoImg },
];

export default function Index() {
  const s1 = useScrollReveal();
  const s2 = useScrollReveal();
  const s3 = useScrollReveal();
  const s4 = useScrollReveal();
  const s5 = useScrollReveal();
  const s6 = useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Amarello Restaurante" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/45" />
        <div className="relative text-center px-4 flex flex-col items-center gap-6">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground tracking-widest-xl leading-[1]">
            —amarello—
          </h1>
          <p className="font-serif italic text-lg md:text-xl text-primary-foreground/80 max-w-md font-light">
            Cocina mexicana con alma. Desayunos, comidas y cenas en León, Gto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              to="/menu"
              className="font-body text-sm px-8 py-3 border border-primary-foreground/60 text-primary-foreground rounded-sm hover:bg-primary-foreground/10 transition-all duration-200 active:scale-[0.97]"
            >
              Ver Menú
            </Link>
            <Link
              to="/reservaciones"
              className="font-body text-sm px-8 py-3 bg-accent text-accent-foreground rounded-sm hover:brightness-110 transition-all duration-200 active:scale-[0.97]"
            >
              Reservar Mesa
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-scroll-bounce">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Info strip */}
      <section ref={s1} className="section-cream py-8 md:py-10">
        <div className="container mx-auto px-4 scroll-reveal">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Clock size={20} className="text-accent" />
              <p className="font-body text-sm">Lun – Dom 8:00am – 10:00pm</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin size={20} className="text-accent" />
              <p className="font-body text-sm">Dos sucursales: Arbide y Campestre, León Gto.</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <UtensilsCrossed size={20} className="text-accent" />
              <p className="font-body text-sm">Desayunos desde $52 | Comidas desde $99</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Smartphone size={20} className="text-accent" />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-body text-sm px-4 py-2 bg-[#25D366] text-background rounded-sm hover:brightness-110 transition-all active:scale-[0.97]">
                Reserva por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra historia */}
      <section ref={s2} className="section-bone py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="scroll-reveal">
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-2 text-balance leading-[1.15]">Más que un restaurante</h2>
              <div className="gold-separator !mx-0 mb-8" />
              <p className="font-body text-base leading-relaxed text-muted-foreground text-pretty max-w-lg">
                En Amarello creemos que la mejor comida es la que se comparte. Desde nuestros 
                desayunos madrugadores hasta las cenas que no quieres que terminen, cada platillo lleva 
                el sabor de nuestra cocina mexicana hecha con ingredientes de calidad y mucho cariño. 
                Dos espacios únicos en León, el mismo compromiso con tu experiencia.
              </p>
            </div>
            <div className="scroll-reveal img-overlay rounded-sm overflow-hidden">
              <img src={interiorImg} alt="Interior de Amarello" className="w-full aspect-[3/2] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Destacados del menú */}
      <section ref={s3} className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-primary-foreground mb-2 text-balance leading-[1.15]">Lo que más nos piden</h2>
            <div className="gold-separator mb-0" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destacados.map((item, i) => (
              <div
                key={item.name}
                className="scroll-reveal group relative rounded-sm overflow-hidden bg-primary-foreground/5 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="img-overlay aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-lg text-primary-foreground font-normal">{item.name}</h3>
                    <span className="menu-item-price text-sm">{item.price}</span>
                  </div>
                  <p className="font-body text-xs text-primary-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
                <div className="absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to="/menu"
                    className="font-body text-sm px-6 py-2 border border-primary-foreground/60 text-primary-foreground rounded-sm hover:bg-primary-foreground/10 transition-colors active:scale-[0.97]"
                  >
                    Ver menú completo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros espacios */}
      <section ref={s4} className="section-cream py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-2 text-balance leading-[1.15]">Dos espacios, una experiencia</h2>
            <div className="gold-separator" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Amarello Arbide', desc: 'Nuestro espacio de siempre. Ambiente acogedor, ideal para el desayuno diario o el plan de fin de semana con familia y amigos.', img: arbideImg, map: 'https://maps.app.goo.gl/b2ggdHTbEw9j4Vk6A' },
              { name: 'Amarello Campestre', desc: 'Terraza amplia, luz natural y el ambiente perfecto para tomarte el tiempo que mereces. Ideal para grupos y eventos.', img: campestreImg, map: 'https://maps.app.goo.gl/z7v2zNEPbMpFohwi6' },
            ].map((space, i) => (
              <div key={space.name} className="scroll-reveal rounded-sm overflow-hidden bg-background" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="img-overlay aspect-video overflow-hidden">
                  <img src={space.img} alt={space.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-light mb-3">{space.name}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{space.desc}</p>
                  <a
                    href={space.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-accent hover:underline transition-colors"
                  >
                    ¿Cómo llegar? →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos */}
      <section ref={s5} className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-4 text-center scroll-reveal max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-primary-foreground mb-2 text-balance leading-[1.15]">¿Tienes un evento especial?</h2>
          <div className="gold-separator mb-6" />
          <p className="font-body text-base text-primary-foreground/70 mb-8 leading-relaxed">
            Cumpleaños, reuniones corporativas, despedidas o cualquier ocasión que merezca 
            una mesa especial. En Amarello nos encargamos de que todo salga perfecto.
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

      {/* Galería */}
      <section ref={s6} className="section-bone py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-2 text-balance leading-[1.15]">En Amarello</h2>
            <p className="font-body text-sm text-muted-foreground">
              Síguenos en Instagram{' '}
              <a href="https://instagram.com/amarellorestaurante" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                @amarellorestaurante
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 scroll-reveal">
            {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
              <div key={i} className="img-overlay aspect-square overflow-hidden rounded-sm group cursor-pointer" style={{ transitionDelay: `${i * 80}ms` }}>
                <img
                  src={img}
                  alt="Galería Amarello"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
