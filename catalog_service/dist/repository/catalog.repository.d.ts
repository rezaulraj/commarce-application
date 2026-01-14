import type catalogRepositoryInterface = require("../interface/catalogRepository.interface");
import type { Product } from "../models/Product.model";
export declare class CatalogRepository implements catalogRepositoryInterface.ICatalogRepository {
    create(data: Product): Promise<Product>;
    update(data: Product): Promise<Product>;
    delete(id: any): Promise<void>;
    find(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
}
//# sourceMappingURL=catalog.repository.d.ts.map