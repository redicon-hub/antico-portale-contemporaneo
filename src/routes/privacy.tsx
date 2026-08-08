import { createFileRoute } from "@tanstack/react-router";
import { LangProvider } from "@/lib/i18n";
import { LegalPage } from "@/components/site/LegalPage";
import { privacyDoc } from "@/lib/legal-content";

const title = "Privacy policy — Antico Portale";
const description =
  "Informativa privacy di Antico Portale: quali dati trattiamo per prenotazioni e navigazione, basi giuridiche, conservazione e diritti degli interessati.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://www.anticoportalevaldambra.com/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.anticoportalevaldambra.com/privacy" }],
  }),
  component: PrivacyRoute,
});

function PrivacyRoute() {
  return (
    <LangProvider>
      <LegalPage docs={privacyDoc} />
    </LangProvider>
  );
}
