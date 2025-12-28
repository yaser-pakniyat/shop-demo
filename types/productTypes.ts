export interface Product {
  id: number;
  productName: string;
  address: string;
  price: number;
}

export interface ProductsState {
  products: Array<Product>;
  pending: boolean;
  error: string | null;
}
