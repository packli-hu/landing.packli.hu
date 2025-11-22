import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const voucher = req.nextUrl.searchParams.get("voucher");

    const response = await axios.post(
      "https://app.packli.hu/api/landing/pricing",
      { voucher }
    );
    return NextResponse.json(response.data, { status: response.status });
  } catch (e) {
    return NextResponse.json({ error: "Hibás kérés" }, { status: 400 });
  }
}
