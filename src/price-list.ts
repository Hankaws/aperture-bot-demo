import { formatPrice } from "./format";
import { products, type Product } from "./products";

export function priceLine(product: Product): string {
  return `${product.name}: ${formatPrice(product.priceCents)}`;
}

export function priceList(items: Product[] = products): string {
  return items.map(priceLine).join("\n");
}
