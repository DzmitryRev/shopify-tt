declare namespace NodeJS {
    interface ProcessEnv {
        SHOPIFY_API_TOKEN: string;
        SHOPIFY_STORE_URL: string;
        DATABASE_URL: string;
    }
}
