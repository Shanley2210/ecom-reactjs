import { useEffect, useRef, useState } from 'react';

const useScrollHanding = () => {
    const [scrollDrection, setscrollDrection] = useState(null);
    const preScrollPosition = useRef(0);
    const [scrollPosition, setScrollPosision] = useState(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > preScrollPosition.current) {
            setscrollDrection('down');
        } else if (currentScrollPosition < preScrollPosition.current) {
            setscrollDrection('up');
        }

        preScrollPosition.current =
            currentScrollPosition <= 0 ? 0 : currentScrollPosition;

        setScrollPosision(currentScrollPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    return {
        scrollDrection,
        scrollPosition
    };
};

export default useScrollHanding;
