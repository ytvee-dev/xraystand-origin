import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { TRootState } from '@store/index';
import { Languages } from '@domains/Translate';
import useScreenWidth from '@hooks/useScreenWidth';
import * as textContentKz from '@modules/math/locales/kaz.json';
import * as textContentRu from '@modules/math/locales/rus.json';

export const useMathPageData = () => {
    const currentLocale: Languages = useSelector((state: TRootState) => state.locale.locale);
    const screenWidth = useScreenWidth();
    
    const textContent = useMemo(() => 
        currentLocale === Languages.KAZAKH ? textContentKz : textContentRu,
        [currentLocale]
    );
    
    const isMobile = useMemo(() => screenWidth < 800, [screenWidth]);
    
    return {
        currentLocale,
        textContent,
        isMobile,
        screenWidth
    };
};
