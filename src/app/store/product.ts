

import { Product } from '../../domain/entities';

import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { lazyInject } from '../../inversify.config';
import ProductRepository from '../../domain/repositories/productRepository';


export interface ProductState {
  items: Product[];
}

@Module({
  name: "product",
  namespaced: true
})
export class ProductStore extends VuexModule implements ProductState {
  public items: Product[] = [];

  @lazyInject("ProductRepository")
  private productRepository!: ProductRepository;

  @Mutation
  setItems(items: Product[]) {
    this.items = items;
  }

  @Action
  async fetchItems() {
    const list = await this.productRepository.getAll().toPromise();
    this.setItems(list);
  }


  @Action
  async productInStock(product: any) {
    const value: boolean = await this.productRepository.isProductInStock(product).toPromise()
    return value
  }

}
