import styles from './styles.module.scss';

import { useState, useEffect } from 'react';

const { box, title, container } = styles;

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div>
            <div className={container}>
                <span className={box}>
                    {timeLeft.days || 0} <span className={title}>Days</span>
                </span>
                <span className={box}>
                    {timeLeft.hours || 0} <span className={title}>Hours</span>
                </span>
                <span className={box}>
                    {timeLeft.minutes || 0} <span className={title}>Mins</span>
                </span>
                <span className={box}>
                    {timeLeft.seconds || 0} <span className={title}>Secs</span>
                </span>
            </div>
        </div>
    );
};

export default CountdownTimer;
