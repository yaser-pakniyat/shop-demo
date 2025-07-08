export interface Mobile {
  id: number;
  mobileName: string;
  address: string;
  price: number;
}

export interface MobileState {
  mobiles: Array<Mobile>;
  pending: boolean;
  error: string | null;
}
