-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "descriptionHtml" TEXT NOT NULL,
    "featuredImage" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");
