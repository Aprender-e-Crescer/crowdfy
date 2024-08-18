import { Button } from "./ui/button"
import { InputSubHeader } from "./ui/input-sub-header"

export function SubHeader({buttons} :
    {
        title: string,
        variant: string,
        icon: JSX.Element
    }
) {
    return (
        <div className="flex justify-between ml-28 mr-28">
            <div className="flex gap-3">
                {buttons.map((button) => (
                    <Button variant={button.variant}>
                      {button.icon} {button.title}
                    </Button>))}
            </div>
            <InputSubHeader />
        </div>
    )
}