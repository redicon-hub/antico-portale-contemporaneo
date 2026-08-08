import { createFileRoute } from "@tanstack/react-router";
import { LangProvider } from "@/lib/i18n";
import { LegalPage } from "@/components/site/LegalPage";
import { cookieDoc } from "@/lib/legal-content";

const title = "Cookie policy — Antico Portale";
const description =
  "Cookie policy di Antico Portale: cookie tecnici utilizzati, servizi di terze parti e come gestire le preferenze dal browser.";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://www.anticoportalevaldambra.com/cookie-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.anticoportalevaldambra.com/cookie-policy" }],
  }),
  component: CookieRoute,
});

function CookieRoute() {
  return (
    <LangProvider>
      <LegalPage docs={cookieDoc} />
    </LangProvider>
  );
}
