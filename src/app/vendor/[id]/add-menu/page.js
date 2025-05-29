"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function AddMenuPage() {
  const router = useRouter();
  const params = useParams();
  const vendorId = params.id;
  const [form, setForm] = useState({
    name: "",
    description: "",
    type: "regular",
    pricing: { deliveryFee: 0, serviceFee: 0, additionalFee: 0, taxRate: 0 },
    availability: { isAvailable: true, startTime: "", endTime: "", daysAvailable: [] },
    items: [
      { name: "", price: 0, unit: "", description: "", type: "", category: "" }
    ]
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (name.startsWith("pricing.")) {
      setForm(f => ({ ...f, pricing: { ...f.pricing, [name.split(".")[1]]: type === "number" ? Number(value) : value } }));
    } else if (name.startsWith("availability.")) {
      setForm(f => ({ ...f, availability: { ...f.availability, [name.split(".")[1]]: type === "checkbox" ? checked : value } }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  }

  function handleItemChange(idx, e) {
    const { name, value } = e.target;
    setForm(f => {
      const items = [...f.items];
      items[idx] = { ...items[idx], [name]: name === "price" ? Number(value) : value };
      return { ...f, items };
    });
  }

  function addItem() {
    setForm(f => ({ ...f, items: [...f.items, { name: "", price: 0, unit: "", description: "", type: "", category: "" }] }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await fetch(`/api/vendor/${vendorId}/menu`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        router.push(`/vendor/${vendorId}`);
      } else {
        setError(data.error || "Failed to create menu");
      }
    } catch (err) {
      setError("Failed to create menu");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#f8fafc] flex flex-col items-center py-16 px-2">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-12 border border-[#e0e0e0]">
        <h1 className="text-3xl font-extrabold mb-8 text-[#183d4a] text-center tracking-tight">Add New Menu</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block font-semibold mb-2 text-[#183d4a]">Menu Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full border-2 border-[#b2dfdb] rounded-lg px-4 py-3 focus:outline-none focus:border-[#179b98] bg-[#f8fafc]" />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-[#183d4a]">Type</label>
              <select name="type" value={form.type} onChange={handleChange} className="w-full border-2 border-[#b2dfdb] rounded-lg px-4 py-3 bg-[#f8fafc] focus:outline-none focus:border-[#179b98]">
                <option value="regular">Regular</option>
                <option value="special">Special</option>
                <option value="seasonal">Seasonal</option>
                <option value="catering">Catering</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold mb-2 text-[#183d4a]">Description</label>
              <textarea name="description" value={form.description} onChange={handleChange} className="w-full border-2 border-[#b2dfdb] rounded-lg px-4 py-3 bg-[#f8fafc] focus:outline-none focus:border-[#179b98] min-h-[60px]" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <label className="block font-semibold mb-2 text-[#183d4a]">Delivery Fee</label>
              <input name="pricing.deliveryFee" type="text" inputMode="decimal" pattern="^\\d*(\\.\\d{0,2})?$" placeholder="e.g. 3.00" value={form.pricing.deliveryFee} onChange={handleChange} className="w-full border-2 border-[#b2dfdb] rounded-lg px-4 py-3 bg-[#f8fafc] focus:outline-none focus:border-[#179b98]" />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-[#183d4a]">Service Fee</label>
              <input name="pricing.serviceFee" type="text" inputMode="decimal" pattern="^\\d*(\\.\\d{0,2})?$" placeholder="e.g. 1.50" value={form.pricing.serviceFee} onChange={handleChange} className="w-full border-2 border-[#b2dfdb] rounded-lg px-4 py-3 bg-[#f8fafc] focus:outline-none focus:border-[#179b98]" />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-[#183d4a]">Additional Fee</label>
              <input name="pricing.additionalFee" type="text" inputMode="decimal" pattern="^\\d*(\\.\\d{0,2})?$" placeholder="e.g. 2.00" value={form.pricing.additionalFee} onChange={handleChange} className="w-full border-2 border-[#b2dfdb] rounded-lg px-4 py-3 bg-[#f8fafc] focus:outline-none focus:border-[#179b98]" />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-[#183d4a]">Tax Rate</label>
              <input name="pricing.taxRate" type="text" inputMode="decimal" pattern="^\\d*(\\.\\d{0,4})?$" placeholder="e.g. 0.09" value={form.pricing.taxRate} onChange={handleChange} className="w-full border-2 border-[#b2dfdb] rounded-lg px-4 py-3 bg-[#f8fafc] focus:outline-none focus:border-[#179b98]" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block font-semibold mb-2 text-[#183d4a]">Start Time</label>
              <input name="availability.startTime" value={form.availability.startTime} onChange={handleChange} className="w-full border-2 border-[#b2dfdb] rounded-lg px-4 py-3 bg-[#f8fafc] focus:outline-none focus:border-[#179b98]" />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-[#183d4a]">End Time</label>
              <input name="availability.endTime" value={form.availability.endTime} onChange={handleChange} className="w-full border-2 border-[#b2dfdb] rounded-lg px-4 py-3 bg-[#f8fafc] focus:outline-none focus:border-[#179b98]" />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-2 text-[#183d4a]">Available</label>
            <input name="availability.isAvailable" type="checkbox" checked={form.availability.isAvailable} onChange={handleChange} className="mr-2 align-middle" />
            <span className="text-[#179b98] font-medium">{form.availability.isAvailable ? "Yes" : "No"}</span>
          </div>
          <div>
            <label className="block font-semibold mb-3 text-[#183d4a]">Menu Items</label>
            <div className="space-y-8">
              {form.items.map((item, idx) => (
                <div key={idx} className="border-2 border-[#b2dfdb] rounded-xl p-6 bg-[#f8fafc] shadow flex flex-col md:flex-row md:items-end gap-6">
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium mb-1">Item Name</label>
                      <input name="name" value={item.name} onChange={e => handleItemChange(idx, e)} required className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Price</label>
                      <input name="price" type="text" inputMode="decimal" pattern="^\\d*(\\.\\d{0,2})?$" placeholder="e.g. 9.99" value={item.price} onChange={e => handleItemChange(idx, e)} required className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Unit</label>
                      <input name="unit" placeholder="e.g. each, hour, day" value={item.unit} onChange={e => handleItemChange(idx, e)} className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Category</label>
                      <input name="category" placeholder="e.g. food, service, equipment" value={item.category} onChange={e => handleItemChange(idx, e)} className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Image URL</label>
                      <input name="image" placeholder="Image URL (optional)" value={item.image || ""} onChange={e => handleItemChange(idx, e)} className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Type <span className="text-gray-400">(optional)</span></label>
                      <input name="type" placeholder="Type (optional)" value={item.type} onChange={e => handleItemChange(idx, e)} className="w-full border rounded px-3 py-2" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block font-medium mb-1">Description</label>
                    <input name="description" placeholder="Description" value={item.description} onChange={e => handleItemChange(idx, e)} className="w-full border rounded px-3 py-2" />
                  </div>
                </div>
              ))}
            </div>
            <button type="button" onClick={addItem} className="mt-6 px-6 py-2 bg-[#179b98] text-white rounded-lg font-semibold hover:bg-[#117c7a] transition-colors shadow">+ Add Item</button>
          </div>
          {error && <div className="text-red-500 text-center font-semibold">{error}</div>}
          <button type="submit" className="w-full bg-[#179b98] text-white font-bold py-3 rounded-lg hover:bg-[#117c7a] transition-colors text-lg shadow" disabled={loading}>
            {loading ? "Creating..." : "Create Menu"}
          </button>
        </form>
      </div>
    </div>
  );
}
