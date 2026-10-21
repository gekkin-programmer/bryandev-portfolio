import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Icons } from "@/components/icons";

interface Props {
  desc: string;
  email: string;
  phone: string;
}

export default function ContactSection({ desc, email, phone }: Props) {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">{desc}</p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="size-4" aria-hidden />
            {email}
          </Link>
          <Link
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-accent/50 transition-colors"
          >
            <Phone className="size-4" aria-hidden />
            {phone}
          </Link>
          <Link
            href="https://t.me/+237678128452"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-accent/50 transition-colors"
          >
            <Icons.telegram className="size-4" aria-hidden />
            Telegram
          </Link>
        </div>
      </div>
    </div>
  );
}
