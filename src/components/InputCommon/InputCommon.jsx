import styles from './styles.module.scss';

function InputCommon({ lable, type, isRequired = false }) {
    const { container, lableInput, boxInput } = styles;
    return (
        <div className={container}>
            <div className={lableInput}>
                {lable}
                {isRequired && <span> *</span>}
            </div>
            <div className={boxInput}>
                <input type={type} />
            </div>
        </div>
    );
}

export default InputCommon;
