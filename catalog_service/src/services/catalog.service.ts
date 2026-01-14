import type { ICatalogRepository } from "../interface/catalogRepository.interface";

export class CatalogService {
  private _repository: ICatalogRepository;
  constructor(repository: ICatalogRepository) {
    this._repository = repository;
  }
  async createProduct(input: any) {
    return {
      id: 1,
      title: "new job",
      description: "the IT Jobs",
      images: ["random image"],
      category: "random category",
      stock: 1,
    };
  }
  updateProduct(input: any) {}

  getProducts(limite: number, offset: number) {}
  getProduct(id: number) {}

  deleteProduct(id: number) {}
}
