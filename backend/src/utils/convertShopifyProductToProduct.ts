import { Product } from "../entities";
import { ShopifyProduct } from "./shopify-service";

export function convertShopifyProductToProduct(shopifyProduct: ShopifyProduct): Product {
    let product: Product = {
        id: shopifyProduct.id,
        descriptionHtml: shopifyProduct.descriptionHtml,
        featuredImage: shopifyProduct.featuredImage.url,
    };
    return product;
}
