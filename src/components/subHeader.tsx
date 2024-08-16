import { Button } from "./ui/button"
import { InputSubHeader } from "./ui/input-sub-header"

export function SubHeader() {


    return(
        <div className="flex justify-between ml-28 mr-28">
            <div className="flex gap-3">
                <Button variant={"destructive"}>aaa</Button>
                <Button variant={'destructive'}>TESTE 2</Button>
            </div>
            <InputSubHeader />
        </div>
    )
}