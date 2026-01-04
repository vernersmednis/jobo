import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { SwipeActionButtonProps } from "./types"

export function SwipeActionButton({
  className,
  size = "icon-xl",
  children,
  ...props
}: SwipeActionButtonProps) {

  return (
    <Button
      type="button"
      variant="outline"
      size={size}
      className={cn(
        "rounded-full bg-background shadow-md",
        "hover:bg-accent active:scale-95",
        "transition-[transform,background-color]",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
