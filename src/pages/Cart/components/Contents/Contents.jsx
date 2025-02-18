import CartTable from '@pages/Cart/components/Contents/CartTable';
import styles from '../../styles.module.scss';

function Contents() {
    const { containerContent } = styles;

    return (
        <div className={containerContent}>
            <div>
                <CartTable />
            </div>

            <div>THANH TOAN</div>
        </div>
    );
}

export default Contents;
