import { CartItem } from "./CartItem";

export class Order{
  userID!:number;
  items!: CartItem[];
  totalPrice!:number;
  mealid!:number;
  address!: string;
  paymentId!: string;
  createdAt!: string;
  status!: string;
}
