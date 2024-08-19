import { Link } from "@tanstack/react-router";
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

function FooterOverview() {
  return (
    <div className="flex flex-wrap gap-4 w-full max-w-6xl mx-auto px-4 py-12" style={{ fontFamily: 'Plus Jakarta Sans' }}>
      <div className="bg-background rounded-xl border border-gray-200 shadow-sm relative w-full sm:w-[216px] h-[166px]">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-[#475467]">Donations</h3>
            <EllipsisVerticalIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="flex flex-col items-start gap-2 mt-2">
            <span className="text-[28px] font-semibold">$1,280</span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200" />
        <div className="absolute bottom-4 right-4">
          <Link href="#" className="text-sm text-[#65A30D] hover:underline">
            View analytics
          </Link>
        </div>
      </div>

      <div className="bg-background rounded-xl border border-gray-200 shadow-sm relative w-full sm:w-[216px] h-[166px]">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-[#475467]">Signatures</h3>
            <EllipsisVerticalIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="flex flex-col items-start gap-2 mt-2">
            <span className="text-[28px] font-semibold">6,785</span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200" />
        <div className="absolute bottom-4 right-4">
          <Link href="#" className="text-sm text-[#65A30D] hover:underline">
            View report
          </Link>
        </div>
      </div>

      <div className="bg-background rounded-xl border border-gray-200 shadow-sm relative w-full sm:w-[216px] h-[166px]">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-[#475467]">Likes</h3>
            <EllipsisVerticalIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="flex flex-col items-start gap-2 mt-2">
            <span className="text-[28px] font-semibold">77</span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200" />
        <div className="absolute bottom-4 right-4">
          <Link href="#" className="text-sm text-[#65A30D] hover:underline">
            View report
          </Link>
        </div>
      </div>

      <div className="bg-background rounded-xl border border-gray-200 shadow-sm relative w-full sm:w-[216px] h-[166px]">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-[#475467]">Views</h3>
            <EllipsisVerticalIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="flex flex-col items-start gap-2 mt-2">
            <span className="text-[28px] font-semibold">13,767</span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200" />
        <div className="absolute bottom-4 right-4">
          <Link href="#" className="text-sm text-[#65A30D] hover:underline">
            View report
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterOverview;
