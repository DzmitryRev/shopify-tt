import { ShopifyProduct } from "./ProductFromShopify";
import { query } from "./query";

export const shopifyApiRequest = {
    products: async (): Promise<ShopifyProduct[]> => {
        const response = await fetch(process.env.SHOPIFY_STORE_URL as string, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Access-Token": process.env.SHOPIFY_API_TOKEN as string,
            },
            body: JSON.stringify({ query }),
        });
        const { data } = await response.json();
        return data.products.edges.map(({ node }: { node: ShopifyProduct }) => node);
    },
};
