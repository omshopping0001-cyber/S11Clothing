import { cn } from "@/lib/utils";

export function S11Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)} aria-label="S11 Clothing">
      <svg viewBox="0 0 54 34" className="h-8 w-[51px] shrink-0" aria-hidden="true">
        <path fill="currentColor" d="M1 4.5C1 2 3 0 5.5 0H35v7H10v3h18.5c2.5 0 4.5 2 4.5 4.5v8C33 25 31 27 28.5 27H1v-7h24v-3H5.5A4.5 4.5 0 0 1 1 12.5v-8Z" />
        <path fill="currentColor" d="M38 0h7v27h-7zM47 0h7v27h-7z" />
        <path fill="var(--color-brand)" d="M1 30h53v4H1z" />
      </svg>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[0.69rem] font-black tracking-[0.22em]">CLOTHING</span>
          <span className="mt-1 text-[0.48rem] font-semibold tracking-[0.18em] text-muted-foreground">NEW DELHI · INDIA</span>
        </span>
      )}
    </span>
  );
}
