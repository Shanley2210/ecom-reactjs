import CountdownTimer from '@components/CountDownTimer/CountDownTimer';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';

function Banner() {
    const { containerBanner, contentBox, title, boxBtn, countDownBox } = styles;
    const targetDate = '2025-12-31T23:59:59';

    return (
        <>
            <div className={containerBanner}>
                <div className={contentBox}>
                    <div className={countDownBox}>
                        <CountdownTimer targetDate={targetDate} />
                    </div>
                    <div className={title}>The classics make a comeback</div>
                    <div className={boxBtn}>
                        <Button content={'Buy now'} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
