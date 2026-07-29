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
