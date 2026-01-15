import { ICatalogRepository } from "../../interface/catalogRepository.interface";
import { Product } from "../../models/Product.model";
import { MockCatalogRepository } from "../../repository/mockCatalog.repository";
import { CatalogService } from "../catalog.service";

describe("catalogService", () => {
  let repository: ICatalogRepository;

  beforeEach(() => {
    repository = new MockCatalogRepository();
  });

  afterEach(() => {
    repository = {} as MockCatalogRepository;
  });

  describe("createProduct", () => {
    test("should create product", async () => {
      const service = new CatalogService(repository);
      const requestBody = {
        title: "New Job Appair",
        description: "IT Jobs Software developer",
        images: ["Company Images"],
        category: "IT Jobs",
        stock: 10,
      };
      const result = await service.createProduct(requestBody);
      expect(result).toMatchObject({
        id: expect.any(Number),
        title: expect.any(String),
        description: expect.any(String),
        images: expect.any(Array),
        category: expect.any(String),
        stock: expect.any(Number),
      });
    });

    test("should throw error with unable to create product", async () => {
      const service = new CatalogService(repository);
      const requestBody = {
        title: "New Job Appair",
        description: "IT Jobs Software developer",
        images: ["Company Images"],
        category: "IT Jobs",
        stock: 10,
      };

      jest
        .spyOn(repository, "create")
        .mockImplementationOnce(() => Promise.resolve({} as Product));

      await expect(service.createProduct(requestBody)).rejects.toThrow(
        "unable to create product"
      );
    });

    test("should throw error with product already exits", async () => {
      const service = new CatalogService(repository);
      const requestBody = {
        title: "New Job Appair",
        description: "IT Jobs Software developer",
        images: ["Company Images"],
        category: "IT Jobs",
        stock: 10,
      };

      jest
        .spyOn(repository, "create")
        .mockImplementationOnce(() =>
          Promise.reject(new Error("product already exits"))
        );

      await expect(service.createProduct(requestBody)).rejects.toThrow(
        "product already exits"
      );
    });
  });

  //   Update product test case
  describe("updateProduct", () => {
    test("should product update", async () => {
      const service = new CatalogService(repository);
      const requestBody = {
        id: 112,
        title: "New Job Appair",
        description: "IT Jobs Software developer",
        images: ["Company Images"],
        category: "IT Jobs",
        stock: 15,
      };
      const result = await service.updateProduct(requestBody);
      expect(result).toMatchObject(requestBody);
    });

    // if product does not exit the the data base then this test case work
    test("should throw error with product does not exits", async () => {
      const service = new CatalogService(repository);

      jest
        .spyOn(repository, "update")
        .mockImplementationOnce(() =>
          Promise.reject(new Error("product does not exits"))
        );

      await expect(service.updateProduct({})).rejects.toThrow(
        "product does not exits"
      );
    });
  });

  describe("getProducts", ()=>{
   test("should get products by offset and limit")
  })
});
