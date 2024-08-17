import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MapPin } from "lucide-react"; 

export function Cardmapa() {
  return (
    <Card className="flex items-center gap-6 p-6 rounded-lg shadow-md">
      <img
        src="/placeholder.svg"
        alt="Ms. Saint-Martin Doranyia Pascal"
        className="w-[200px] h-[200px] rounded-lg object-cover"
        width="200"
        height="200"
        style={{ aspectRatio: "200/200", objectFit: "cover" }}
      />
      <div className="flex-1 grid gap-2">
        <div className="flex items-center gap-2 text-sm text-green-500">Donations</div>
        <h3 className="text-2xl font-bold text-[#1f2937]">Ms. Saint-Martin Doranyia Pascal</h3>
        <p className="text-[#6b7280]">
          In 2022 my husband and I moved to Portugal to follow our simple life dream and build our..
        </p>
        <div className="flex items-center gap-2 text-[#6b7280]">
          <MapPin className="w-4 h-4" />
          São Paulo, Brasil
        </div>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-[#1f2937]">€3,182.49</div>
          <div className="w-[70%]">
            <Progress value={70} className="bg-green-500" />
          </div>
        </div>
      </div>
    </Card>
  );
}
