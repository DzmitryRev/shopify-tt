import { useEffect, useRef, MutableRefObject } from "react";

type ImageCanvasProps = {
    imageUrl: string;
};

export function ImageCanvas({ imageUrl }: ImageCanvasProps) {
    // const img = useMemo(() => new Image(), []);

    let img;
    const canvasRef = useRef<HTMLCanvasElement>() as MutableRefObject<HTMLCanvasElement>;

    useEffect(() => {
        img = new Image();
        img.src = imageUrl;
        const canvas = canvasRef.current as unknown;
        if (canvas instanceof HTMLCanvasElement) {
            const ctx = canvas.getContext("2d");
            ctx?.drawImage(img, 0, 0, img.width, img.height);
        }
    }, [imageUrl]);

    return (
        <canvas
            ref={canvasRef}
            className="product__image"
            width={img.width}
            height={img.height}
        ></canvas>
    );
}
