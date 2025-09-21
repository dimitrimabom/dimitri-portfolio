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
import Card from "@/components/Card";
import { Twitter, Youtube, Instagram } from "lucide-react";

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

          <div className="flex items-center gap-4 pt-8">
            <Link
              href="https://x.com/@dimitrimabom"
              target="_blank"
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </Link>
            <Link
              href="https://www.youtube.com/@dimitrimabom"
              target="_blank"
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </Link>
            <Link
              href="https://www.instagram.com/dimitrimabom/"
              target="_blank"
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex items-center gap-4 pt-10">
            <Link href="/about">
              <Button className="text-white">About Me</Button>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <CopyToClipboard text="dimitrymabom@gmail.com" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-foreground">dimitrymabom@gmail.com</p>
              </TooltipContent>
            </Tooltip>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
              {[...Array(2)].map((_, i) => (
                <Card
                  key={i}
                  image="https://images.unsplash.com/photo-1756151224665-eba765e8c3b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  title="Billify"
                  category="A sleek digital invoice template for creative professionals."
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
