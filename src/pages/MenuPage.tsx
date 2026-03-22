import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import HeroCompact from '@/components/HeroCompact';
import heroImg from '@/assets/hero-home.jpg';

const tabs = ['Desayunos', 'Comidas y Cenas', 'Vinos'] as const;

interface MenuItem {
  name: string;
  desc?: string;
  price: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const desayunos: MenuSection[] = [
  {
    title: 'Jugos',
    items: [
      { name: 'Zanahoria', price: '$59' },
      { name: 'Naranja', price: '$59' },
      { name: 'Naranja y zanahoria', price: '$59' },
      { name: 'Naranja y frutos rojos', price: '$69' },
      { name: 'Verde detox', desc: 'Piña nopal, apio, espinaca, clorofila y jugo de naranja', price: '$69' },
      { name: 'Mimosa', price: '$89' },
    ],
  },
  {
    title: 'Barra de Café y Chocolate',
    items: [
      { name: 'Espresso', price: '$52' },
      { name: 'Americano refil', desc: '8:00am a 1:30pm', price: '$59' },
      { name: 'Chocolate caliente', price: '$62' },
      { name: 'Chocolate caliente Turin', price: '$79' },
      { name: 'Europeo Amarello', price: '$69' },
      { name: 'Capuchino', desc: 'Leche entera, deslactosada o almendra +$20', price: '$69' },
      { name: 'Capuchino caramelo o vainilla', price: '$79' },
      { name: 'Latte', price: '$69' },
      { name: 'Latte dulce', desc: 'Leche de almendra y miel de agave', price: '$79' },
      { name: 'Latte de caramelo, vainilla o lavanda vainilla', price: '$79' },
      { name: 'Chocolate helado', desc: 'Chocolate caliente con helado de vainilla', price: '$89' },
      { name: 'Affogato de café', desc: 'Helado de vainilla, espresso y licor de café', price: '$98' },
    ],
  },
  {
    title: 'Pan Dulce',
    items: [
      { name: 'Mini concha de vainilla o chocolate', price: '$25' },
      { name: 'Panqué de plátano', price: '$45' },
      { name: 'Cartera de ate de membrillo', price: '$49' },
      { name: 'Trenza de maple', price: '$49' },
      { name: 'Rol de canela', price: '$49' },
      { name: 'Chocolatin', price: '$52' },
      { name: 'Guabarol', price: '$55' },
      { name: 'Croissant de chocolate', price: '$59' },
      { name: 'Croissant de pistache', price: '$76' },
    ],
  },
  {
    title: 'Lo Dulce',
    items: [
      { name: 'Plato de fruta con yogurt natural y granola', price: '$95' },
      { name: 'Pan francés tradicional', price: '$95' },
      { name: 'Waffles', price: '$119' },
      { name: 'Copa de yogurt griego y fresa', desc: 'Con granola, coco tostado y miel', price: '$125' },
    ],
  },
  {
    title: 'Antojitos Mexicanos',
    items: [
      { name: 'Sope con frijoles refritos y guiso a elegir', desc: 'Chicharrón prensado, pollito en salsa verde, birria de res', price: '$65' },
      { name: 'Quesadillas de prensado', desc: 'Dos quesadillas con chicharrón prensado en tortilla de maíz casera', price: '$98' },
      { name: 'Tacos de birria', desc: 'Dos taquitos en tortilla de maíz casera', price: '$115' },
      { name: 'Molletes sencillos en pan artesanal', price: '$115' },
      { name: 'Molletes con chilaquiles', desc: 'Salsa verde, roja o tres chiles', price: '$149' },
      { name: 'Molletes con chorizo', price: '$165' },
      { name: 'Enchiladas suizas de pollo o queso panela', desc: '3 piezas', price: '$159' },
      { name: 'Enfrijoladas de pollo o queso panela', desc: 'En salsa de frijol con chipotle, 3 piezas', price: '$159' },
      { name: 'Huarache Amarello', desc: 'Con frijoles, chicharrón prensado y chilaquiles', price: '$169' },
      { name: 'Almuerzo Amarello', desc: 'Chilaquiles, frijoles y 2 guisos a elegir', price: '$219' },
    ],
  },
  {
    title: 'Lo Ligero',
    items: [
      { name: 'Toast de aguacate', desc: 'Con queso crema, arándanos, albahaca y nuez', price: '$125' },
      { name: 'Toast de salmón ahumado', desc: 'Con queso crema, pepino y alcaparras', price: '$205' },
      { name: 'Omelette light de claras', desc: 'Con queso panela y nopales', price: '$139' },
      { name: 'Omelette pesto', desc: 'Con jamón de pavo y queso mozzarella', price: '$165' },
    ],
  },
  {
    title: 'De la Granja',
    items: [
      { name: 'Huevos al gusto', desc: 'Estrellados, mexicana, jamón, rancheros o divorciados con frijoles y papas', price: '$99' },
      { name: 'Huevos tirados con frijoles y chilaquiles', price: '$125' },
      { name: 'Huevos motuleños', desc: 'Sobre tortilla de maíz, jamón y queso panela', price: '$135' },
      { name: 'Huevos salvajes', desc: 'Sobre jamón y sincronizada de frijoles', price: '$155' },
      { name: 'Huevos con machaca', desc: 'Cebolla, pimientos y jitomate', price: '$179' },
    ],
  },
  {
    title: 'Nuestros Chilaquiles',
    items: [
      { name: 'Chilaquiles al gusto + proteína', desc: 'Verde, roja o tres chiles', price: 'desde $115' },
      { name: 'Cazuelita de prensado', desc: 'Chilaquiles tres chiles con chicharrón prensado', price: '$149' },
      { name: 'Chilaquiles bandera', desc: 'Salsa verde y tres chiles con pollo', price: '$169' },
      { name: 'Chilaquiles Amarello', desc: 'Salsa verde o roja, chistorra y huevo estrellado', price: '$179' },
      { name: 'Cazuelita de arrachera', price: '$185' },
      { name: 'Cazuelita de milanesa', price: '$215' },
    ],
  },
  {
    title: 'Especialidades',
    items: [
      { name: 'Chile relleno de chilaquiles', desc: 'Sobre espejo de frijol', price: '$142' },
      { name: 'Huevos Amarello', desc: 'Estrellados con chicharrón prensado, salsa tres chiles y queso gratinado', price: '$160' },
      { name: 'Chile relleno de prensado con huevo frito', price: '$169' },
      { name: 'Croissant mañanero', desc: 'Con huevo, jamón, queso y tocino', price: '$179' },
      { name: 'Omelette de machaca', desc: 'Con pico de gallo, mozzarella y tortilla crispy', price: '$179' },
      { name: 'Desayuno Amarello', desc: 'Sabana de res con chilaquiles, huevito, frijoles y papas', price: '$205' },
    ],
  },
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('Desayunos');
  const ref = useScrollReveal();

  return (
    <>
      <HeroCompact title="Nuestro Menú" subtitle="Desayunos · Comidas · Cenas · Café · Vinos" image={heroImg} />

      {/* Sticky tabs */}
      <div className="sticky top-16 md:top-20 z-40 bg-secondary/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 flex gap-0 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-body text-sm whitespace-nowrap px-6 py-4 transition-colors duration-200 border-b-2 ${
                activeTab === tab
                  ? 'border-accent text-accent'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <section ref={ref} className="section-bone py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {activeTab === 'Desayunos' && (
            <div>
              <p className="font-body text-xs text-muted-foreground text-center mb-12 uppercase tracking-widest">
                Servicio de desayunos: 8:00am – 1:30pm
              </p>
              {desayunos.map((section) => (
                <div key={section.title} className="mb-12 scroll-reveal">
                  <h3 className="font-serif text-2xl text-accent font-light mb-1">{section.title}</h3>
                  <div className="w-full h-px bg-accent/20 mb-6" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {section.items.map((item) => (
                      <div key={item.name} className="flex justify-between gap-4 py-1">
                        <div className="flex-1 min-w-0">
                          <span className="font-body text-sm font-medium">{item.name}</span>
                          {item.desc && (
                            <span className="font-body text-xs text-muted-foreground block leading-relaxed">{item.desc}</span>
                          )}
                        </div>
                        <span className="menu-item-price text-sm shrink-0">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Comidas y Cenas' && (
            <div className="text-center py-20 scroll-reveal">
              <h3 className="font-serif text-2xl font-light mb-4">Próximamente</h3>
              <p className="font-body text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Próximamente el menú de comidas y cenas. Visítanos para conocer nuestra propuesta del día. ¡Te sorprenderás!
              </p>
            </div>
          )}

          {activeTab === 'Vinos' && (
            <div className="text-center py-20 scroll-reveal">
              <h3 className="font-serif text-2xl font-light mb-4">Nuestra Carta de Vinos</h3>
              <p className="font-body text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Pregunta a tu mesero por las opciones disponibles hoy o contáctanos por WhatsApp.
              </p>
              <a
                href="https://wa.me/message/NEVZXHDMZR2UO1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex font-body text-sm px-6 py-2 bg-accent text-accent-foreground rounded-sm mt-6 hover:brightness-110 transition-all active:scale-[0.97]"
              >
                Consultar carta de vinos
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
