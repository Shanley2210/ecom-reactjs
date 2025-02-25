import styles from './styles.module.scss';
import classNames from 'classnames';

function Button({
    content,
    icon = '',
    isPrimary = true,
    customClassName = false,
    ...props
}) {
    const { btn, primaryBtn, seccondaryBtn } = styles;
    return (
        <div>
            <button
                className={classNames(btn, {
                    [primaryBtn]: isPrimary,
                    [seccondaryBtn]: !isPrimary,
                    [customClassName]: customClassName
                })}
                {...props}
            >
                {content}
            </button>
        </div>
    );
}

export default Button;
