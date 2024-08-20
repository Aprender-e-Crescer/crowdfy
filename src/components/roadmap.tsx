import { NotificationComponent } from './NotificationComponent'

export function Roadmap() {
  return (
    <div className="flex flex-col gap-1 ml-5">
      <div className="title font-bold text-2xl">Roadmap</div>

      <NotificationComponent
        nome="Matheus Rodrigues"
        text1="is gathering 9000 signs to citys prefecture"
        postedIn="in 20 days"
        text2="“We need to deliver this about of 9.000 signs to the mayor to he approve us as
       international english teacher”"
      />

      <NotificationComponent
        nome="Matheus Rodrigues"
        text1="Raise together $1000 to pay for our  (2 persons) flights to 1st weeks"
        postedIn="in 20 days"
      />
    </div>
  )
}
