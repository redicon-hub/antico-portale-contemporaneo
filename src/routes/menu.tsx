import { createFileRoute, redirect } from "@tanstack/react-router";

/** Vecchio URL: redirect permanente al nuovo slug SEO. */
export const Route = createFileRoute("/menu")({
  beforeLoad: () => {
    throw redirect({ to: "/menu-ristorante-gourmet-arezzo", statusCode: 301 });
  },
  component: () => null,
});
