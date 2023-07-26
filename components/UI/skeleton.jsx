import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[#8baa3675]", className)}
      {...props}
    />
  );
}

export { Skeleton };
