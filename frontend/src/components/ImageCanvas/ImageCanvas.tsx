import { useRef, MutableRefObject } from "react";

type ImageCanvasProps = {
    imageUrl: string;
};

export function ImageCanvas({ imageUrl }: ImageCanvasProps) {
    // const img = useMemo(() => new Image(), []);

    // let img: HTMLImageElement | null = null;
    const canvasRef = useRef<HTMLCanvasElement>() as MutableRefObject<HTMLCanvasElement>;

    const img = new Image();
    img.src = imageUrl;
    const canvas = canvasRef.current as unknown;
    if (canvas instanceof HTMLCanvasElement) {
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, img.width, img.height);
    }

    // useEffect(() => {
    //     const img = new Image();
    //     img.src = imageUrl;
    //     const canvas = canvasRef.current as unknown;
    //     if (canvas instanceof HTMLCanvasElement) {
    //         const ctx = canvas.getContext("2d");
    //         ctx?.drawImage(img, 0, 0, img.width, img.height);
    //     }
    // }, [imageUrl]);

    return <canvas ref={canvasRef} className="product__image" width={500} height={500}></canvas>;
}
