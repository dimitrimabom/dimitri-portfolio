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
            Hey, I&apos;m Dimitri. <br />I build{" "}
            <span className="text-primary/80 font-eduHand font-medium">
              websites.
            </span>
          </h1>

          <p className="text-foreground/50 pt-4 text-lg font-medium">
            I&apos;m a{" "}
            <span className="text-primary/80 font-eduHand font-medium">
              Front Office Engineer
            </span>{" "}
            &
            <span className="text-primary/80 font-eduHand font-medium">
              {" "}
              Web Developer
            </span>{" "}
            passionate about creating performant and intuitive digital products.
            Currently working at{" "}
            <span className="text-primary/80 font-eduHand">MTN Cameroon </span>
            as a{" "}
            <span className="text-primary/80 font-eduHand font-medium">
              Team Leader Front Office
            </span>{" "}
            while also building innovative solutions at{" "}
            <span className="text-primary/80 font-eduHand">Alt Plus</span>.
          </p>

          <div className="flex items-center gap-4 pt-8">
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
              <Link href="#" className="flex items-center justify-center">
                <div className="rounded-xl overflow-hidden shadow-lg w-[380px] bg-card text-card-foreground group hover:shadow-xl hover:-translate-y-2 duration-300 ease-in-out">
                  {/* Image */}
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1756151224665-eba765e8c3b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Billify template"
                      fill
                      className="object-cover group-hover:scale-110 duration-500 ease-in-out"
                    />
                    {/* Overlay au hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  </div>

                  {/* Texte */}
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-eduHand font-semibold text-primary group-hover:text-primary/80 transition">
                        Billify
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        A sleek digital invoice template for creative
                        professionals.
                      </p>
                    </div>
                    <div className="px-3 py-1 rounded-full text-xs font-semibold primary/90 text-white shadow-sm bg-primary">
                      2020
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="#" className="flex items-center justify-center">
                <div className="rounded-xl overflow-hidden shadow-lg w-[380px] bg-card text-card-foreground group hover:shadow-xl hover:-translate-y-2 duration-300 ease-in-out">
                  {/* Image */}
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1756151224665-eba765e8c3b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Billify template"
                      fill
                      className="object-cover group-hover:scale-110 duration-500 ease-in-out"
                    />
                    {/* Overlay au hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  </div>

                  {/* Texte */}
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-eduHand font-semibold text-primary group-hover:text-primary/80 transition">
                        Billify
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        A sleek digital invoice template for creative
                        professionals.
                      </p>
                    </div>
                    <div className="px-3 py-1 rounded-full text-xs font-semibold primary/90 text-white shadow-sm bg-primary">
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
