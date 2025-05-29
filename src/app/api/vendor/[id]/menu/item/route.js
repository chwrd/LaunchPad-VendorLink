import { NextResponse } from "next/server";
import dbConnect from "../../../../../dbConnect";
import Vendor from "../../../../../models/vendor.model";

// CREATE Item
export async function POST(req, { params }) {
  try {
    await dbConnect();
    const vendorId = params.id;
    const { menuId, ...itemData } = await req.json();
    if (!menuId) throw new Error("Missing menuId");
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) throw new Error("Vendor not found");
    const menu = vendor.menus.id(menuId);
    if (!menu) throw new Error("Menu not found");
    menu.items.push(itemData);
    await vendor.save();
    const newItem = menu.items[menu.items.length - 1];
    return NextResponse.json({ success: true, item: newItem });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// READ all Items in a Menu
export async function GET(req, { params }) {
  try {
    await dbConnect();
    const vendorId = params.id;
    const { searchParams } = new URL(req.url);
    const menuId = searchParams.get("menuId");
    if (!menuId) throw new Error("Missing menuId");
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) throw new Error("Vendor not found");
    const menu = vendor.menus.id(menuId);
    if (!menu) throw new Error("Menu not found");
    return NextResponse.json({ success: true, items: menu.items });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// UPDATE Item
export async function PUT(req, { params }) {
  try {
    await dbConnect();
    const vendorId = params.id;
    const { menuId, _id, ...update } = await req.json();
    if (!menuId || !_id) throw new Error("Missing menuId or item _id");
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) throw new Error("Vendor not found");
    const menu = vendor.menus.id(menuId);
    if (!menu) throw new Error("Menu not found");
    const item = menu.items.id(_id);
    if (!item) throw new Error("Item not found");
    Object.assign(item, update);
    await vendor.save();
    return NextResponse.json({ success: true, item });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// DELETE Item
export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const vendorId = params.id;
    const { menuId, _id } = await req.json();
    if (!menuId || !_id) throw new Error("Missing menuId or item _id");
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) throw new Error("Vendor not found");
    const menu = vendor.menus.id(menuId);
    if (!menu) throw new Error("Menu not found");
    const item = menu.items.id(_id);
    if (!item) throw new Error("Item not found");
    item.remove();
    await vendor.save();
    return NextResponse.json({ success: true, item });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
