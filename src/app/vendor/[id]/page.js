import Link from "next/link";

// Mock data - in a real app, this would come from an API or database
const getVendorById = (id) => ({
  id,
  name: "Catering Co.",
  category: "Food & Beverage",
  rating: 4.5,
  description: "Professional catering services for all types of events.",
  services: [
    "Full-service catering",
    "Buffet setup",
    "Plated service",
    "Beverage service",
  ],
  pricing: "Starting from $15 per person",
  availability: "Available for booking",
  contact: {
    email: "contact@cateringco.com",
    phone: "(555) 123-4567",
  },
});

export default function VendorProfile({ params }) {
  const vendor = getVendorById(params.id);

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/dashboard/vendors"
          className="text-blue-600 hover:text-blue-500"
        >
          ← Back to Vendor Directory
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{vendor.name}</h1>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                {vendor.category}
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-medium text-gray-900">
                {vendor.rating}
              </span>
              <svg
                className="ml-1 h-6 w-6 text-yellow-400"
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
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-sm text-gray-900">{vendor.description}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Services</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul className="list-disc pl-5">
                  {vendor.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Pricing</dt>
              <dd className="mt-1 text-sm text-gray-900">{vendor.pricing}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Contact Email</dt>
              <dd className="mt-1 text-sm text-gray-900">{vendor.contact.email}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Contact Phone</dt>
              <dd className="mt-1 text-sm text-gray-900">{vendor.contact.phone}</dd>
            </div>
          </dl>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:px-6">
          <div className="flex justify-end space-x-4">
            <Link
              href={`/dashboard/booking?vendor=${params.id}`}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Book Now
            </Link>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Vendor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 