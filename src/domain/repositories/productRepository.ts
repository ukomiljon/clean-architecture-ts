import { Product } from "@/domain/entities";
import { Observable } from "rxjs";

export default interface ProductRepository {
  getAll(): Observable<Product[]>; 
}
