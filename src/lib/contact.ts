export const WHATSAPP_NUMBER = "5511999999999";

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(
    message ?? "Olá! Vim pelo site da Madetoys e gostaria de saber mais sobre os brinquedos.",
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
