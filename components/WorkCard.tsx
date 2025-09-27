"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface WorkCardProps {
  image: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  priority?: boolean;
}

export default function WorkCard({
  image,
  title,
  slug,
  date,
  excerpt,
  priority = false,
}: WorkCardProps) {
  return (
    <div className="w-full bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-3">
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="w-full h-48 object-cover rounded-t-xl"
          priority={priority}
        />
      </div>
      <div className="px-5 pb-6">
        <h3 className="mb-2 text-2xl font-semibold leading-tight">
          <Link href={`/works/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <div className="mb-3 text-sm text-muted-foreground">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <p className="text-base leading-relaxed mb-4">{excerpt}</p>
        <Link
          href={`/works/${slug}`}
          className="text-primary/80 hover:underline flex items-center font-medium"
        >
          View Project
          <MoveRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
}
