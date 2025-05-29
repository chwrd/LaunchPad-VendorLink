import Link from "next/link";
import VendorProfileSection from "./VendorProfileSection";

export default async function VendorProfile({ params }) {
  const awaitedParams = await params;
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-30">
      <div className="w-full max-w-7xl">

        {/* Main Card Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 min-w-[400px]">
            <div className= " p-8">
              <VendorProfileSection vendorId={awaitedParams.id} />
            </div>
          </div>
        </div>

        {/* Back to Vendor List */}
        <div className="flex justify-center my-10">
          <Link
            href="/vendor"
            className="text-[#179b98] hover:text-[#117c7a] font-semibold text-base px-6 py-2 rounded-full bg-white shadow border border-[#e0e0e0] transition-colors"
          >
            ← Back to Vendor List
          </Link>
        </div>
      </div>
    </div>
  );
}