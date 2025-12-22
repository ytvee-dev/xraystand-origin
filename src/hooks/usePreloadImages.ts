import { useEffect, useRef, useMemo } from "react";
import { useDispatch } from "react-redux";

import { setIsContentLoaded, setProgress } from "@store/slices/Application";

export function usePreloadImages(urls: string[], { minDelayMs = 300, maxDelayMs = 5000 } = {}) {
  const dispatch = useDispatch();
  const startedAt = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const maxTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cancelledRef = useRef(false);
  const urlsRef = useRef(urls);

  urlsRef.current = urls;

  const urlsKey = useMemo(() => JSON.stringify(urls || []), [urls]);

  useEffect(() => {
    const currentUrls = urlsRef.current;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (maxTimeoutRef.current) {
      clearTimeout(maxTimeoutRef.current);
      maxTimeoutRef.current = null;
    }
    
    cancelledRef.current = false;

    if (!currentUrls || currentUrls.length === 0) {
      dispatch(setProgress(100));
      dispatch(setIsContentLoaded(true));
      return;
    }

    let loaded = 0;
    const total = currentUrls.length;

    dispatch(setIsContentLoaded(false));
    dispatch(setProgress(0));
    startedAt.current = performance.now();

    const completeLoading = () => {
      if (cancelledRef.current) return;
      
      dispatch(setProgress(100));
      
      const elapsed = performance.now() - startedAt.current;
      const wait = Math.max(0, minDelayMs - elapsed);
      
      timeoutRef.current = setTimeout(() => {
        if (!cancelledRef.current) {
          dispatch(setIsContentLoaded(true));
        }
      }, wait);
    };

    maxTimeoutRef.current = setTimeout(() => {
      if (!cancelledRef.current) {
        dispatch(setProgress(100));
        dispatch(setIsContentLoaded(true));
      }
    }, maxDelayMs);

    const promises = currentUrls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          const handleLoad = () => {
            if (cancelledRef.current) {
              resolve();
              return;
            }
            loaded += 1;
            const p = Math.min(99, Math.round((loaded / total) * 100));
            dispatch(setProgress(p));
            resolve();
          };
          img.onload = handleLoad;
          img.onerror = handleLoad;
          img.src = src;
        }),
    );

    Promise.all(promises)
      .then(() => {
        if (maxTimeoutRef.current) {
          clearTimeout(maxTimeoutRef.current);
          maxTimeoutRef.current = null;
        }
        completeLoading();
      })
      .catch((error) => {
        console.error('Error preloading images:', error);
        if (maxTimeoutRef.current) {
          clearTimeout(maxTimeoutRef.current);
          maxTimeoutRef.current = null;
        }
        completeLoading();
      });

    return () => {
      cancelledRef.current = true;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (maxTimeoutRef.current) {
        clearTimeout(maxTimeoutRef.current);
        maxTimeoutRef.current = null;
      }
    };
  }, [dispatch, minDelayMs, maxDelayMs, urlsKey]);
}
