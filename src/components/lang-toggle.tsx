"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { swapLangInPath } from "@/lib/i18n";
import type { Lang } from "@/data/dictionaries/config";
import { cn } from "@/lib/utils";

export function LangToggle({ lang, label, className }: { lang: Lang; label: string; className?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const target: Lang = lang === "en" ? "fr" : "en";

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      aria-label={label}
      className={cn(className)}
      onClick={() => router.push(swapLangInPath(pathname, target))}
    >
      <span className="text-xs font-bold uppercase">{target}</span>
    </Button>
  );
}
