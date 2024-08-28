import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { InputSubHeader } from "./ui/input-sub-header";
// import { Link } from "@tanstack/react-router";

interface Props {
  buttons: {
    title: string;
    variant: "green" | "ghost";
    icon: JSX.Element;
    route: string;
  }[];
}

export function SubHeader({ buttons }: Props) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-3 mr-5">
        {buttons.map(({ title, variant, icon, route }) => (
          <Link to={route}>
            <Button key={title} variant={variant}>
              {icon} {title}
            </Button>
          </Link>
        ))}
      </div>
      <InputSubHeader />
    </div>
  );
}
