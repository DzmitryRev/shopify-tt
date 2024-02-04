import { Product } from "../entities";
import { ProductRepositoryInstance } from "../repositories";
import { convertShopifyProductToProduct } from "../utils/convertShopifyProductToProduct";
import { ShopifyProduct } from "../utils/shopify-service";

export async function getAllProducts(): Promise<Product[]> {
    return await ProductRepositoryInstance.getAllProducts();
}

export async function addSeveralProducts(products: ShopifyProduct[]): Promise<Product[]> {
    const createdProducts: Product[] = [];
    products.forEach(async (product) => {
        let createdProduct = await ProductRepositoryInstance.createProduct(
            convertShopifyProductToProduct(product)
        );
        createdProducts.push(createdProduct);
    });
    return createdProducts;
}

export async function cleanProductsDB(): Promise<void> {
    await ProductRepositoryInstance.removeAllProducts();
}
