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

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1">
        {/* Vendor Header Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{vendor.name}</h1>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <span>✈️ Pick Up</span>
                  <span>🚗 Delivery</span>
                </div>
                <div>
                  Price Range: <span className="text-green-600">{vendor.pricing?.priceRange || '$$'}</span>
                </div>
              </div>
            </div>
            {vendor.business?.approved && (
              <div className="flex items-center gap-2">
                <div className="bg-green-100 rounded-full p-2">
                  <svg className="w-4 h-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">UW Approved</span>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="text-sm mb-2">
                <span className="font-medium">Phone Number</span><br />
                {vendor.contact?.phone || '(111) 111-1111'}
              </div>
              <div className="text-sm">
                <span className="font-medium">Email</span><br />
                {vendor.contact?.email || 'email@email.com'}
              </div>
            </div>
            <div>
              <div className="text-sm mb-2">
                <span className="font-medium">Hours</span><br />
                {vendor.hours?.regular || 'M-F 8AM - 9PM'}
              </div>
              <div className="text-sm">
                <span className="font-medium">Address</span><br />
                {vendor.address?.street || 'Here st NE Bothell, WA 98888'}
              </div>
            </div>
          </div>

          {/* Service Type and Fees */}
          <div className="mb-6">
            <div className="flex gap-2 mb-3">
              <span className="bg-gray-100 px-3 py-1 rounded text-sm">
                Service Type: {vendor.business?.serviceType || 'FOOD'}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded text-sm">Delivery</span>
              <span className="bg-gray-100 px-3 py-1 rounded text-sm">Late Cancellation</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(vendor.tags || ['Woman Owned', 'Eco-friendly packaging', 'Vegan', 'Vegetarian', 'Donates Leftovers', 'Ethical Sourcing']).map((tag) => (
              <span key={tag} className="bg-[#edf6f6] text-[#179b98] px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Overview */}
          <div className="mb-6">
            <h2 className="font-medium mb-2">Overview</h2>
            <p className="text-gray-600">
              {vendor.description || 'Local chain serving organic coffee drinks, plus tea, hot chocolate & smoothies.'}
            </p>
          </div>

          {/* Book Now Button */}
          <button className="w-full bg-[#183d4a] text-white font-medium py-3 rounded-lg hover:bg-[#122b35] transition-colors">
            BOOK NOW
          </button>
        </div>

        {/* Menu Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-[#179b98]">Menu</h2>
          {Array.isArray(vendor.menu) && vendor.menu.length > 0 ? (
            vendor.menu.map((menu) => (
              <div key={menu.menuId || menu._id} className="mb-8">
                {/* Menu Header */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-xl font-bold text-[#183d4a]">{menu.name}</span>
                  <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                    menu.availability?.isAvailable 
                      ? 'bg-[#d0f5f4] text-[#179b98]' 
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {menu.availability?.isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                </div>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {menu.items?.map((item) => (
                    <div key={item.itemId || item._id} className="border rounded-lg p-4 bg-[#f8fdfa]">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-bold text-[#183d4a]">{item.name}</div>
                          {item.description && (
                            <div className="text-sm text-gray-600 mt-1">{item.description}</div>
                          )}
                        </div>
                        <div className="text-base font-semibold text-[#179b98]">
                          ${item.pricing?.price?.toFixed(2) || '0.00'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-400 italic">No menu items available</div>
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 space-y-6">
        {/* Business Status */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-bold text-lg mb-4">Business Information</h3>
          <div className="space-y-2">
            <div className="text-sm">
              <span className="font-semibold">Status:</span>{" "}
              <span className={`${
                vendor.business?.status === 'active' ? 'text-green-600' : 'text-red-600'
              }`}>
                {vendor.business?.status?.charAt(0).toUpperCase() + vendor.business?.status?.slice(1)}
              </span>
            </div>
            {vendor.business?.license && (
              <div className="text-sm">
                <span className="font-semibold">License:</span> {vendor.business.license}
              </div>
            )}
            <div className="text-sm">
              <span className="font-semibold">Advance Notice:</span>{" "}
              {vendor.settings?.availabilityBuffer || 24}h
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-bold text-lg mb-4">Performance Metrics</h3>
          <div className="space-y-2">
            <div className="text-sm">
              <span className="font-semibold">Total Orders:</span>{" "}
              {vendor.metrics?.totalOrders || 0}
            </div>
            <div className="text-sm">
              <span className="font-semibold">Response Time:</span>{" "}
              {vendor.metrics?.responseTime ? `${vendor.metrics.responseTime} mins` : 'N/A'}
            </div>
            <div className="text-sm">
              <span className="font-semibold">Completion Rate:</span>{" "}
              {vendor.metrics?.completionRate ? `${vendor.metrics.completionRate}%` : 'N/A'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
