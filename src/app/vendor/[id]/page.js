import Link from "next/link";
import VendorProfileSection from "./VendorProfileSection";

export default function VendorProfile({ params }) {
  return (
    <div className="p-8">
      <div className="mb-8">
        <Link
          href="/dashboard/vendors"
          className="text-[#179b98] hover:text-[#117c7a] font-medium"
        >
          ← Back to Vendor Directory
        </Link>
      </div>
      <VendorProfileSection vendorId={params.id} />
    </div>
  );
}