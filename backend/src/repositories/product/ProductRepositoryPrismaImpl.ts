import { Product } from "../../entities";
import { prisma } from "../../utils/prisma-db";
import { ProductRepository } from "./product.repository";

export class ProductRepositoryPrismaImpl implements ProductRepository {
    async getAllProducts(): Promise<Product[]> {
        const products = await prisma.product.findMany();
        return products;
    }
    async createProduct(body: Product): Promise<Product> {
        const product = await prisma.product.create({ data: body });
        return product;
    }
    async removeAllProducts(): Promise<void> {
        await prisma.product.deleteMany();
    }
}

export const ProductRepositoryInstance = new ProductRepositoryPrismaImpl();
