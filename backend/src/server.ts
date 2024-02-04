import express from "express";
import "dotenv/config";
import cors from "cors";
import { productRouter } from "./routes";
import { errorMiddleware } from "./middlewares";
import { getProductsFromShopify } from "./utils/shopify-service";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", productRouter);

app.use(errorMiddleware);

export default async function runApp() {
    await getProductsFromShopify().then(() => {
        app.listen(3000, () => {
            console.log("Server is running");
        });
    });
}
