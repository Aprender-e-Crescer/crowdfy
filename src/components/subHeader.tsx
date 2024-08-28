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
    <div className="flex justify-between">
      <div className="flex gap-3 mr-5">
        {buttons.map(({ title, variant, icon }) => (
          <Button key={title} variant={variant}>
            {icon} {title}
          </Button>
        ))}
      </div>
      <InputSubHeader />
    </div>
  );
}
