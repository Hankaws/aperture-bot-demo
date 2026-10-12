import { describe, expect, it } from "vitest";
import { priceLine, priceList } from "./price-list";
import { cartTotal } from "./cart";
import { products } from "./products";

describe("price list", () => {
  it("lists every product", () => {
    expect(priceList().split("\n")).toHaveLength(products.length);
  });
  it("names the product on each line", () => {
    expect(priceLine(products[0]!)).toContain("Coffee mug");
  });
  it("totals the cart", () => {
    expect(cartTotal(products)).toContain("Total:");
  });
});
