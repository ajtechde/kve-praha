import { cn } from "@/lib/utils";

/** Globe with a cross — KVE Praha mark */
export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("w-8 h-8", className)}
      role="img"
      aria-label="KVE Praha"
      fill="none"
    >
      {/* Globe */}
      <circle cx="26" cy="42" r="17" className="fill-current opacity-25" />
      <circle cx="26" cy="42" r="17" className="stroke-current" strokeWidth="2.5" />
      <ellipse cx="26" cy="42" rx="7.5" ry="17" className="stroke-current" strokeWidth="2" />
      <path d="M9 42h34M12.5 32h27M12.5 52h27" className="stroke-current" strokeWidth="2" />
      {/* Cross */}
      <path
        d="M38 4v46M28 17h20"
        className="stroke-current"
        strokeWidth="5.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
