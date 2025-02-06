import { useEffect, useRef, useState } from 'react';

const useTranslateXImage = () => {
    const [scrollDrection, setscrollDrection] = useState(null);
    const preScrollPosition = useRef(0);
    const [translateXPosision, setTranslateXPosision] = useState(80);
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

    const handleTransX = () => {
        if (scrollDrection === 'down' && scrollPosition > 1000) {
            setTranslateXPosision(
                translateXPosision <= 0 ? 0 : translateXPosision - 3
            );
        } else if (scrollDrection === 'up') {
            setTranslateXPosision(
                translateXPosision >= 80 ? 80 : translateXPosision + 1
            );
        }
    };

    // console.log(scrollPosition);

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
    }, []);

    useEffect(() => {
        handleTransX();
    }, [scrollPosition]);

    return {
        translateXPosision
    };
};

export default useTranslateXImage;
