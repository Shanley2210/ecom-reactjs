import CartTable from '@pages/Cart/components/Contents/CartTable';
import styles from '../../styles.module.scss';
import CartSummary from '@pages/Cart/components/Contents/CartSummary';
import Button from '@components/Button/Button';
import { TfiTrash } from 'react-icons/tfi';
<TfiTrash />;
function Contents() {
    const { containerContent, boxFooter, boxCoupon, boxBtnDelete } = styles;

    return (
        <div className={containerContent}>
            <div>
                <CartTable />

                <div className={boxFooter}>
                    <div className={boxCoupon}>
                        <input type='text' placeholder='Coupon code' />
                        <Button content={'OK'} isPrimary={false} />
                    </div>

                    <div className={boxBtnDelete}>
                        <Button
                            content={
                                <>
                                    <TfiTrash /> CLEAR SHOPPING CART
                                </>
                            }
                            isPrimary={false}
                        />
                    </div>
                </div>
            </div>

            <div>
                <CartSummary />
            </div>
        </div>
    );
}

export default Contents;
