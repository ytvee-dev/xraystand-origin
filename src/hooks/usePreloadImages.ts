import { useEffect } from "react";

const usePreloadImages = (paths: string[]): void => {
    useEffect(() => {
        paths.forEach((path: string) => {
            const img = new Image();
            img.src = path;
        });
    }, [paths]);
};

export default usePreloadImages;
