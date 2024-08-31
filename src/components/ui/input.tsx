import * as React from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'settings'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'settings', ...props }, ref) => {
    const baseClasses =
      'text-black font-bold flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:drop-shadow-sm focus-visible:border-gray-400 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'

    const typeClasses =
      type === 'settings'
        ? 'border-gray-300 font-normal placeholder:text-black'
        : ''

    return (
      <input
        type="text"
        className={cn(baseClasses, typeClasses, className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export { Input }
