import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { InputSubHeader } from '@/components/input-sub-header'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
interface Props {
  buttons: {
    title: string;
    variant: "lightYellow" | "ghost" | "green";
    icon: JSX.Element;
    route: string;
  }[];
}

export function SubHeader({ buttons }: Props) {
  return (
    <>
      <hr />
      <div className="flex justify-between max-[420px]:flex-col lg:pt-6 lg:pb-6 pt-3 pb-3 max-[450px]:gap-2 ml-2 lg:mx-24">
        <div className="gap-3 mr-2 sm:mr-5 hidden lg:flex">
          {buttons.map(({ title, variant, icon, route }) => (
            <Link to={route} key={title}>
              <Button variant={variant}>
                {icon} {title}
              </Button>
            </Link>
          ))}
        </div>
        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="lightYellow">Actions</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {buttons.map(({ title, route }) => (
                <DropdownMenuItem key={title}>
                  <Link to={route}>{title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <InputSubHeader />
      </div>
      <hr />
    </>
  )
}
