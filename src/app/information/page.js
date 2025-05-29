export default function InformationPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4 text-[#179b98]">About VendorLink</h1>
      <p className="mb-4 text-lg text-gray-700">
        VendorLink is your one-stop platform for discovering, booking, and managing campus vendors. We connect event organizers with a curated directory of approved service providers, making it easy to find food, entertainment, printing, AV, and more.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-[#179b98]">How It Works</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Browse a directory of trusted campus vendors.</li>
        <li>Filter by category, service type, or special features.</li>
        <li>View detailed vendor profiles, products, and reviews.</li>
        <li>Book vendors directly through the platform.</li>
        <li>Track your bookings and communicate with vendors easily.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-[#179b98]">Contact Us</h2>
      <p className="text-gray-700">For support or questions, email <a href="mailto:support@vendorlink.com" className="text-[#179b98] underline">support@vendorlink.com</a>.</p>
    </div>
  );
}
