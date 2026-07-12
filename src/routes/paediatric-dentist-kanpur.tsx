import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/paediatric-dentist-kanpur")({
  beforeLoad: () => {
    throw redirect({ to: "/paediatric-dentistry" });
  },
});
