import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getDictionary, LANGUAGES, type Lang } from "@/data/dictionaries";
import WorkSection from "@/components/section/work-section";
import ProjectsSection from "@/components/section/projects-section";
import WhySection from "@/components/section/why-section";
import TestimonialsSection from "@/components/section/testimonials-section";
import ContactSection from "@/components/section/contact-section";
import Footer from "@/components/footer";

const BLUR_FADE_DELAY = 0.04;

export function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <>
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="home">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <p className="text-sm font-medium text-muted-foreground">{t.hero.greeting}</p>
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`${t.hero.namePrefix}${t.hero.name}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={t.hero.role}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={t.hero.name} src="/hero-portrait.png" className="object-cover" />
                <AvatarFallback>{t.hero.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
            <h2 className="text-xl font-bold">{t.about.title}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4.75}>
            <p className="text-pretty font-sans leading-relaxed text-muted-foreground">
              {t.about.desc}
            </p>
          </BlurFade>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{t.experience.title}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection jobs={t.experience.jobs} />
          </BlurFade>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">
              {t.skills.titlePrefix}
              <span className="text-primary">{t.skills.titleAccent}</span>
            </h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {t.skills.items.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <Badge
                  variant="outline"
                  className="border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 text-sm font-medium"
                >
                  {skill}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <ProjectsSection
            titlePrefix={t.projects.titlePrefix}
            titleAccent={t.projects.titleAccent}
            description={t.projects.description}
            items={t.projects.items}
          />
        </BlurFade>
      </section>

      <section id="why">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <WhySection
            titlePrefix={t.whyme.titlePrefix}
            titleAccent={t.whyme.titleAccent}
            desc={t.whyme.desc}
            stats={t.whyme.stats}
          />
        </BlurFade>
      </section>

      <section id="testimonials">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <TestimonialsSection
            titlePrefix={t.testimonials.titlePrefix}
            titleAccent={t.testimonials.titleAccent}
            desc={t.testimonials.desc}
            items={t.testimonials.items}
          />
        </BlurFade>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <ContactSection
            desc={t.contact.desc}
            email={t.footer.email}
            phone={t.footer.phone}
          />
        </BlurFade>
      </section>
    </main>
    <Footer t={t} />
    </>
  );
}
