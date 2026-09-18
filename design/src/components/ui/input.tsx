import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-sm border border-line bg-surface px-3 text-base text-fg",
        "placeholder:text-faint",
        "transition-[border-color,box-shadow] duration-150",
        "focus-visible:border-accent focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_var(--color-accent)]",
        className,
      )}
      {...props}
    />
  );
}
