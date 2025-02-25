import styles from './styles.module.scss';

function MethodPayment() {
    const {
        containerMethod,
        titleMethod,
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
        <>
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
        </>
    );
}

export default MethodPayment;
