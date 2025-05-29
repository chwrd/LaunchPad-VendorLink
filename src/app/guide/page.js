export default function GuidePage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4 text-[#179b98]">VendorLink User Guide</h1>
      <p className="mb-4 text-lg text-gray-700">
        Welcome to VendorLink! This guide will help you get started with browsing, booking, and managing vendors for your campus events.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-[#179b98]">Getting Started</h2>
      <ol className="list-decimal pl-6 text-gray-700 mb-4">
        <li>Navigate to the <span className="font-semibold">Vendor Directory</span> to explore available vendors.</li>
        <li>Use filters to narrow down vendors by category, service type, or special features.</li>
        <li>Click on a vendor to view their profile, products, and reviews.</li>
        <li>Click <span className="font-semibold">Book Now</span> to start a booking request.</li>
        <li>Track your bookings and communicate with vendors from your dashboard.</li>
      </ol>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-[#179b98]">Tips</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Check vendor tags for special features like "Eco-friendly" or "Last Minute Changes".</li>
        <li>Review top items and ratings to find the best fit for your event.</li>
        <li>Contact support if you need help or have questions.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-[#179b98]">Need More Help?</h2>
      <p className="text-gray-700">Visit the <a href="/information" className="text-[#179b98] underline">Information</a> page or contact <a href="mailto:support@vendorlink.com" className="text-[#179b98] underline">support@vendorlink.com</a>.</p>
    </div>
  );
}
