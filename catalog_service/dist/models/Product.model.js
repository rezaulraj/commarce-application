"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    id;
    title;
    description;
    price;
    images;
    category;
    stock;
    createdAt;
    constructor(id, title, description, price, images, category, stock, createdAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.images = images;
        this.category = category;
        this.stock = stock;
        this.createdAt = createdAt;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.model.js.map