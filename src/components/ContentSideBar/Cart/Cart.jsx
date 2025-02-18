import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import { IoCartOutline } from 'react-icons/io5';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import ClassNames from 'classnames';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const {
        container,
        total,
        boxBtn,
        Btn,
        containerListProductCard,
        overlayLoading,
        isEmpty,
        boxEmpty,
        textEmpty,
        boxBtnEmpty,
        containerListItem
    } = styles;

    const navigate = useNavigate();

    const { listProductsCart, isLoading, setIsOpen } =
        useContext(SideBarContext);

    const handleNavigateToShop = () => {
        navigate('/shop');
        setIsOpen(false);
    };

    const subTotal = listProductsCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);

    // console.log(subTotal);

    //console.log(listProductsCart);

    return (
        <div
            className={ClassNames(container, {
                [isEmpty]: !listProductsCart.length
            })}
        >
            <HeaderSideBar
                icon={<IoCartOutline style={{ fontSize: '30px' }} />}
                title='CART'
            />

            {listProductsCart.length ? (
                <div className={containerListItem}>
                    <div>
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
                            <p>{subTotal}</p>
                        </div>
                        <div className={boxBtn}>
                            <div className={Btn}>
                                <Button content={'VIEW CART'} />
                            </div>
                            <div className={Btn}>
                                <Button
                                    content={'CHECKOUT'}
                                    isPrimary={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={boxEmpty}>
                    <div className={textEmpty}>No products in the cart</div>
                    <div className={boxBtnEmpty}>
                        <Button
                            content={'RETURN TO SHOP'}
                            isPrimary={false}
                            onClick={handleNavigateToShop}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
