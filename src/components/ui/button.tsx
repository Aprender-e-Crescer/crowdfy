import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'flex gap-2 px-16 py-8 items-center',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 flex gap-2 px-16 py-8 items-center',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground flex gap-2 px-16 py-8 items-center',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        'hover-White-Border':
          'rounded-[8px] border-4 bg-green-200 text-black border-gray-300 hover:bg-white hover:border-black flex gap-2 py-2 px-4',
        blackOnHover:
          'bg-black text-white hover:bg-black hover:text-white flex gap-2 py-2 px-4',
        letraVerde:
          'text-[#65A30D] text-[14px] hover:text-[#475467] flex gap-2 py-2 px-4',
        whiteShadow:
          'text-[#0F172A] text-[14px] bg-[#FFFFFF] hover:text-[#475467] border-solid border-[2px] border-[#E2E8F0] flex gap-2 py-2 px-4',
        grayIcon:
          'text-[#94A3B8] text-[14px] bg-[#F8FAFC] hover:text-[#475467] border-solid border-[2px] border-[#CBD5E1] flex gap-2 py-2 px-4',
        ghost:
          'hover:bg-accent hover:text-accent-foreground flex gap-2 px-16 py-8 items-center',
        link: 'text-primary underline-offset-4 hover:underline flex gap-2 px-16 py-8 items-center',
        greenShadow:
          'rounded-[8px] border-4 flex gap-2 py-2 px-4 bg-lime-500 border-[#7B7B7B opacity-[18] text-white',
        purpleShadow:
          'rounded-[8px] border-4 flex gap-2 py-2 px-4 bg-purple-500 border-[#7B7B7B opacity-[18]  text-white',
        grayShadow:
          'bg-[#0F172A] bg-opacity-50 border-[#7B7B7B opacity-[18] rounded-[8px] border-4 flex gap-2 py-2 px-4  text-white',
        lightYellow:
          'bg-[#D9F99D] text-[#1F2937] max-w-40 border-[#F7FEE7] font-medium flex gap-2 py-2 px-4',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
