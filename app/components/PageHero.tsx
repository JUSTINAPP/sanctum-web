export default function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <section className="bg-charcoal border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
        {eyebrow && (
          <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-sans mb-4">{eyebrow}</p>
        )}
        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-6">{title}</h1>
        {children && <div className="text-foreground/60 text-[15px] leading-relaxed space-y-4">{children}</div>}
      </div>
    </section>
  )
}
