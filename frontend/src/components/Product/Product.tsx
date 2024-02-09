// import { useEffect, useMemo, useRef } from "react";
import { ImageCanvas } from "../ImageCanvas/ImageCanvas";
import "./Product.css";

type ProductProps = {
    descriptionHtml: string;
    featuredImage: string;
};

export function Product({ descriptionHtml, featuredImage }: ProductProps) {
    // const img = useMemo(() => new Image(), []);
    // const img = new Image();
    // img.src = featuredImage;

    // const canvasRef = useRef();

    // useEffect(() => {
    //     const canvas = canvasRef.current as unknown;
    //     if (canvas instanceof HTMLCanvasElement) {
    //         const ctx = canvas.getContext("2d");
    //         ctx?.drawImage(img, 0, 0, img.width, img.height);
    //     }
    // }, [img]);

    return (
        <article className="product">
            <div className="product__image-container">
                <ImageCanvas imageUrl={featuredImage} />
                {/* <canvas
                    className="product__image"
                    ref={canvasRef}
                    width={img.width}
                    height={img.height}
                ></canvas> */}
                {/* <canvas
                    className="product__image"
                    ref={canvasRef}
                    width={img.width}
                    height={img.height}
                ></canvas> */}
            </div>
            <div
                className="product__info"
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            ></div>
        </article>
    );
}
