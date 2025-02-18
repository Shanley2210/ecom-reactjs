import Stepper from '@pages/Cart/components/Steps/Stepper';
import styles from '../../styles.module.scss';

function Steps() {
    const { containerSteps, steps, line, textNoti } = styles;

    const dataSteps = [
        { number: 1, content: 'shopping cart' },
        { number: 2, content: 'Checkout' },
        { number: 3, content: 'Order status' }
    ];

    return (
        <div className={containerSteps}>
            <div className={steps}>
                {dataSteps.map((item, index) => {
                    return (
                        <>
                            <Stepper
                                number={item.number}
                                content={item.content}
                                key={index}
                                isDisabled={index !== 0}
                            />
                            {index !== dataSteps.length - 1 && (
                                <div className={line}></div>
                            )}
                        </>
                    );
                })}
            </div>
            <div className={textNoti}>
                Hurry up, these products are limited, checkout within
            </div>
        </div>
    );
}

export default Steps;
