import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { LangToggle } from "@/components/lang-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Dict, Lang } from "@/data/dictionaries";
import { Icons } from "@/components/icons";
import { HomeIcon, UserIcon, BriefcaseIcon, CodeIcon, FolderIcon, MailIcon } from "lucide-react";

export default function Navbar({ lang, t }: { lang: Lang; t: Dict }) {
  const navItems = [
    { href: `/${lang}#home`, icon: HomeIcon, label: t.nav.home },
    { href: `/${lang}#about`, icon: UserIcon, label: t.nav.about },
    { href: `/${lang}#work`, icon: BriefcaseIcon, label: t.nav.work },
    { href: `/${lang}#skills`, icon: CodeIcon, label: t.nav.skills },
    { href: `/${lang}#projects`, icon: FolderIcon, label: t.nav.projects },
    { href: `/${lang}#contact`, icon: MailIcon, label: t.nav.contact },
  ];

  return (
    <div className="hidden md:block pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {navItems.map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              <a href={item.href}>
                <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                  <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                </DockIcon>
              </a>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              sideOffset={8}
              className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              <p>{item.label}</p>
              <TooltipArrow className="fill-primary" />
            </TooltipContent>
          </Tooltip>
        ))}

        <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />

        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://t.me/+237678128452"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                <Icons.telegram className="size-full rounded-sm overflow-hidden object-contain" />
              </DockIcon>
            </a>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>Telegram</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />

        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
              <LangToggle lang={lang} label={t.language.switchTo} />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>{t.language.switchTo}</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>Theme</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </div>
  );
}
