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
        hoverWhiteBorder:
          'bg-green-200 text-black border border-gray-300 hover:bg-white hover:border-black',
        blackOnHover:
          'bg-black text-white hover:bg-black hover:text-white',
        letraVerde:
          'text-[#65A30D] text-[14px] hover:text-[#475467]',
        BrancoBorda:
          'text-[#0F172A] text-[14px] bg-[#FFFFFF] hover:text-[#475467] border-solid border-[2px] border-[#E2E8F0]',
        AcinzentadoIcon:
          'text-[#94A3B8] text-[14px] bg-[#F8FAFC] hover:text-[#475467] border-solid border-[2px] border-[#CBD5E1]',
        ghost:
          'hover:bg-accent hover:text-accent-foreground flex gap-2 px-16 py-8 items-center',
        link:
          'text-primary underline-offset-4 hover:underline flex gap-2 px-16 py-8 items-center',
        shadow:
          'rounded-[8px] border-4',
        green:
          'bg-lime-200 hover:bg-lime-300',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
      colorButton: {
        green: 'bg-lime-500 border-[#7B7B7B] opacity-[0.18]',
        gray: 'bg-[#0F172A] bg-opacity-50 border-[#7B7B7B] opacity-[0.18]',
        purple: 'bg-purple-500 border-[#7B7B7B] opacity-[0.18]',
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
  (
    { className, variant, size, colorButton, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, colorButton, className })
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
