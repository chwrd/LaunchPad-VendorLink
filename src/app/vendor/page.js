'use client';

import Link from "next/link";
import { useState } from "react";

// MongoDB Vendor Schema fields
// vendorId, name, email, phone, address, website, description, category, status, contactPerson, productsOrServices, rating, documents, notes

// Example mock data (replace with API call for production)
const vendors = [
  {
    _id: "1",
    vendorId: "VEND001",
    name: "Catering Co.",
    email: "catering@email.com",
    phone: "(111) 111-1111",
    address: {
      street: "123 Main St",
      city: "Bothell",
      state: "WA",
      zip: "98011",
      country: "USA",
    },
    website: "https://cateringco.com",
    description: "Professional catering services for all types of events.",
    category: "Food & Beverage",
    status: "active",
    contactPerson: "Jane Doe",
    productsOrServices: ["Buffet", "Drinks", "Snacks"],
    rating: 4.5,
    documents: [],
    notes: "UW Approved",
  },
  {
    _id: "2",
    vendorId: "VEND002",
    name: "Sound Systems Pro",
    email: "sound@email.com",
    phone: "(222) 222-2222",
    address: {
      street: "456 Sound Ave",
      city: "Bothell",
      state: "WA",
      zip: "98011",
      country: "USA",
    },
    website: "https://soundsystemspro.com",
    description: "Complete audio and visual solutions for events.",
    category: "Audio/Visual",
    status: "active",
    contactPerson: "John Smith",
    productsOrServices: ["Speakers", "Microphones", "Lighting"],
    rating: 4.8,
    documents: [],
    notes: "",
  },
  {
    _id: "3",
    vendorId: "VEND003",
    name: "Decor & More",
    email: "decor@email.com",
    phone: "(333) 333-3333",
    address: {
      street: "789 Decor Rd",
      city: "Bothell",
      state: "WA",
      zip: "98011",
      country: "USA",
    },
    website: "https://decoremore.com",
    description: "Event decoration and setup services.",
    category: "Decoration",
    status: "active",
    contactPerson: "Emily Lee",
    productsOrServices: ["Flowers", "Balloons", "Tableware"],
    rating: 4.3,
    documents: [],
    notes: "",
  },
  {
    _id: "4",
    vendorId: "VEND004",
    name: "Photo Magic",
    email: "photo@email.com",
    phone: "(444) 444-4444",
    address: {
      street: "321 Camera Ln",
      city: "Bothell",
      state: "WA",
      zip: "98011",
      country: "USA",
    },
    website: "https://photomagic.com",
    description: "Professional photography and videography for events.",
    category: "Photo/Video",
    status: "active",
    contactPerson: "Sarah Kim",
    productsOrServices: ["Photography", "Videography"],
    rating: 4.7,
    documents: [],
    notes: "",
  },
  {
    _id: "5",
    vendorId: "VEND005",
    name: "Print Pros",
    email: "print@email.com",
    phone: "(555) 555-5555",
    address: {
      street: "654 Print Ave",
      city: "Bothell",
      state: "WA",
      zip: "98011",
      country: "USA",
    },
    website: "https://printpros.com",
    description: "High-quality printing services for banners, flyers, and more.",
    category: "Printing",
    status: "active",
    contactPerson: "Mike Brown",
    productsOrServices: ["Banners", "Flyers", "Posters"],
    rating: 4.2,
    documents: [],
    notes: "",
  },
  {
    _id: "6",
    vendorId: "VEND006",
    name: "AV Experts",
    email: "av@email.com",
    phone: "(666) 666-6666",
    address: {
      street: "987 AV Blvd",
      city: "Bothell",
      state: "WA",
      zip: "98011",
      country: "USA",
    },
    website: "https://avexperts.com",
    description: "Audio/visual and lighting solutions for any event.",
    category: "AV/Lighting",
    status: "active",
    contactPerson: "Linda Green",
    productsOrServices: ["AV Setup", "Lighting"],
    rating: 4.6,
    documents: [],
    notes: "UW Approved",
  },
  {
    _id: "7",
    vendorId: "VEND007",
    name: "Party Decorators",
    email: "party@email.com",
    phone: "(777) 777-7777",
    address: {
      street: "159 Party St",
      city: "Bothell",
      state: "WA",
      zip: "98011",
      country: "USA",
    },
    website: "https://partydecorators.com",
    description: "Creative decorations and event setup for all occasions.",
    category: "Decor",
    status: "active",
    contactPerson: "Oscar White",
    productsOrServices: ["Decor", "Setup"],
    rating: 4.4,
    documents: [],
    notes: "",
  },
];

export default function VendorDirectory() {
  const [expanded, setExpanded] = useState();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left: Directory and Filters */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-extrabold mb-1">Vendor Directory</h1>
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
                  <span className="text-green-600 font-semibold">$$</span>
                </div>
                <div className="flex gap-2 text-xs text-gray-500 mb-2">
                  <span>Pick Up</span>
                  <span>Delivery</span>
                </div>
                <div className="text-xs mb-1"><b>Phone Number:</b> {vendors.find(v => v._id === expanded)?.phone}</div>
                <div className="text-xs mb-1"><b>Email:</b> {vendors.find(v => v._id === expanded)?.email}</div>
                <div className="text-xs mb-1"><b>Hours:</b> {vendors.find(v => v._id === expanded)?.hours || '8 AM - 9PM'}</div>
                <div className="text-xs mb-1"><b>Address:</b> {vendors.find(v => v._id === expanded)?.address?.street}, {vendors.find(v => v._id === expanded)?.address?.city}, {vendors.find(v => v._id === expanded)?.address?.state} {vendors.find(v => v._id === expanded)?.address?.zip}</div>
                <div className="text-xs mb-2"><b>Overview:</b> {vendors.find(v => v._id === expanded)?.description}</div>
                <button className="w-full bg-[#179b98] hover:bg-[#117c7a] text-white font-bold py-2 rounded-lg mb-2 transition">BOOK NOW</button>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                  <span className="text-xs text-gray-600">UW Approved</span>
                </div>
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