import type { Dict } from "@/data/dictionaries";

export default function Footer({ t }: { t: Dict }) {
  return (
    <footer className="flex items-center justify-center text-xs text-muted-foreground border-t border-border pt-6 mt-10">
      <p>{t.footer.rights}</p>
    </footer>
  );
}
