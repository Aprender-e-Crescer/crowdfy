import { Button } from "./ui/button"
import { InputSubHeader } from "./ui/input-sub-header"

export function SubHeader({buttons} :
    {
        buttons: {
            title: string,
            variant:  "green" | "ghost",
            icon: JSX.Element,
            route: string,
        }[]
    }
) {
    return (
        <div className="flex justify-between">
            <div className="flex gap-3 mr-5">
                {buttons.map((button) => (
                    <Button key={button.title} variant={button.variant}>
                      {button.icon} {button.title}
                    </Button>))}
            </div>
            <InputSubHeader />
        </div>
    )
}