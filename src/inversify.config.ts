import "reflect-metadata";
import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";


import { getModule } from "vuex-module-decorators";
import CartRepository from './domain/repositories/cartRepository';
import CartRepositoryImpl from './data/mock.data/cartRepositoryImpl';
import ProductRepository from './domain/repositories/productRepository';
import ProductRepositoryImpl from './data/mock.data/productRepositoryImpl';
import CartUseCase, { CartUseCaseImpl } from './domain/use.cases/cart.usecase';
import ProductUseCase, { ProductUseCaseImpl } from './domain/use.cases/product.usecase';


const container = new Container();

container
  .bind<CartRepository>("CartRepository")
  .to(CartRepositoryImpl)
  .inSingletonScope();
container
  .bind<ProductRepository>("ProductRepository")
  .to(ProductRepositoryImpl)
  .inSingletonScope();
container
  .bind<ProductUseCase>("ProductUseCase")
  .to(ProductUseCaseImpl)
  .inSingletonScope();
container
  .bind<CartUseCase>("CartUseCase")
  .to(CartUseCaseImpl)
  .inSingletonScope();



const { lazyInject } = getDecorators(container);
export { lazyInject, container };
