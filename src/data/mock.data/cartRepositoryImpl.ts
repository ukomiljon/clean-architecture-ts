import { Observable  } from "rxjs"; 
import { of } from 'rxjs/observable/of'
import { tap, map } from "rxjs/operators";
import { injectable } from "inversify";
 
import { Cart, Product } from '../../domain/entities';
import CartRepository from '../../domain/repositories/cartRepository';

@injectable()
export default class CartRepositoryImpl implements CartRepository {

    private _carts: Cart[] = [];

    public getAll(): Observable<Cart[]> {        
        return of(null).pipe(
            map(() => this._carts)
        )
    }

    public addItemToCart(product: Product, quantity: number): Observable<void> {
        this._carts.push({ product, quantity });
        product.inventory-- 
        return of(1).pipe(
            // delay(1000),
            map(() => {
                return;
            })
        );
    }

    public getTotalCarts(): Observable<number> {
        const val = this._carts.length;
        return of(null).pipe(
            // delay(1000),
            map(() => val)
        );
    } 

    checkout(): Observable<void> {
        return of(null).pipe(
            tap(() => {
                this._carts = []
            }),
            map(() => {
                return
            })
        );
    }
}
