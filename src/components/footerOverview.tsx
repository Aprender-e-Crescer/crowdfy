import { Link } from "@tanstack/react-router";
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

interface FooterOverviewProps {
  titulo: string;
  valor: string;
  link: string;
}

const FooterOverview: React.FC<FooterOverviewProps> = ({ titulo, valor, link }) => {
  return (
    <div className="bg-background rounded-xl border border-gray-200 shadow-sm relative w-full sm:w-full lg:w-[216px] h-auto sm:h-[166px] p-4 font-plus-jakarta-sans">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-[#475467]">{titulo}</h3>
            <EllipsisVerticalIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="flex flex-col items-start gap-2 mt-2">
            <span className="text-2xl sm:text-[28px] font-semibold">{valor}</span>
          </div>
        </div>

        <div className="mt-2 sm:mt-4 -mx-4 border-t border-gray-200" />
        <div className="mt-4 flex justify-end">
          <Link href={link} className="text-sm text-[#65A30D] hover:underline">
            {link}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterOverview;
