import { useState, type FormEvent } from "react";
import { z } from "zod";
import { useLang } from "@/lib/i18n";
import { contact } from "@/lib/contact";
import { cateringCopy } from "@/lib/catering-content";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(6).max(30).regex(/^[+0-9 ()-]+$/),
  date: z.string().max(20),
  guests: z.string().trim().max(5).regex(/^\d*$/),
  type: z.string().min(1).max(40),
  location: z.string().trim().max(150),
  message: z.string().trim().max(1000),
});

const field =
  "w-full border-b border-ivory/30 bg-transparent py-3 text-ivory placeholder:text-ivory/50 focus:border-copper focus:outline-none";

export function CateringForm() {
  const { lang } = useLang();
  const f = cateringCopy[lang].form;
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) return setError(f.required);
    setError("");
    const d = parsed.data;
    const text = [
      lang === "it" ? "Richiesta catering — Antico Portale" : "Catering request — Antico Portale",
      `${f.name}: ${d.name}`,
      `${f.phone}: ${d.phone}`,
      `${f.type}: ${d.type}`,
      d.date && `${f.date}: ${d.date}`,
      d.guests && `${f.guests}: ${d.guests}`,
      d.location && `${f.location}: ${d.location}`,
      d.message && `${f.message}: ${d.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`${contact.whatsappHref}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} noValidate className="mt-14 grid gap-6 border border-ivory/20 bg-ink/40 p-6 text-left backdrop-blur md:grid-cols-2 md:p-10">
      <input name="name" placeholder={`${f.name} *`} maxLength={100} className={field} />
      <input name="phone" type="tel" placeholder={`${f.phone} *`} maxLength={30} className={field} />
      <select name="type" defaultValue="" className={`${field} [&>option]:text-ink`}>
        <option value="" disabled>{`${f.type} *`}</option>
        {f.types.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <input name="date" type="date" aria-label={f.date} className={`${field} [color-scheme:dark]`} />
      <input name="guests" inputMode="numeric" placeholder={f.guests} maxLength={5} className={field} />
      <input name="location" placeholder={f.location} maxLength={150} className={field} />
      <textarea name="message" placeholder={f.message} maxLength={1000} rows={3} className={`${field} md:col-span-2`} />
      <div className="flex flex-col items-start gap-3 md:col-span-2">
        {error && <p role="alert" className="text-sm text-copper">{error}</p>}
        <button type="submit" className="border border-copper bg-copper px-8 py-4 text-[0.8rem] tracking-[0.14em] text-ink transition-colors duration-500 hover:bg-transparent hover:text-copper">
          {f.submit}
        </button>
        <p className="text-xs text-ivory/60">{f.note}</p>
      </div>
    </form>
  );
}
