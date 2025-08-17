import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const message = searchParams.get("message");

  const number = process.env.WHATSAPP_NUMBER; // Definido na Vercel ou Netlify

  if (!number) {
    return NextResponse.json(
      { error: "Número do WhatsApp não definido" },
      { status: 500 }
    );
  }

  if (!message) {
    return NextResponse.json(
      { error: "Mensagem não definida" },
      { status: 400 }
    );
  }

  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  return NextResponse.redirect(url);
}
