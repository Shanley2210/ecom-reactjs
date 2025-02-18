import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import { IoCartOutline } from 'react-icons/io5';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function Cart() {
    const {
        container,
        total,
        boxBtn,
        Btn,
        containerListProductCard,
        overlayLoading
    } = styles;
    const { listProductsCart, isLoading } = useContext(SideBarContext);

    //console.log(listProductsCart);

    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<IoCartOutline style={{ fontSize: '30px' }} />}
                    title='CART'
                />

                {isLoading ? (
                    <LoadingTextCommon />
                ) : (
                    listProductsCart.map((item, index) => {
                        return (
                            <ItemProduct
                                key={index}
                                src={item.images[0]}
                                nameProduct={item.name}
                                priceProduct={item.price}
                                skuProduct={item.sku}
                                sizeProduct={item.size}
                                quantity={item.quantity}
                                productId={item.productId}
                                userId={item.userId}
                            />
                        );
                    })
                )}
            </div>

            <div>
                <div className={total}>
                    <p>SUBTORAL: </p>
                    <p>$99.99</p>
                </div>
                <div className={boxBtn}>
                    <div className={Btn}>
                        <Button content={'VIEW CART'} />
                    </div>
                    <div className={Btn}>
                        <Button content={'CHECKOUT'} isPrimary={false} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
