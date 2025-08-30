import { useEffect, useState } from "react";
import getImageUrl from "@utils/getImageUrl";

const useImagesPreloader = (imageIds: string[]) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const uniqueIds = Array.from(new Set(imageIds));
        if (uniqueIds.length === 0) {
            setIsLoaded(true);
            return;
        }

        let loadedCount = 0;
        let isCancelled = false;

        const handleComplete = () => {
            loadedCount += 1;
            if (loadedCount === uniqueIds.length && !isCancelled) {
                setIsLoaded(true);
            }
        };

        const images = uniqueIds.map((id) => {
            const img = new Image();
            img.onload = handleComplete;
            img.onerror = handleComplete;
            img.src = getImageUrl(id);
            return img;
        });

        return () => {
            isCancelled = true;
            images.forEach((img) => {
                img.onload = null;
                img.onerror = null;
            });
        };
    }, [imageIds]);

    return { isLoaded };
};

export default useImagesPreloader;
