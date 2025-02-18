import CartTable from '@pages/Cart/components/Contents/CartTable';
import styles from '../../styles.module.scss';
import CartSummary from '@pages/Cart/components/Contents/CartSummary';

function Contents() {
    const { containerContent } = styles;

    return (
        <div className={containerContent}>
            <div>
                <CartTable />
            </div>

            <div>
                <CartSummary />
            </div>
        </div>
    );
}

export default Contents;
