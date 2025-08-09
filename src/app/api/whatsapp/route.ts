import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const phoneNumber = process.env.WHATSAPP_NUMBER;
  const url = new URL(request.url);
  const customMessage =
    url.searchParams.get('message') ||
    'Olá! Gostaria de entrar em contato sobre seu trabalho.';

  if (!phoneNumber) {
    return NextResponse.json(
      { error: 'Serviço de WhatsApp não disponível no momento' },
      { status: 503 }
    );
  }

  const encodedMessage = encodeURIComponent(customMessage);

  console.log('WhatsApp contact initiated');

  // Redireciona para o WhatsApp com a mensagem codificada
  return NextResponse.redirect(
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  );
}
