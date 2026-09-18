import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
};

export function KenBurns({
  src,
  alt,
  className,
  imgClassName,
  fit = "cover",
  priority,
}: Props) {
  return (
    <div className={cn("overflow-hidden bg-bg", className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "ken-burns",
          fit === "cover" ? "size-full object-cover" : "mx-auto h-full w-auto max-w-full object-contain",
          imgClassName,
        )}
        draggable={false}
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}
