import styles from './styles.module.scss';

function InputCommon({ lable, type, isRequired = false, ...props }) {
    const { container, lableInput, boxInput, errMeg } = styles;
    const { formik, id } = props;

    const isErr = formik.touched[id] && formik.errors[id];
    const messErr = formik.errors[id];

    return (
        <div className={container}>
            <div className={lableInput}>
                {lable}
                {isRequired && <span> *</span>}
            </div>
            <div className={boxInput}>
                <input
                    type={type}
                    {...props}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                />

                {isErr && <div className={errMeg}>{messErr}</div>}
            </div>
        </div>
    );
}

export default InputCommon;
