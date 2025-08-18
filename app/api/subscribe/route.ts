import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, token } = body;

    if (!name || !email || !token) {
      return NextResponse.json({ error: "Hiányzó mező" }, { status: 400 });
    }

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Érvénytelen név" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Érvénytelen email" }, { status: 400 });
    }

    const secret = "6LeHGYYrAAAAAA9IMmddGqXPBlue-39BypiVQlDQ";
    const verifyUrl = "https://www.google.com/recaptcha/api/siteverify";

    const res = await fetch(verifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    });

    const verification = await res.json();

    if (!verification.success) {
      return NextResponse.json({ error: "reCAPTCHA hibás" }, { status: 400 });
    }

    const subscribeRes = await fetch("https://app.packli.hu/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${email}&name=${name}`,
    });

    const subscribeData = await subscribeRes.json();

    if (!subscribeData.success) {
      return NextResponse.json({ error: "szerver hiba" }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: `🎉 Köszönjük, hogy feliratkoztál!`,
    });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ error: "Hibás kérés" }, { status: 400 });
  }
}
