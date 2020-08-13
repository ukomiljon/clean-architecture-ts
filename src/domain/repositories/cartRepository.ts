import { Observable } from "rxjs";
import { Cart, Product } from "@/domain/entities";

export default interface CartRepository {
  addItemToCart(product: Product, quantity: number): Observable<void>;

  getAll(): Observable<Cart[]>; 
 
  checkout(): Observable<void>;

  getTotalCarts():Observable<number>;
}
