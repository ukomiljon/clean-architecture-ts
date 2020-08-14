import { Observable } from "rxjs";
import { Cart, Product } from "@/domain/entities";
import { inject, injectable } from 'inversify';
import CartRepository from '../repositories/cartRepository';
import ProductRepository from '../repositories/productRepository';

export default interface CartUseCase {
    addItemToCart(product: Product, quantity: number): Observable<void>;

    getAll(): Observable<Cart[]>;

    checkout(): Observable<void>;

    getTotalCarts(): Observable<number>;
}

@injectable()
export class CartUseCaseImpl implements CartUseCase {
    constructor(
        @inject("CartRepository") private cartRepository: CartRepository,
        @inject("ProductRepository") private productRepository: ProductRepository
    ) {
    }
    addItemToCart(product: Product, quantity: number): Observable<void> {
        throw new Error('Method not implemented.');
    }
    getAll(): Observable<Cart[]> {
        return this.cartRepository.getAll()
    }
    checkout(): Observable<void> {
        return this.cartRepository.checkout();
    }
    getTotalCarts(): Observable<number> {
        return this.cartRepository.getTotalCarts()
    } 
}


