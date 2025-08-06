import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageNames = ["traffic-laws", "kza", "ruslit", "chemistry"];

const ScrollColorManager = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        const htmlEl = document.body;

        pageNames.forEach(name => htmlEl.classList.remove(name));

        const matched = pageNames.find(name => path.startsWith(`/${name}`));
        if (matched) {
            htmlEl.classList.add(matched);
        }
    }, [location.pathname]);

    return null;
};

export default ScrollColorManager;
