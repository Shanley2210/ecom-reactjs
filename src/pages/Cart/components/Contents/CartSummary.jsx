import Button from '@components/Button/Button';
import styles from '../../styles.module.scss';
import ClassNames from 'classnames';

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

    const srcMethod = [
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg'
    ];

    return (
        <div className={containerRight}>
            <div className={containerSummary}>
                <div className={title}>CART TOTAL</div>
                <div className={ClassNames(boxTotal, subTotal)}>
                    <div>Subtotal:</div>
                    <div className={priceSub}>$2.123.2</div>
                </div>
                <div className={ClassNames(boxTotal, total)}>
                    <div>TOTAL:</div>
                    <div>$2.113.2</div>
                </div>
                <div className={boxBtn}>
                    <Button content={'PROCEED TO CHECKOUT'} />
                </div>

                <div className={boxBtn}>
                    <Button content={'CONTINUTE SHOPPING'} isPrimary={false} />
                </div>
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
