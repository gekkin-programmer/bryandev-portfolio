import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Icons } from "@/components/icons";

interface ProjectItem {
  tag: string;
  name: string;
  image: string;
  url: string;
}

interface Props {
  titlePrefix: string;
  titleAccent: string;
  description: string;
  items: ProjectItem[];
}

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection({ titlePrefix, titleAccent, description, items }: Props) {
  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-primary-foreground text-sm font-medium">
              {titlePrefix}
              {titleAccent}
            </span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-xl">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
        {items.map((project, id) => (
          <BlurFade key={project.name} delay={BLUR_FADE_DELAY * 12 + id * 0.05} className="h-full">
            <ProjectCard
              href={project.url}
              title={project.name}
              description={project.tag}
              image={project.image}
              links={[
                { type: "Website", href: project.url, icon: <Icons.globe className="size-3" /> },
              ]}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
