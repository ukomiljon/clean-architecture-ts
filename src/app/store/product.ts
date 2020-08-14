

import { Product } from '../../domain/entities';
import ProductUseCase from '../../domain/use.cases/product.usecase'

import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { lazyInject } from '../../inversify.config';
 
export interface ProductState {
  items: Product[];
}

@Module({
  name: "product",
  namespaced: true
})
export class ProductStore extends VuexModule implements ProductState {
  public items: Product[] = [];

  @lazyInject("ProductUseCase")
  private productUseCase!: ProductUseCase;

  @Mutation
  setItems(items: Product[]) {
    this.items = items;
  }

  @Action
  async fetchItems() {
    const list = await this.productUseCase.getAll().toPromise();
    this.setItems(list);
  } 
}
