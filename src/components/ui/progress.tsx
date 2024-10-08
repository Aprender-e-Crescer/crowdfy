import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(


      "relative my-4 h-[9px] w-auto overflow-hidden rounded-full bg-[#EAECF0]",

      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full rounded-full w-auto flex-1 bg-[#84CC16] transition-all"
      style={{ transform: `translateX(-${100 - (value || 100)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
