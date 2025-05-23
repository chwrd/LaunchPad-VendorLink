import Link from "next/link";

export default function BookingForm({ searchParams }) {
  const vendorId = searchParams?.vendor;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f9fa] py-10">
      <div className="w-[500px] bg-white rounded-xl shadow-lg p-10">
        <div className="mb-6">
          <Link
            href={vendorId ? `/dashboard/vendors/${vendorId}` : "/dashboard/vendors"}
            className="text-[#2596be] hover:underline text-sm"
          >
            ← Back to {vendorId ? "Vendor Profile" : "Vendor Directory"}
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-[#2596be] mb-2">Book a Vendor</h1>
        <p className="mb-6 text-gray-500 text-sm">
          Fill out this form to request a booking with the vendor.
        </p>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="event-name" className="text-gray-700 text-sm mb-1">
              Event Name
            </label>
            <input
              type="text"
              name="event-name"
              id="event-name"
              className="rounded-full px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-[#2596be] shadow"
              placeholder="Enter event name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="event-type" className="text-gray-700 text-sm mb-1">
              Event Type
            </label>
            <select
              id="event-type"
              name="event-type"
              className="rounded-full px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-[#2596be] shadow"
            >
              <option>Conference</option>
              <option>Meeting</option>
              <option>Party</option>
              <option>Workshop</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-1 w-1/2">
              <label htmlFor="date" className="text-gray-700 text-sm mb-1">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="rounded-full px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-[#2596be] shadow"
              />
            </div>
            <div className="flex flex-col gap-1 w-1/2">
              <label htmlFor="time" className="text-gray-700 text-sm mb-1">
                Time
              </label>
              <input
                type="time"
                name="time"
                id="time"
                className="rounded-full px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-[#2596be] shadow"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="attendees" className="text-gray-700 text-sm mb-1">
              Number of Attendees
            </label>
            <input
              type="number"
              name="attendees"
              id="attendees"
              min="1"
              className="rounded-full px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-[#2596be] shadow"
              placeholder="Enter number of attendees"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="requirements" className="text-gray-700 text-sm mb-1">
              Special Requirements
            </label>
            <textarea
              id="requirements"
              name="requirements"
              rows={3}
              className="rounded-xl px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-[#2596be] shadow resize-none"
              placeholder="Enter any special requirements or notes"
            />
          </div>
          <div className="flex justify-end gap-4 mt-2">
            <button
              type="button"
              className="rounded-full px-6 py-2 text-[#2596be] border border-[#2596be] bg-white hover:bg-[#e6f7fb] transition-all font-medium shadow"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-full px-6 py-2 bg-[#2596be] text-white font-medium shadow hover:bg-[#183d4a] transition-all"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}