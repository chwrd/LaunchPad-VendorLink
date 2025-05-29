import { NextResponse } from "next/server";
import dbConnect from "../../../../dbConnect";
import Vendor from "../../../../models/vendor.model";

// CREATE
export async function POST(req, context) {
  try {
    await dbConnect();
    const { id: vendorId } = await context.params;
    const body = await req.json();
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) throw new Error("Vendor not found");

    // Ensure menuId and itemId are set
    if (!body.menuId) {
      body.menuId = `menu_${Date.now()}`;
    }
    if (Array.isArray(body.items)) {
      body.items = body.items.map(item => ({
        ...item,
        itemId: item.itemId || `item_${Math.random().toString(36).substr(2, 9)}`
      }));
    }
    vendor.menu.push(body);
    await vendor.save();
    const newMenu = vendor.menu[vendor.menu.length - 1];
    return NextResponse.json({ success: true, menu: newMenu });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// READ (all)
export async function GET(req, context) {
  try {
    await dbConnect();
    const { id: vendorId } = await context.params;
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) throw new Error("Vendor not found");
    return NextResponse.json({ success: true, menus: vendor.menu });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// UPDATE
export async function PUT(req, context) {
  try {
    await dbConnect();
    const { id: vendorId } = await context.params;
    const body = await req.json();
    const { _id, ...update } = body;
    if (!_id) throw new Error("Missing menu _id");
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) throw new Error("Vendor not found");
    const menu = vendor.menu.id(_id);
    if (!menu) throw new Error("Menu not found");
    Object.assign(menu, update);
    await vendor.save();
    return NextResponse.json({ success: true, menu });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// PATCH (partial update for menu by menuId)
export async function PATCH(req, context) {
  try {
    await dbConnect();
    const { id: vendorId } = await context.params;
    const body = await req.json();
    const { menuId, ...update } = body;
    if (!menuId) throw new Error("Missing menuId for PATCH");
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) throw new Error("Vendor not found");
    const menu = vendor.menu.find(m => m.menuId === menuId);
    if (!menu) throw new Error("Menu not found");
    Object.assign(menu, update);
    await vendor.save();
    return NextResponse.json({ success: true, menu });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// DELETE
export async function DELETE(req, context) {
  try {
    await dbConnect();
    const { id: vendorId } = await context.params;
    const body = await req.json();
    const { _id } = body;
    if (!_id) throw new Error("Missing menu _id");
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) throw new Error("Vendor not found");
    const menu = vendor.menu.id(_id);
    if (!menu) throw new Error("Menu not found");
    menu.remove();
    await vendor.save();
    return NextResponse.json({ success: true, menu });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
