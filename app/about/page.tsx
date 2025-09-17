"use client";

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
import { motion } from "framer-motion";

const page = () => {
  return (
    <main className="font-raleway max-w-3xl mx-auto">
      <header className="py-12 px-4">
        <motion.nav
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="m-6 flex gap-2 items-center text-sm text-foreground/70 hover:text-foreground cursor-pointer"
        >
          <MoveLeft />
          <Link href="/">Back</Link>
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl leading-tight font-extrabold px-6 "
        >
          About Me
        </motion.h1>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6"
        >
          <p className="text-foreground/70 pt-4 text-lg font-medium px-4">
            Bonjour 👋, je m&apos;appelle{" "}
            <span className="font-semibold decoration-primary decoration-2 underline-offset-4 text-primary font-eduHand">
              Mabom Loïc Charles Dimitri
            </span>
            , mais tout le monde m&apos;appelle Dimitri. Je suis{" "}
            <span className="font-semibold text-primary font-eduHand">
              Ingénieur Front Office & Développeur Web
            </span>
            , deux rôles que je combine pour concevoir des solutions{" "}
            <span className="italic">performantes</span> et{" "}
            <span className="italic">intuitives</span>.
          </p>

          <figure className="mt-8 relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1756151224665-eba765e8c3b5?q=80&w=1170&auto=format&fit=crop"
                alt="Dimitri working"
                width={1000}
                height={1000}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <figcaption className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full shadow-md">
              Toujours apprendre, toujours progresser
            </figcaption>
          </figure>
        </motion.section>
      </header>

      <article className="px-4 pb-16 space-y-12">
        {[
          {
            title: "Formation",
            content: `Mon parcours a commencé par un Baccalauréat en allemand, avant de
            poursuivre avec un BTS et une Licence en Génie Logiciel. Durant ces
            années, j’ai acquis des bases solides en programmation orientée objet,
            architecture logicielle, algorithmes et structures de données.`,
          },
          {
            title: "Expérience Professionnelle",
            content: `Aujourd’hui, je travaille chez MTN Cameroun en tant que Team Leader
            Front Office. J’y supervise une équipe dédiée au monitoring réseau,
            garantissant la disponibilité et les performances des infrastructures
            critiques. En parallèle, j’ai cofondé Alt Plus, une startup spécialisée
            dans le développement de solutions numériques avec React.js, Next.js et
            TypeScript.`,
          },
          {
            title: "Philosophie",
            content: `Pour moi, le développement web n’est pas qu’une question de code.
            C’est un mélange de créativité, de rigueur et de curiosité. J’aime
            comprendre les besoins réels, transformer une idée en produit concret
            et offrir une expérience fluide et agréable. `,
          },
          {
            title: "Centres d’Intérêt",
            content: `En dehors du travail, je suis passionné par le design, la culture
            japonaise, les films d’animation, et je prends plaisir à explorer de
            nouvelles technologies ou à créer du contenu.`,
          },
        ].map((section, idx) => (
          <motion.section
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 * idx }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4 px-2 relative">
              <span className="">{section.title}</span>
            </h2>
            <p className="text-foreground/70 text-lg font-medium px-2 leading-relaxed">
              {section.content}
            </p>
          </motion.section>
        ))}

        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex items-center gap-4 pt-8"
        >
          <Link href="/work">
            <Button className="text-white">My Works</Button>
          </Link>

          <Tooltip>
            <TooltipTrigger asChild>
              <CopyToClipboard text="dimitrymabom@gmail.com" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-foreground">dimitrymabom@gmail.com</p>
            </TooltipContent>
          </Tooltip>
        </motion.footer>
      </article>
    </main>
  );
};

export default page;
