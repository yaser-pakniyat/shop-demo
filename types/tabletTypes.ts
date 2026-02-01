export interface Tablet {
  id: number;
  tabletName: string;
  address: string;
  price: number;
}

export interface TabletState {
  tablets: Array<Tablet>;
  pending: boolean;
  error: string | null;
}
