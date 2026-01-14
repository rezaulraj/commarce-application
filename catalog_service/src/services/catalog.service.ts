import type { ICatalogRepository } from "../interface/catalogRepository.interface";

export class CatalogService {
private _repository: ICatalogRepository;
    constructor(repository: ICatalogRepository){
        this._repository = repository
    } 
  createProduct(input: any) {}
  updateProduct(input: any) {}

  getProducts(limite: number, offset: number) {}
  getProduct(id: number) {}

  deleteProduct(id: number) {}
}
