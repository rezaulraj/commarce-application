export declare class Product {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly price: number;
    readonly images?: string[] | undefined;
    readonly category?: string | undefined;
    readonly stock?: number | undefined;
    readonly createdAt?: Date | undefined;
    constructor(id: string, title: string, description: string, price: number, images?: string[] | undefined, category?: string | undefined, stock?: number | undefined, createdAt?: Date | undefined);
}
//# sourceMappingURL=Product.model.d.ts.map