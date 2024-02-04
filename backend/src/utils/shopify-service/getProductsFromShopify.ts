import { addSeveralProducts, cleanProductsDB } from "../../services/product.service";
import { shopifyApiRequest } from "./shopifyRequest";

export async function getProductsFromShopify() {
    await cleanProductsDB();
    let products = await shopifyApiRequest.products();
    await addSeveralProducts(products);
}
