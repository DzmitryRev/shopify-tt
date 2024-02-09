import { useEffect, useRef, MutableRefObject } from "react";

type ImageCanvasProps = {
    imageUrl: string;
};

export function ImageCanvas({ imageUrl }: ImageCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>() as MutableRefObject<HTMLCanvasElement>;
    const image = new Image();
    image.src = imageUrl;

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        image.onload = () => {
            context?.drawImage(image, 0, 0, image.width, image.height);
        };
    }, []);

    return <canvas ref={canvasRef} className="product__image" width={1200} height={890}></canvas>;
}
