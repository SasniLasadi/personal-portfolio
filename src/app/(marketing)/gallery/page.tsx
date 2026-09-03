import type { Metadata } from "next";
import Image from "next/image";
import { galleryImages } from "@/content/gallery";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-12 md:px-10 md:py-16">
      <p className="font-mono text-sm text-ink-soft">04 / Gallery</p>
      <h1 className="mt-3 max-w-xl text-balance font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
        Moments &amp; <span className="text-accent">memories.</span>
      </h1>
      <p className="mt-4 max-w-xl font-body text-base text-ink-soft">
        Snapshots from university life, hackathons, and the moments I lived.
      </p>

      <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {galleryImages.map((img, i) => (
          <div
            key={img.src}
            className={cn(
              "relative overflow-hidden rounded-2xl border border-ink/10 bg-bg-soft",
              img.tall && "row-span-2",
              img.wide && "col-span-2"
            )}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
              priority={i < 2}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
