import * as React from "react"
//w-full
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px]  w-full rounded-md border border-input bg-background px-3 py-2 text-base text-[black]   ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-gray-400 focus-visible:ring-ring focus-visible:drop-shadow-sm focus-visible:ring-offset-2 disabled:opacity-50 resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
