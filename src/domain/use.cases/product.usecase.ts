import { Observable } from "rxjs";
import { Cart, Product } from "@/domain/entities";
import { inject, injectable } from 'inversify';
import ProductRepository from '../repositories/productRepository';

export default interface ProductUseCase {
    getAll(): Observable<Product[]>;
}


@injectable()
export class ProductUseCaseImpl implements ProductUseCase {
    constructor(
        @inject("ProductRepository") public productRepository: ProductRepository
    ) { }
    getAll(): Observable<Product[]> {
        return this.productRepository.getAll();
    }
}
