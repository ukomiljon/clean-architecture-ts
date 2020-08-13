import "reflect-metadata";
import {Container} from "inversify";
import getDecorators from "inversify-inject-decorators";
 
 
import {getModule} from "vuex-module-decorators";
import CartRepository from './domain/repositories/cartRepository';
import CartRepositoryImpl from './data/mock.data/cartRepositoryImpl';
import ProductRepository from './domain/repositories/productRepository';
import ProductRepositoryImpl from './data/mock.data/productRepositoryImpl';
 

const container = new Container();

container
  .bind<CartRepository>("CartRepository")
  .to(CartRepositoryImpl)
  .inSingletonScope();
container
  .bind<ProductRepository>("ProductRepository")
  .to(ProductRepositoryImpl)
  .inSingletonScope();

 

const {lazyInject} = getDecorators(container);
export {lazyInject, container};
