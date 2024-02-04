import { Request, Response, NextFunction } from "express";
import { getAllProducts } from "../services/product.service";
import { Product } from "../entities";

export async function getProducts(req: Request, res: Response<Product[]>, next: NextFunction) {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        next(error);
    }
}
