"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function VendorProfileSection({ vendorId }) {
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVendor() {
      setLoading(true);
      try {
        const res = await fetch(`/api/vendor/${vendorId}`);
        const data = await res.json();
        if (data.success) {
          setVendor(data.vendor);
        } else {
          setError(data.error || "Vendor not found");
        }
      } catch (err) {
        setError("Failed to load vendor");
      } finally {
        setLoading(false);
      }
    }
    fetchVendor();
  }, [vendorId]);

  if (loading) return <div className="text-gray-500">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!vendor) return null;

  // --- UI based on the provided mockup ---
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left: Vendor Details */}
      <div className="flex-1 min-w-[400px]">
        <div className="flex gap-6 items-start">
          <img src="/file.svg" alt="Vendor" className="rounded-xl w-40 h-40 object-cover border border-gray-200" />
          <div className="flex-1">
            <h1 className="text-4xl font-black mb-1">{vendor.name}</h1>
            <div className="text-lg text-gray-600 mb-2">{vendor.category}</div>
            <div className="flex flex-wrap gap-2 mb-2">
              {vendor.fulfillmentMethod?.map((m) => (
                <span key={m} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">{m.charAt(0).toUpperCase() + m.slice(1)}</span>
              ))}
              {vendor.approved && (
                <span className="flex items-center gap-1 bg-white border border-[#179b98] text-[#179b98] px-3 py-1 rounded-full text-xs font-medium">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#179b98"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  UW Approved
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {vendor.tags?.map((tag) => (
                <span key={tag} className="bg-[#d0f5f4] text-[#179b98] px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {vendor.fees?.split(",").map((fee) => (
                <span key={fee} className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs font-medium">{fee}</span>
              ))}
            </div>
            <div className="text-gray-700 text-sm mb-2">
              <span className="font-semibold">Price Range:</span> {vendor.priceRange}
            </div>
            <div className="text-gray-700 text-sm mb-2">
              <span className="font-semibold">Phone Number:</span> {vendor.phone}
            </div>
            <div className="text-gray-700 text-sm mb-2">
              <span className="font-semibold">Email:</span> {vendor.email}
            </div>
            <div className="text-gray-700 text-sm mb-2">
              <span className="font-semibold">Hours:</span> {vendor.hours}
            </div>
            <div className="text-gray-700 text-sm mb-2">
              <span className="font-semibold">Address:</span> {vendor.address?.street} {vendor.address?.city} {vendor.address?.state} {vendor.address?.zip}
            </div>
            <div className="text-gray-700 text-sm mb-2">
              <span className="font-semibold">Service Type:</span> {vendor.serviceType?.join(", ")}
            </div>
            <div className="text-gray-700 text-sm mb-2">
              <span className="font-semibold">Overview:</span> {vendor.description}
            </div>
            <button className="mt-4 px-8 py-2 rounded-full bg-[#183d4a] text-white font-bold text-lg shadow hover:bg-[#179b98] transition">BOOK NOW</button>
          </div>
        </div>
        {/* Products Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Products</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Example product cards, replace with real data if available */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-3 border rounded-lg p-3 bg-white">
                <img src="/file.svg" alt="Product" className="w-16 h-16 rounded object-cover border border-gray-200" />
                <div className="flex-1">
                  <div className="font-semibold">Box of coffee</div>
                  <div className="text-sm text-gray-600">$28.00 &nbsp; Qty: 1 &nbsp; Serves 20</div>
                  <div className="text-xs text-gray-500">Freshly brewed box of black coffee, perfect for events or meetings.</div>
                </div>
                <button className="ml-2 text-2xl text-gray-400 hover:text-[#179b98]">+</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right: Stats and Top Items */}
      <div className="w-full lg:w-[400px] flex-shrink-0 bg-gradient-to-br from-[#179b98] to-[#117c7a] rounded-2xl p-8 text-white flex flex-col gap-6 shadow-xl">
        <div>
          <div className="text-sm mb-1">UW Approved since <span className="font-bold">2022</span></div>
          <div className="text-sm mb-1">Fulfilled <span className="font-bold">10</span> Campus Events</div>
          <div className="text-sm mb-1">Avg. Response Time <span className="font-bold text-[#baffc9]">36 hrs.</span></div>
          <div className="text-sm mb-1">Typical Booking Range <span className="line-through">$80-100</span></div>
        </div>
        <div>
          <div className="text-lg font-bold mb-2">Top Reviewed Items</div>
          <div className="flex flex-col gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-[#ffe9b3] text-[#183d4a] rounded-xl p-4 flex items-center gap-4 shadow">
                <img src="/file.svg" alt="Product" className="w-12 h-12 rounded object-cover border border-gray-200" />
                <div className="flex-1">
                  <div className="font-bold">Box of coffee</div>
                  <div className="text-xs">Qty 1<br/>Regular coffee<br/>With sugar and cream<br/>Serves <span className="font-bold">20</span></div>
                </div>
                <div className="text-xl font-bold">$28.00</div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-sm mt-4">
          Accomodates <span className="font-bold text-[#baffc9]">Last Minute Changes</span>
        </div>
      </div>
    </div>
  );
}
