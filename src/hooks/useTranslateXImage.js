import useScrollHanding from '@/hooks/useScrollHanding';
import { useEffect, useState } from 'react';

const useTranslateXImage = () => {
    const { scrollDrection, scrollPosition } = useScrollHanding();

    const [translateXPosision, setTranslateXPosision] = useState(80);

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
        handleTransX();
    }, [scrollPosition]);

    return {
        translateXPosision
    };
};

export default useTranslateXImage;
