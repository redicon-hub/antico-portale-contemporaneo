// Dati di contatto ufficiali — unica fonte di verità per header, footer, prenotazioni e dati strutturati.

export const contact = {
  name: "Antico Portale",
  street: "Via della Bottega 37/A",
  locality: "Capannole",
  city: "Bucine",
  province: "AR",
  postalCode: "52021",
  region: "Toscana",
  country: "IT",
  get addressLine() {
    return `${this.street}, ${this.locality} — ${this.postalCode} ${this.city} (${this.province})`;
  },
  phone: "+39 055 995 5514",
  phoneHref: "tel:+390559955514",
  whatsapp: "+39 393 632 8095",
  whatsappHref: "https://wa.me/393936328095",
  email: "",
  google: {
    profile: "https://share.google/Fz6VLFcLhrzBH1Kfp",
    reviews: "https://share.google/Fz6VLFcLhrzBH1Kfp",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Antico+Portale+Via+della+Bottega+37%2FA+Capannole+52021+Bucine+AR",
  },
} as const;
