import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { InputSubHeader } from "./ui/input-sub-header";

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
    <div className="flex justify-start sm:justify-between pt-6 max-[450px]:flex-col max-[450px]:gap-2 ml-2">
      <div className="flex gap-3 mr-2 sm:mr-5">
        {buttons.map(({ title, variant, icon, route }) => (
          <Link to={route} key={title}>
            <Button variant={variant}>
              {icon} {title}
            </Button>
          </Link>
        ))}
      </div>
      <InputSubHeader />
    </div>
  );
}

