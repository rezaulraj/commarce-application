export class Product {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly price: number,

    public readonly images?: string[],
    public readonly category?: string,
    public readonly stock?: number,
    public readonly createdAt?: Date
  ) {}
}
