import Button from '@components/Button/Button';
import styles from '../../styles.module.scss';
import ClassNames from 'classnames';
import { useContext } from 'react';
import { SideBarContext } from '@contexts/SideBarProvider';
import LoadingCart from '@pages/Cart/components/Loading';

function CartSummary() {
    const {
        containerSummary,
        title,
        boxTotal,
        boxBtn,
        subTotal,
        priceSub,
        total,
        containerMethod,
        titleMethod,
        containerRight,
        boxImgMethod,
        ImgMethod,
        textSecure
    } = styles;

    const { listProductsCart, isLoading } = useContext(SideBarContext);

    const srcMethod = [
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg'
    ];

    const totalPrice = listProductsCart.reduce((total, item) => {
        return total + item.total;
    }, 0);

    return (
        <div className={containerRight}>
            <div className={containerSummary}>
                <div className={title}>CART TOTAL</div>
                <div className={ClassNames(boxTotal, subTotal)}>
                    <div>Subtotal:</div>
                    <div className={priceSub}>${totalPrice}</div>
                </div>
                <div className={ClassNames(boxTotal, total)}>
                    <div>TOTAL:</div>
                    <div>${totalPrice}</div>
                </div>
                <div className={boxBtn}>
                    <Button content={'PROCEED TO CHECKOUT'} />
                </div>

                <div className={boxBtn}>
                    <Button content={'CONTINUTE SHOPPING'} isPrimary={false} />
                </div>

                {isLoading && <LoadingCart />}
            </div>

            <div className={containerMethod}>
                <div className={titleMethod}>
                    Guaranteed <span>safe</span> checkout
                </div>
                <div className={boxImgMethod}>
                    {srcMethod.map((src, index) => {
                        return (
                            <img
                                src={src}
                                alt=''
                                className={ImgMethod}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={textSecure}>
                <div>Your Payment is</div> <p>100% Secure</p>
            </div>
        </div>
    );
}

export default CartSummary;
