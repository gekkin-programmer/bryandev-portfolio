interface Stat {
  value: string;
  label: string;
}

interface Props {
  titlePrefix: string;
  titleAccent: string;
  desc: string;
  stats: Stat[];
}

export default function WhySection({ titlePrefix, titleAccent, desc, stats }: Props) {
  return (
    <div className="border rounded-xl p-10 relative flex flex-col items-center gap-6 text-center">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-primary-foreground text-sm font-medium">
          {titlePrefix}
          {titleAccent}
        </span>
      </div>
      <p className="mx-auto max-w-lg text-muted-foreground text-balance mt-2">{desc}</p>
      <div className="flex items-center gap-10">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
