import { Button } from "./ui/button"
import { InputSubHeader } from "./ui/input-sub-header"

export function SubHeader({buttons} :
    {
        title: string,
        variant: string,
        icon: JSX.Element,
        className: string,
        route: string,
    }
) {
    return (
        <div className="flex justify-between ml-28 mr-28">
            <div className="flex gap-3">
                {buttons.map((button) => (
                    <Button key={button.title} variant={button.variant} className={button.className}>
                      {button.icon} {button.title}
                    </Button>))}
            </div>
            <InputSubHeader />
        </div>
    )
}