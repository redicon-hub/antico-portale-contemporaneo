import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/** Reveal editoriale progressivo. Disattivato da prefers-reduced-motion via CSS. */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Segnaposto editoriale per le fotografie del nuovo shooting. */
export function ShootPlaceholder({
  field,
  label,
  className = "",
  ratio = "aspect-[3/4]",
}: {
  field: string;
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden border border-border bg-muted p-5 ${ratio} ${className}`}
    >
      <span className="eyebrow text-muted-foreground">{field}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, color-mix(in oklab, var(--stone) 65%, transparent) 0 1px, transparent 1px 14px)",
        }}
      />
      <span className="relative max-w-[22ch] text-sm font-light leading-snug text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function Caption({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 text-[0.78rem] font-light tracking-wide text-muted-foreground">{children}</p>
  );
}

/** Immagine editoriale ad altezza uniforme con titolo in sovraimpressione. */
export function PlateFrame({
  src,
  alt,
  title,
  ratio = "aspect-[4/5]",
  position = "center",
  className = "",
}: {
  src: string;
  alt: string;
  title: string;
  ratio?: string;
  position?: string;
  className?: string;
}) {
  return (
    <figure className={`group relative overflow-hidden ${ratio} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: position }}
        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-ink/70 via-ink/25 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100"
      />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-6">
        <span className="block h-px w-8 bg-ivory/60 transition-all duration-700 group-hover:w-14" />
        <span className="mt-3 block font-display text-[1.05rem] font-light leading-snug tracking-wide text-ivory drop-shadow-[0_1px_12px_color-mix(in_oklab,var(--ink)_60%,transparent)] md:text-[1.2rem]">
          {title}
        </span>
      </figcaption>
    </figure>
  );
}
