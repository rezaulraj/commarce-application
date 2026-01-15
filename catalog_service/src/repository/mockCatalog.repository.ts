import type { ICatalogRepository } from "../interface/catalogRepository.interface";
import type { Product } from "../models/Product.model.js";

export class MockCatalogRepository implements ICatalogRepository {
  create(data: Product): Promise<Product> {
    const mockProduct = {
      ...data,
      id: 112,
    } as Product;
    return Promise.resolve(mockProduct);
  }
  update(data: Product): Promise<Product> {
    return Promise.resolve(data as unknown as Product);
  }
  delete(id: any): Promise<void> {
    throw new Error("Method not implemented.");
  }
  find(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: number): Promise<Product> {
    throw new Error("Method not implemented.");
  }
}
