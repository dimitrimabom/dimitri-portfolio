import { CopyToClipboard } from "@/components/CopyToClipboard";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="font-raleway max-w-2xl mx-auto">
      <section className="py-12 px-4">
        <div className="m-6 flex gap-2">
          <MoveLeft />
          Back
        </div>

        <h1 className="text-5xl leading-15 text-foreground font-bold px-6">
          About Dimitri
        </h1>
        <p className="text-foreground/50 pt-4 text-lg font-medium px-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          repellat id minus, saepe earum adipisci, maiores nam nisi error eaque
          molestiae in fugiat ab excepturi nesciunt impedit numquam minima non.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1756151224665-eba765e8c3b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // remplace par ton image
          alt="Billify template"
          width={"1000"}
          height={"1000"}
          className="mt-4"
        />

        <p className="text-foreground/50 pt-4 text-lg font-medium px-4 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laborum
          dolorum dolorem nemo sint error perspiciatis consequatur blanditiis
          deserunt eveniet, recusandae earum magni? Inventore repellat ipsam cum
          corrupti, similique aperiam nam a consectetur incidunt, quisquam
        </p>
        <p className="text-foreground/50 pt-4 text-lg font-medium px-4 mt-4">
          numquam expedita, nobis facilis voluptates debitis in? Repudiandae at
          sapiente dicta deleniti, similique saepe harum voluptate doloremque
          vero assumenda odio facere distinctio obcaecati illo, molestiae animi
          praesentium sunt fuga
        </p>

        <p className="text-foreground/50 pt-4 text-lg font-medium px-4 mt-4">
          enim incidunt repellat consequuntur officiis corrupti. In vel harum
          autem facilis perferendis nulla quis quod consequuntur, nobis dolore
          blanditiis quia numquam eaque ullam expedita qui ad voluptas
          voluptatum tempore amet atque voluptate rem! Autem, odio nihil.
        </p>

        <div className="flex items-center gap-4 pt-8">
          <Link href="/work">
            <Button className="bg-primary/80 text-white">My Works</Button>
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
      </section>
    </div>
  );
};

export default page;
