import { NextResponse } from "next/server";
import dbConnect from "../../../dbConnect";
import Vendor from "../../../models/vendor.model";

// GET /api/vendor/[id]
export async function GET(req, context) {
  try {
    await dbConnect();
    const { id } = await context.params;
    const vendor = await Vendor.findOne({ vendorId: id });
    if (!vendor) {
      return NextResponse.json({ success: false, error: "Vendor not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, vendor });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
