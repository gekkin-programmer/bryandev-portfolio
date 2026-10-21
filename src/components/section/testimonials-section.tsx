/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

interface Props {
  titlePrefix: string;
  titleAccent: string;
  desc: string;
  items: Testimonial[];
}

function Avatar({ name, image }: { name: string; image: string }) {
  const [imageError, setImageError] = useState(false);

  if (!image || imageError) {
    return (
      <div className="size-10 rounded-full bg-muted flex items-center justify-center font-semibold text-sm flex-none">
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={name}
      className="size-10 rounded-full object-cover flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function TestimonialsSection({ titlePrefix, titleAccent, desc, items }: Props) {
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
          {desc}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <div key={item.name} className="flex flex-col gap-3 border border-border rounded-xl p-5">
            <div className="flex items-center gap-3">
              <Avatar name={item.name} image={item.image} />
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="font-semibold text-sm leading-none">{item.name}</span>
                <span className="text-xs text-muted-foreground">{item.role}</span>
              </div>
            </div>
            <div className="flex gap-0.5" role="img" aria-label={`${item.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-3.5 ${i < item.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{item.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
