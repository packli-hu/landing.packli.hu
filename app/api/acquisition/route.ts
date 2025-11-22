import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { voucher } = body;

    return NextResponse.json({ error: "Hibás kérés" }, { status: 400 });
  } catch (e) {
    return NextResponse.json({ error: "Hibás kérés" }, { status: 400 });
  }
}
