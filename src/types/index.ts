export interface IItem {
  id: number;
  name: string;
  images: string[];
  available_qty: number;
  priceUSD: number;
  colors: string[];
  tags: string[];
  sale: boolean;
  salePriceUSD?: number;
}
