import { ImageCanvas } from "../ImageCanvas/ImageCanvas";
import "./Product.css";

type ProductProps = {
    descriptionHtml: string;
    featuredImage: string;
};

export function Product({ descriptionHtml, featuredImage }: ProductProps) {
    return (
        <article className="product">
            <div className="product__image-container">
                <ImageCanvas imageUrl={featuredImage} />
            </div>
            <div
                className="product__info"
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            ></div>
        </article>
    );
}
