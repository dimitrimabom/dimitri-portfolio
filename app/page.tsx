import { CopyToClipboard } from "@/components/CopyToClipboard";
import ExperienceSection from "@/components/ExperienceSection";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Twitter, Youtube, Instagram } from "lucide-react";
import WorkCard from "@/components/WorkCard";

export default function Home() {
  return (
    <div>
      <div className="font-raleway max-w-4xl mx-auto mt-12">
        {/* <header className="bg-red-500 h-12 flex items-center justify-between px-4">header</header> */}

        <section className="py-12 px-4">
          {/* <h1 className="text-5xl leading-15 text-foreground font-bold">
            Hey, I&apos;m Dimitri. <br />I design{" "}
            <span className="text-primary/80 font-eduHand font-medium">
              websites.
            </span>
          </h1>
          <p className="text-foreground/50 pt-4 text-lg font-medium">
            I&apos;m a software engineer with a passion for building websites.
            <br />
            I&apos;m currently working at{" "}
            <span className="text-primary/80 font-eduHand font-medium">
              Google
            </span>{" "}
            as a software engineer.
          </p> */}

          <h1 className="text-5xl leading-15 text-foreground font-bold">
            Hey, I&apos;m Dimitri. <br />
            <p className="text-foreground text-4xl font-medium">
              I build{" "}
              <span className="text-primary/80 font-eduHand font-medium">
                <span className="text-primary/80 font-eduHand font-medium">
                  websites
                </span>
              </span>
              .
            </p>
          </h1>

          <p className="text-foreground/50 pt-6 text-lg font-medium">
            I&apos;m a{" "}
            <span className="text-primary/80 font-eduHand font-medium">
              {" "}
              Web Developer
            </span>
            .
          </p>
          <p className="text-foreground/50 text-lg font-medium">
            Passionate about creating performant and intuitive digital products.
          </p>
          <p className="text-foreground/50 text-lg font-medium">
            Currently building innovative solutions with{" "}
            <span className="text-primary/80 font-eduHand">Alt Plus</span>.
          </p>



          <div className="flex items-center gap-4 pt-10">
            <Link href="/about">
              <Button className="text-white">About Me</Button>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <CopyToClipboard text="dimitrymabom@gmail.com" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-foreground">Copy email to clipboard</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex items-center gap-4 pt-6">
            <Link
              href="https://x.com/@dimitrimabom"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
              className="group text-muted-foreground hover:text-primary hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </Link>
            <Link
              href="https://www.youtube.com/@dimitrimabom"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="group text-muted-foreground hover:text-primary hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <Youtube className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </Link>
            <Link
              href="https://www.instagram.com/dimitrimabom/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group text-muted-foreground hover:text-primary hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          <div className="flex items-center gap-4 pt-8 w-full flex-col">
            <div className="flex w-full justify-between items-center">
              <span className="text-primary/80 font-bold text-4xl p-4">
                My Works
              </span>
              <Link href="/works">
                <span className="flex flex-row gap-2">
                  More
                  <MoveRight />
                </span>
              </Link>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              {[
                {
                  title: "Portfolio Website Redesign",
                  slug: "portfolio-website-redesign",
                  date: "2024-03-15",
                  image:
                    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
                  excerpt:
                    "A modern redesign of my personal portfolio, focusing on accessibility, performance, and a clean UI.",
                },
                {
                  title: "E-commerce Dashboard",
                  slug: "ecommerce-dashboard",
                  date: "2024-02-10",
                  image:
                    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
                  excerpt:
                    "A dashboard for managing products, orders, and analytics, built with Next.js and Tailwind CSS.",
                },
              ].map((work, i) => (
                <WorkCard
                  key={work.slug}
                  image={work.image}
                  title={work.title}
                  slug={work.slug}
                  date={work.date}
                  excerpt={work.excerpt}
                  priority={i === 0} // tu peux mettre la priorité seulement sur le 1er
                />
              ))}
            </div>

          </div>

          <ExperienceSection />
        </section>
      </div>
    </div>
  );
}
