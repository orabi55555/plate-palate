// export interface Cart {
//   items: Array<CartItem>;
// }

// export interface CartItem {
//   food: string;
//   name: string;
//   totalPrice: number;
//   quantity: number;
//   id: number;
// }
import { CartItem } from "./CartItem";

export class Cart{
  items:CartItem[] = [];
  totalPrice:number = 0;
  totalCount:number = 0;
}