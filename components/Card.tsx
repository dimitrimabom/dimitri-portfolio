"use client";

interface CardProps {
  image: string;
  title: string;
  category: string;
}

export default function Card({ image, title, category }: CardProps) {
  return (
    <div
      className="relative rounded-sm overflow-hidden shadow-md group-hover:rounded-lg
                    group-hover:shadow-xl transition-all duration-300 ease-in-out w-[380px] group transition cursor-pointer "
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />

      {/* Overlay bas */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between flex flex-col items-start bg-white/90 backdrop-blur-sm rounded-sm px-3 py-2 shadow translate-y-25 group-hover:translate-y-0 transition-transform duration-300 ease-in-out bg-card text-card-foreground">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-lg font-eduHand font-medium text-primary">
            {title}
          </h3>
          <span className="text-xs text-muted-foreground bg-muted/30 px-3 py-1 rounded-full w-fit">
            2020
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          {category}
        </p>
      </div>
    </div>
  );
}
