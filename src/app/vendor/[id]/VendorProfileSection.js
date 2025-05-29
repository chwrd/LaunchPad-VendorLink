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
              <span className="font-semibold">Specialty:</span> {vendor.specialty}
            </div>
            <div className="text-gray-700 text-sm mb-2">
              <span className="font-semibold">Overview:</span> {vendor.description}
            </div>
        
            <button className="mt-4 px-8 py-2 rounded-full bg-[#183d4a] text-white font-bold text-lg shadow hover:bg-[#179b98] transition">BOOK NOW</button>
          </div>
        </div>
        {/* Menu Section - Display all MongoDB menu and item data */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 text-[#179b98]">Menus</h2>
          {Array.isArray(vendor.menu) && vendor.menu.length > 0 ? (
            vendor.menu.map((menu) => (
              <div key={menu.menuId || menu._id} className="mb-8 p-6 bg-white rounded-xl shadow border border-gray-100">
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <span className="text-xl font-bold text-[#183d4a]">{menu.name}</span>
                  <span className="text-sm bg-[#d0f5f4] text-[#179b98] px-3 py-1 rounded-full font-medium">{menu.available ? 'Available' : 'Unavailable'}</span>
                  <span className="text-xs text-gray-500">{menu.daysAvailable?.join(', ')}</span>
                  <span className="text-xs text-gray-500">{menu.startTime} - {menu.endTime}</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">Delivery Fee: ${menu.deliveryFee?.toFixed(2)} | Additional Fee: ${menu.additionalFee?.toFixed(2)} | Tax: {(menu.taxRate * 100).toFixed(1)}%</div>
                <div className="mt-2">
                  <div className="font-semibold mb-2 text-[#117c7a]">Items</div>
                  {Array.isArray(menu.items) && menu.items.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {menu.items.map((item) => (
                        <div key={item.itemId || item._id} className="border rounded-lg p-4 bg-[#f8fdfa] flex flex-col gap-1">
                          <div className="font-bold text-[#183d4a]">{item.name}</div>
                          <div className="text-sm text-gray-700">{item.description}</div>
                          <div className="text-xs text-gray-500">Unit: {item.unit}</div>
                          <div className="text-base font-semibold text-[#179b98]">${item.price?.toFixed(2)}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-gray-400 italic">No items listed for this menu.</div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-400 italic">No menus found for this vendor.</div>
          )}
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
