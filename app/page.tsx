import { CopyToClipboard } from "@/components/CopyToClipboard";
import ExperienceSection from "@/components/ExperienceSection";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="font-raleway max-w-4xl mx-auto">
        {/* <header className="bg-red-500 h-12 flex items-center justify-between px-4">header</header> */}

        <section className="py-12 px-4">
          <h1 className="text-5xl leading-15 text-foreground font-bold">
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
          </p>

          <div className="flex items-center gap-4 pt-8">
            <Link href="/about">
              <Button className="bg-primary/80 text-white">About Me</Button>
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
              <Link href="#" className="flex items-center justify-center">
                <div className="rounded-xl overflow-hidden shadow-lg w-[380px] bg-card text-card-foreground">
                  {/* Image */}
                  <div className="relative w-full h-56">
                    <Image
                      src="https://images.unsplash.com/photo-1756151224665-eba765e8c3b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // remplace par ton image
                      alt="Billify template"
                      fill
                      className="object-cover hover:scale-105 duration-300 ease-in-out"
                    />
                  </div>

                  {/* Texte */}
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-md font-eduHand font-medium text-primary">
                        Billify
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        A digital invoice template for designers.
                      </p>
                    </div>
                    <div className="px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground">
                      2020
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="#" className="flex items-center justify-center">
                <div className="rounded-xl overflow-hidden shadow-lg w-[380px] bg-card text-card-foreground">
                  {/* Image */}
                  <div className="relative w-full h-56">
                    <Image
                      src="https://images.unsplash.com/photo-1756151224665-eba765e8c3b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // remplace par ton image
                      alt="Billify template"
                      fill
                      className="object-cover hover:scale-105 duration-300 ease-in-out"
                    />
                  </div>

                  {/* Texte */}
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-md font-eduHand font-medium text-primary">
                        Billify
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        A digital invoice template for designers.
                      </p>
                    </div>
                    <div className="px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground">
                      2020
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <ExperienceSection />
        </section>
      </div>
    </div>
  );
}
