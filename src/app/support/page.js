import React from "react";

export default function SupportPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f9fa]">
      <div className="bg-white rounded-xl shadow-lg p-10 w-[400px] flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2 text-[#2596be]">Support Ticket</h2>
        <p className="text-gray-500 text-sm mb-6 text-center">Submit a request and our team will get back to you as soon as possible.</p>
        <form className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-gray-700 text-sm mb-1">Full Name</label>
            <input id="name" name="name" type="text" required className="rounded-full px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-300 shadow" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-700 text-sm mb-1">Email</label>
            <input id="email" name="email" type="email" required className="rounded-full px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-300 shadow" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="subject" className="text-gray-700 text-sm mb-1">Subject</label>
            <input id="subject" name="subject" type="text" required className="rounded-full px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-300 shadow" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-gray-700 text-sm mb-1">Message</label>
            <textarea id="message" name="message" rows={4} required className="rounded-xl px-3 py-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-300 shadow resize-none" />
          </div>
          <button type="submit" className="rounded-full bg-[#2596be] text-white py-2 mt-2 shadow-md hover:bg-[#183d4a] transition-all text-lg font-normal">Submit Ticket</button>
        </form>
      </div>
    </div>
  );
}
