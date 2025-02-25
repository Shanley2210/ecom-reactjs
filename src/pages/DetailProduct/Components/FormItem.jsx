import styles from '../styles.module.scss';
import { TiStar } from 'react-icons/ti';

function FormItem({ label, typeChildren, isRequired }) {
    const { containerFromItem, boxItemStar } = styles;

    const renderStar = (length) => {
        return Array.from({ length }, (_, index) => (
            <TiStar key={index} style={{ color: '#e1e1e1' }} />
        ));
    };

    const renderChilren = () => {
        switch (typeChildren) {
            case 'rating':
                return (
                    <div className={boxItemStar}>
                        <div>{renderStar(1)}</div>
                        <div>{renderStar(2)}</div>
                        <div>{renderStar(3)}</div>
                        <div>{renderStar(4)}</div>
                        <div>{renderStar(5)}</div>
                    </div>
                );
            case 'input':
                return <input type='text' />;
            case 'textarea':
                return <textarea rows={10} />;
        }
    };

    return (
        <div className={containerFromItem}>
            <label>
                {label} {isRequired && <span>*</span>}
            </label>
            {renderChilren()}
        </div>
    );
}

export default FormItem;
