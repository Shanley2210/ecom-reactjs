import styles from '../../styles.module.scss';
import ClassNames from 'classnames';

function Stepper({ number, content, isDisabled }) {
    const { stepper, numberStep, textStep, isDisabledNumber, isDisabledText } =
        styles;
    return (
        <div className={stepper}>
            <div
                className={ClassNames(numberStep, {
                    [isDisabledNumber]: isDisabled
                })}
            >
                {number}
            </div>
            <div
                className={ClassNames(textStep, {
                    [isDisabledText]: isDisabled
                })}
            >
                {content}
            </div>
        </div>
    );
}

export default Stepper;
