import { useEffect, useMemo, useRef, MutableRefObject } from "react";

type ImageCanvasProps = {
    imageUrl: string;
};

export function ImageCanvas({ imageUrl }: ImageCanvasProps) {
    const img = useMemo(() => new Image(), []);
    img.src = imageUrl;

    const canvasRef = useRef<HTMLCanvasElement>() as MutableRefObject<HTMLCanvasElement>;

    useEffect(() => {
        const canvas = canvasRef.current as unknown;
        if (canvas instanceof HTMLCanvasElement) {
            const ctx = canvas.getContext("2d");
            ctx?.drawImage(img, 0, 0, img.width, img.height);
        }
    }, [img]);

    return (
        <canvas
            ref={canvasRef}
            className="product__image"
            width={img.width}
            height={img.height}
        ></canvas>
    );
}
