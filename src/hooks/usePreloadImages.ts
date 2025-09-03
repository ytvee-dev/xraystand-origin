import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {setIsContentLoaded, setProgress} from "@store/slices/Application";

export function usePreloadImages(urls: string[], { minDelayMs = 300 } = {}) {
    const dispatch = useDispatch();
    const startedAt = useRef(0);

    useEffect(() => {
        // пустой список — считаем загруженным
        if (!urls || urls.length === 0) {
            dispatch(setProgress(100));
            dispatch(setIsContentLoaded(true));
            return;
        }

        let cancelled = false;
        let loaded = 0;

        dispatch(setIsContentLoaded(false));
        dispatch(setProgress(0));
        startedAt.current = performance.now();

        const promises = urls.map(
            (src) =>
                new Promise<void>((resolve) => {
                    const img = new Image();
                    img.onload = img.onerror = () => {
                        if (cancelled) return;
                        loaded += 1;
                        const p = Math.round((loaded / urls.length) * 100);
                        dispatch(setProgress(p));
                        resolve();
                    };
                    // важно: root-relative путь
                    img.src = src;
                })
        );

        Promise.all(promises).then(() => {
            const elapsed = performance.now() - startedAt.current;
            const wait = Math.max(0, minDelayMs - elapsed);
            const t = setTimeout(() => {
                if (!cancelled) {
                    dispatch(setProgress(100));
                    dispatch(setIsContentLoaded(true));
                }
            }, wait);
            return () => clearTimeout(t);
        });

        return () => {
            cancelled = true;
        };
        // важно: завязаться на список URL'ов как на строку, чтобы эффект не бегал бесконечно
    }, [dispatch, JSON.stringify(urls), minDelayMs]);
}
