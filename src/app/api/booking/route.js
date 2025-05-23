import { NextResponse } from "next/server";
import dbConnect from "../../dbConnect";
import Booking from "../../models/booking.model";

// This API route is retained for booking submissions from the vendor list page.

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const booking = await Booking.create(body);
    return NextResponse.json({ success: true, booking });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await dbConnect();
    const bookings = await Booking.find();
    return NextResponse.json({ success: true, bookings });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const { _id, ...update } = body;
    if (!_id) throw new Error("Missing booking _id");
    const booking = await Booking.findByIdAndUpdate(_id, update, { new: true });
    if (!booking) throw new Error("Booking not found");
    return NextResponse.json({ success: true, booking });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await dbConnect();
    const { _id } = await req.json();
    if (!_id) throw new Error("Missing booking _id");
    const booking = await Booking.findByIdAndDelete(_id);
    if (!booking) throw new Error("Booking not found");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
