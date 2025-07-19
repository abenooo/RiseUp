export interface Product {
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
  price: number;
  currency: string;
  interval?: 'month' | 'year';
}

export const products: Product[] = [
  {
    priceId: 'price_1MC0j3IIUWWjooOw5Dlj9ikX',
    name: 'Monthly subscription',
    description: 'Access to all premium features with monthly billing',
    mode: 'subscription',
    price: 40.00,
    currency: 'usd',
    interval: 'month'
  }
];

export function getProductByPriceId(priceId: string): Product | undefined {
  return products.find(product => product.priceId === priceId);
}