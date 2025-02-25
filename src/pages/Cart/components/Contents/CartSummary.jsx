import Button from '@components/Button/Button';
import styles from '../../styles.module.scss';
import ClassNames from 'classnames';
import { useContext } from 'react';
import { SideBarContext } from '@contexts/SideBarProvider';
import LoadingCart from '@pages/Cart/components/Loading';
import MethodPayment from '@components/MethodPayment/MethodPayment';

function CartSummary() {
    const {
        containerSummary,
        title,
        boxTotal,
        boxBtn,
        subTotal,
        priceSub,
        total,
        containerRight
    } = styles;

    const { listProductsCart, isLoading } = useContext(SideBarContext);

    const totalPrice = listProductsCart.reduce((total, item) => {
        return total + item.total;
    }, 0);

    return (
        <div className={containerRight}>
            <div className={containerSummary}>
                <div className={title}>CART TOTAL</div>
                <div className={ClassNames(boxTotal, subTotal)}>
                    <div>Subtotal:</div>
                    <div className={priceSub}>${totalPrice.toFixed(2)}</div>
                </div>
                <div className={ClassNames(boxTotal, total)}>
                    <div>TOTAL:</div>
                    <div>${totalPrice.toFixed(2)}</div>
                </div>
                <div className={boxBtn}>
                    <Button content={'PROCEED TO CHECKOUT'} />
                </div>

                <div className={boxBtn}>
                    <Button content={'CONTINUTE SHOPPING'} isPrimary={false} />
                </div>

                {isLoading && <LoadingCart />}
            </div>

            <MethodPayment />
        </div>
    );
}

export default CartSummary;
