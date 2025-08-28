import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="font-raleway max-w-4xl mx-auto">
      <section className="py-12 px-4">
        <div className="m-6 flex gap-2">
          <MoveLeft />
          Back
        </div>

        <h1 className="text-5xl leading-15 text-foreground font-bold px-6">
          Projects
        </h1>
        <p className="text-foreground/50 pt-4 text-lg font-medium px-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full mt-6">
          <Link
            href="/works/test1"
            className="flex items-center justify-center"
          >
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

          <Link
            href="/works/test2"
            className="flex items-center justify-center"
          >
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

          <Link
            href="/works/test3"
            className="flex items-center justify-center"
          >
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

          <Link
            href="/works/test4"
            className="flex items-center justify-center"
          >
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
      </section>
    </div>
  );
};

export default page;
