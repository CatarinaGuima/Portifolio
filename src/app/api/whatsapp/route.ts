import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const message = searchParams.get("message") || "";
  
  // número guardado só no servidor
  const phone = process.env.WHATSAPP_NUMBER; 
  
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return NextResponse.redirect(url);
}
