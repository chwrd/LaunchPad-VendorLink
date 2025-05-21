import Link from "next/link";

export default function BookingForm({ searchParams }) {
  const vendorId = searchParams?.vendor;

  return (
    <div>
      <div className="mb-8">
        <Link
          href={vendorId ? `/dashboard/vendors/${vendorId}` : "/dashboard/vendors"}
          className="text-blue-600 hover:text-blue-500"
        >
          ← Back to {vendorId ? "Vendor Profile" : "Vendor Directory"}
        </Link>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-2xl font-semibold text-gray-900">Book a Vendor</h1>
          <p className="mt-2 text-sm text-gray-500">
            Fill out this form to request a booking with the vendor.
          </p>

          <form className="mt-6 space-y-6">
            <div>
              <label htmlFor="event-name" className="block text-sm font-medium text-gray-700">
                Event Name
              </label>
              <input
                type="text"
                name="event-name"
                id="event-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter event name"
              />
            </div>

            <div>
              <label htmlFor="event-type" className="block text-sm font-medium text-gray-700">
                Event Type
              </label>
              <select
                id="event-type"
                name="event-type"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option>Conference</option>
                <option>Meeting</option>
                <option>Party</option>
                <option>Workshop</option>
                <option>Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="attendees" className="block text-sm font-medium text-gray-700">
                Number of Attendees
              </label>
              <input
                type="number"
                name="attendees"
                id="attendees"
                min="1"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter number of attendees"
              />
            </div>

            <div>
              <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
                Special Requirements
              </label>
              <textarea
                id="requirements"
                name="requirements"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter any special requirements or notes"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 