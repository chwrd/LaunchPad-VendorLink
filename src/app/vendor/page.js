'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function VendorList() {
  const [vendors, setVendors] = useState([]);
  const [expanded, setExpanded] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVendors() {
      setLoading(true);
      try {
        const res = await fetch("/api/vendor");
        const data = await res.json();
        if (data.success) {
          setVendors(data.vendors);
        } else {
          setError(data.error || "Failed to load vendors");
        }
      } catch (err) {
        setError("Failed to load vendors");
      } finally {
        setLoading(false);
      }
    }
    fetchVendors();
  }, []);

  if (loading) return <div className="p-8">Loading vendors...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;

  const expandedVendor = vendors.find(v => v._id === expanded);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Vendors</h1>
          {/* <Link
            href="/vendor/new"
            className="bg-[#179b98] text-white px-4 py-2 rounded-lg hover:bg-[#117c7a] transition"
          >
            Add New Vendor
          </Link> */}
        </div>

        <div className="flex gap-8">
          {/* Expanded Vendor Card */}
          {expanded && expandedVendor && (
            <div className="relative w-[400px] bg-white rounded-xl shadow-xl p-6 z-10">
              <div className="flex flex-col items-center mb-6">
                <img 
                  src={expandedVendor.media?.logo || "/file.svg"} 
                  alt={expandedVendor.name} 
                  className="w-40 h-40 object-cover rounded-lg mb-4" 
                />
                <h3 className="font-bold text-xl text-center">{expandedVendor.name}</h3>
                {expandedVendor.business?.approved && (
                  <span className="flex items-center gap-1 mt-2 text-[#179b98] text-sm">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="12" fill="#179b98"/>
                      <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Verified Vendor
                  </span>
                )}
              </div>

              <div className="space-y-4">
                {/* Categories and Tags */}
                <div>
                  <div className="text-sm font-semibold mb-2">Categories</div>
                  <div className="flex flex-wrap gap-2">
                    {expandedVendor.category?.map((cat) => (
                      <span key={cat} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div>
                  <div className="text-sm font-semibold mb-2">Pricing</div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold text-lg">
                      {expandedVendor.pricing?.priceRange || '$$'}
                    </span>
                    {expandedVendor.pricing?.minimumOrder && (
                      <span className="text-xs text-gray-500">
                        Min. Order: ${expandedVendor.pricing.minimumOrder}
                      </span>
                    )}
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <div className="text-sm font-semibold mb-2">Contact Information</div>
                  <div className="space-y-1 text-sm">
                    <div><span className="text-gray-500">Phone:</span> {expandedVendor.contact?.phone}</div>
                    <div><span className="text-gray-500">Email:</span> {expandedVendor.contact?.email}</div>
                    {expandedVendor.contact?.website && (
                      <div>
                        <span className="text-gray-500">Website:</span>{" "}
                        <a href={expandedVendor.contact.website} target="_blank" rel="noopener noreferrer" className="text-[#179b98] hover:underline">
                          Visit Website
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <div className="text-sm font-semibold mb-2">Business Hours</div>
                  <div className="text-sm">
                    <div>{expandedVendor.hours?.regular}</div>
                    {expandedVendor.hours?.special && (
                      <div className="text-gray-500 text-xs mt-1">{expandedVendor.hours.special}</div>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div>
                  <div className="text-sm font-semibold mb-2">Location</div>
                  <div className="text-sm">
                    {expandedVendor.address?.street}<br />
                    {expandedVendor.address?.city}, {expandedVendor.address?.state} {expandedVendor.address?.zip}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
                  <div>
                    <div className="text-xs text-gray-500">Rating</div>
                    <div className="font-bold">{expandedVendor.metrics?.rating?.toFixed(1) || 'N/A'}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Orders</div>
                    <div className="font-bold">{expandedVendor.metrics?.totalOrders || 0}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Response Time</div>
                    <div className="font-bold">{expandedVendor.metrics?.responseTime ? `${expandedVendor.metrics.responseTime}m` : 'N/A'}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Completion</div>
                    <div className="font-bold">{expandedVendor.metrics?.completionRate ? `${expandedVendor.metrics.completionRate}%` : 'N/A'}</div>
                  </div>
                </div>

                {/* View Full Profile Button */}
                <Link
                  href={`/vendor/${expandedVendor.vendorId}`}
                  className="block w-full text-center bg-[#183d4a] text-white py-2 rounded-lg hover:bg-[#179b98] transition mt-4"
                >
                  View Full Profile
                </Link>
              </div>
            </div>
          )}

          {/* Vendor Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vendors.map((vendor) => (
              <div
                key={vendor._id}
                className={`bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-md transition ${
                  expanded === vendor._id ? 'ring-2 ring-[#179b98]' : ''
                }`}
                onClick={() => setExpanded(vendor._id)}
              >
                <div className="flex items-start gap-4">
                  <img 
                    src={vendor.media?.logo || "/file.svg"} 
                    alt={vendor.name} 
                    className="w-16 h-16 object-cover rounded-lg" 
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-lg">{vendor.name}</div>
                        <div className="text-sm text-gray-500">{vendor.category?.[0]}</div>
                      </div>
                      <div className="text-green-600 font-semibold">
                        {vendor.pricing?.priceRange || '$$'}
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      {vendor.address?.city}, {vendor.address?.state}
                    </div>
                    {vendor.metrics?.rating && (
                      <div className="mt-1 text-sm">
                        <span className="text-yellow-500">★</span> {vendor.metrics.rating.toFixed(1)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}