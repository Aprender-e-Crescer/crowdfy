import { ArrowUp } from "lucide-react";
interface Props {
  preço: string;
}

export function BackgroundButton({ preço }: Props) {
  return (
    <div className="flex items-center justify-center bg-lime-100 border-2 border-lime-50 rounded-full w-24 h-7 p-0">
      <div className="flex items-center">
        <ArrowUp className="text-green-500 mr-2" size={14} strokeWidth={3} />
        <span className="text-green-700 text-base font-semibold">{preço}</span>
      </div>
    </div>
  );
}


