export interface Product {
    id?: string;
    name: string;
    price: number;
    inventory:number;
    description?: string;
    thumbnailUrl?: string;
  }
  
  export interface Cart {
    product: Product;
    quantity: number;
  }