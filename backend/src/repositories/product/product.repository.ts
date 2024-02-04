import { Product } from "../../entities";

export interface ProductRepository {
    getAllProducts(): Promise<Product[]>;
    createProduct(body: Product): Promise<Product>;
    removeAllProducts(): void;
}
