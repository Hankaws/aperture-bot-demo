import { formatPrice } from "./format";
import type { Product } from "./products";

export function cartTotal(items: Product[]): string {
  const cents = items.reduce((sum, p) => sum + p.priceCents, 0);
  return `Total: ${formatPrice(cents)}`;
}
