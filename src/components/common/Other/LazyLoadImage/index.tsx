import React, {useRef, useState, useEffect, useCallback} from "react";
import {useDispatch} from "react-redux";
import {setIsContentLoaded} from "@store/slices/Application";

export interface ILazyLoadImageProps
    extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
    className?: string;
    loadInitially?: boolean;
    observerOptions?: IntersectionObserverInit;
}

const LazyLoadImage: React.FC<ILazyLoadImageProps> = ({
    src,
    alt='',
    className,
    loadInitially = false,
    observerOptions = {root: null, rootMargin: "200px 0px"},
    ...props
}) => {
    const dispatch = useDispatch();
    const observerRef = useRef<IntersectionObserver | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(loadInitially);

    const observerCallback: IntersectionObserverCallback = useCallback(
        (entries) => {
            if (entries[0].isIntersecting) {
                observerRef.current?.disconnect();
                setIsLoaded(true);
            }
        },
        []
    );

    useEffect(() => {
        if (loadInitially) return;

        if ("loading" in HTMLImageElement.prototype) {
            setIsLoaded(true);
            dispatch(setIsContentLoaded(true));
            return;
        }

        if (imgRef.current) {
            observerRef.current = new IntersectionObserver(
                observerCallback,
                observerOptions
            );
            observerRef.current.observe(imgRef.current);
        }

        return () => {
            observerRef.current?.disconnect();
        };
    }, [loadInitially, observerCallback, observerOptions]);

    return (
        <img
            alt={alt}
            src={isLoaded ? src : ""}
            ref={imgRef}
            className={className}
            loading={loadInitially ? undefined : "lazy"}
            style={{
                pointerEvents: 'none'
            }}
            {...props}
        />
    );
};

export default LazyLoadImage;
