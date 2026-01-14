import type { ICatalogRepository } from "../interface/catalogRepository.interface";
export declare class CatalogService {
    private _repository;
    constructor(repository: ICatalogRepository);
    createProduct(input: any): void;
    updateProduct(input: any): void;
    getProducts(limite: number, offset: number): void;
    getProduct(id: number): void;
    deleteProduct(id: number): void;
}
//# sourceMappingURL=catalog.service.d.ts.map