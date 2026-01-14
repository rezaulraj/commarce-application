import type { ICatalogRepository } from "../interface/catalogRepository.interface";
import type { Product } from "../models/Product.model.js";
export declare class MockCatalogRepository implements ICatalogRepository {
    create(data: Product): Promise<Product>;
    update(data: Product): Promise<Product>;
    delete(id: any): Promise<void>;
    find(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
}
//# sourceMappingURL=mockCatalog.repository.d.ts.map