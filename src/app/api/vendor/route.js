import { NextResponse } from "next/server";
import dbConnect from "../../dbConnect";
import Vendor from "../../models/vendor.model";

// CREATE
export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    
    // If body is an array, use insertMany
    if (Array.isArray(body)) {
      // Validate required fields for each object
      for (const vendor of body) {
        const requiredFields = ["vendorId", "name"];
        for (const field of requiredFields) {
          if (!vendor[field]) {
            return NextResponse.json({ success: false, error: `Missing required field: ${field}` }, { status: 400 });
          }
        }
      }
      const vendors = await Vendor.insertMany(body);
      return NextResponse.json({ success: true, vendors });
    } 
    // Single object
    else if (typeof body === 'object') {
      const requiredFields = ["vendorId", "name"];
      for (const field of requiredFields) {
        if (!body[field]) {
          return NextResponse.json({ success: false, error: `Missing required field: ${field}` }, { status: 400 });
        }
      }
      const vendor = await Vendor.create(body);
      return NextResponse.json({ success: true, vendor });
    }
    
    return NextResponse.json({ success: false, error: "Invalid request body" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// READ (all)
export async function GET(req) {
  try {
    await dbConnect();
    const vendors = await Vendor.find();
    return NextResponse.json({ success: true, vendors });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// UPDATE
export async function PUT(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const { _id, ...update } = body;
    if (!_id) throw new Error("Missing vendor _id");
    const vendor = await Vendor.findByIdAndUpdate(_id, update, { new: true });
    if (!vendor) throw new Error("Vendor not found");
    return NextResponse.json({ success: true, vendor });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// DELETE
export async function DELETE(req) {
  try {
    await dbConnect();
    const { _id } = await req.json();
    if (!_id) throw new Error("Missing vendor _id");
    const vendor = await Vendor.findByIdAndDelete(_id);
    if (!vendor) throw new Error("Vendor not found");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
