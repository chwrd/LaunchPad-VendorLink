import Link from "next/link";

// Mock data for vendors - in a real app, this would come from an API or database
const vendors = [
  {
    id: 1,
    name: "Catering Co.",
    category: "Food & Beverage",
    rating: 4.5,
    description: "Professional catering services for all types of events.",
  },
  {
    id: 2,
    name: "Sound Systems Pro",
    category: "Audio/Visual",
    rating: 4.8,
    description: "Complete audio and visual solutions for events.",
  },
  {
    id: 3,
    name: "Decor & More",
    category: "Decoration",
    rating: 4.3,
    description: "Event decoration and setup services.",
  },
];

export default function VendorDirectory() {
  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Vendor Directory</h1>
          <p className="mt-2 text-sm text-gray-700">
            Browse and connect with university-approved vendors for your events.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            Filter Vendors
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{vendor.name}</h3>
                <p className="text-sm text-gray-500">{vendor.category}</p>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900">{vendor.rating}</span>
                <svg
                  className="ml-1 h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.585l-6.327 3.323 1.209-7.037L.172 7.282l7.053-1.027L10 0l2.775 6.255 7.053 1.027-4.71 4.589 1.209 7.037L10 15.585z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500">{vendor.description}</p>
            <div className="mt-4">
              <Link
                href={`/dashboard/vendors/${vendor.id}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                View Profile →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 