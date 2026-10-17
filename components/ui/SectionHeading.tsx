import { SparkleIcon } from "../icons";
import { cn } from "@/lib/utils";

/**
 * Header section yang konsisten: eyebrow kecil berspasi lebar dengan bintang
 * mint, judul tebal dengan kata aksen, dan paragraf pendukung opsional.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.28em] text-ink-soft uppercase">
        <SparkleIcon className="h-3.5 w-3.5 text-mint" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
        {title}
        {accent ? <span className="text-mint"> {accent}</span> : null}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-ink-soft">
          {description}
        </p>
      ) : null}
    </div>
  );
}
