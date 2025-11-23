import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const reqOptions = {
      url: "https://app.packli.hu/api/landing/acquisition",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(body),
    };

    const response = await axios.request(reqOptions);

    return NextResponse.json(response.data, { status: response.status });
  } catch (e) {
    console.log("e", e);
    return NextResponse.json({ error: "Hibás kérés" }, { status: 400 });
  }
}
