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

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left: Vendor List and Filters */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-extrabold mb-1">Vendor List</h1>
        <p className="mb-6 text-lg text-gray-600">Vendors near you</p>
        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-end gap-8">
            <div>
              <div className="text-base font-medium text-gray-700 mb-1">Filters</div>
              <div className="flex gap-6 mt-1">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Date</label>
                  <input
                    type="text"
                    placeholder="MM/DD/YY"
                    className="rounded-full bg-gray-300 border-0 px-4 py-1 text-sm text-gray-700 w-28 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Booking Range</label>
                  <input
                    type="text"
                    placeholder="$200-$500"
                    className="rounded-full bg-gray-300 border-0 px-4 py-1 text-sm text-gray-700 w-32 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Service Type</label>
                  <select className="rounded-full bg-gray-300 border-0 px-4 py-1 text-sm text-gray-700 w-28 focus:outline-none">
                    <option>Food</option>
                    <option>Entertainment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Fulfillment Method</label>
                  <div className="flex gap-4 mt-1">
                    <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
                      <input type="radio" name="fulfillment" className="accent-black" defaultChecked /> Pick-up
                    </label>
                    <label className="flex items-center gap-1 text-sm font-medium text-gray-400">
                      <input type="radio" name="fulfillment" className="accent-gray-300" disabled /> Delivery
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Featured Vendors */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Featured Vendors</h2>
          <span className="text-xs text-gray-400 cursor-pointer">filter</span>
        </div>
        <div className="flex gap-8">
          {/* Expanded Vendor Card */}
          {expanded ? (
            <div className="relative w-[350px] bg-white rounded-xl shadow-xl p-6 z-10 flex flex-col items-center">
              <img src="/file.svg" alt="Stock" className="w-40 h-40 object-cover rounded-lg mb-4" />
              <div className="w-full">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-bold text-lg">{vendors.find(v => v._id === expanded)?.name}</h3>
                  <span className="text-green-600 font-semibold">{vendors.find(v => v._id === expanded)?.priceRange || '$$'}</span>
                </div>
                <div className="flex gap-2 text-xs text-gray-500 mb-2">
                  {vendors.find(v => v._id === expanded)?.fulfillmentMethod?.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <div className="text-xs mb-1"><b>Phone Number:</b> {vendors.find(v => v._id === expanded)?.phone}</div>
                <div className="text-xs mb-1"><b>Email:</b> {vendors.find(v => v._id === expanded)?.email}</div>
                <div className="text-xs mb-1"><b>Hours:</b> {vendors.find(v => v._id === expanded)?.hours || '8 AM - 9PM'}</div>
                <div className="text-xs mb-1"><b>Address:</b> {vendors.find(v => v._id === expanded)?.address?.street}, {vendors.find(v => v._id === expanded)?.address?.city}, {vendors.find(v => v._id === expanded)?.address?.state} {vendors.find(v => v._id === expanded)?.address?.zip}</div>
                <div className="text-xs mb-2"><b>Overview:</b> {vendors.find(v => v._id === expanded)?.description}</div>
                <Link
                  href={`/vendor/${vendors.find(v => v._id === expanded)?.vendorId}`}
                  className="w-full block text-center bg-[#179b98] hover:bg-[#117c7a] text-white font-bold py-2 rounded-lg mb-2 transition"
                >
                  BOOK NOW
                </Link>
                {vendors.find(v => v._id === expanded)?.approved && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    <span className="text-xs text-gray-600">UW Approved</span>
                  </div>
                )}
              </div>
              <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700" onClick={() => setExpanded(null)}>&times;</button>
            </div>
          ) : null}
          {/* Vendor List */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            {vendors.map((vendor) => (
              <div
                key={vendor._id}
                className={`bg-white rounded-lg shadow p-4 cursor-pointer border hover:shadow-md transition flex flex-col gap-1 ${expanded === vendor._id ? 'ring-2 ring-blue-400 z-10' : ''}`}
                onClick={() => setExpanded(vendor._id)}
              >
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-base">{vendor.name}</div>
                  <div className="text-green-600 font-semibold">{vendor.priceRange || '$$'}</div>
                </div>
                <div className="text-xs text-gray-500 mt-1"><b>Phone Number:</b> {vendor.phone}</div>
                <div className="text-xs text-gray-500"><b>Email:</b> {vendor.email}</div>
                <div className="text-xs text-gray-500"><b>Address:</b> {vendor.address?.street}, {vendor.address?.city}, {vendor.address?.state}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right: Map */}
      <div className="w-[400px] bg-gradient-to-br from-[#179b98] to-[#117c7a] flex flex-col items-center justify-center p-6">
        <div className="w-[350px] h-[350px] bg-white rounded-2xl shadow-xl overflow-hidden flex items-center justify-center">
          <iframe
            title="map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.517282974505!2d-122.2053936843696!3d47.76195797919537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900ddc2b2e7e2b%3A0x7e7e7e7e7e7e7e7e!2sBothell%2C%20WA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}