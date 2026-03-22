interface HeroCompactProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function HeroCompact({ title, subtitle, image }: HeroCompactProps) {
  return (
    <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/50" />
      <div className="relative text-center px-4">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground tracking-wide text-balance leading-[1.1]">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-sm md:text-base text-primary-foreground/70 mt-4 max-w-lg mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
