import CountdownTimer from '@components/CountDownTimer/CountDownTimer';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function CountDownBanner() {
    const { container, containerTimer, title, boxBtn } = styles;
    const targetDate = '2025-12-31T23:59:59';
    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <p className={title}>The Classics Make A Comback</p>
            <div className={boxBtn}>
                <Button content={'Buy now'} />
            </div>
        </div>
    );
}

export default CountDownBanner;
