import CartTable from '@pages/Cart/components/Contents/CartTable';
import styles from '../../styles.module.scss';
import CartSummary from '@pages/Cart/components/Contents/CartSummary';
import Button from '@components/Button/Button';
import { TfiTrash } from 'react-icons/tfi';
import { IoCartOutline } from 'react-icons/io5';
import { useContext, useEffect } from 'react';
import { SideBarContext } from '@contexts/SideBarProvider';
import { addProductToCart } from '@/apis/cartService';
import { deleteItem, deleteAllItem } from '@/apis/cartService';
import { useNavigate } from 'react-router-dom';
import { getCart } from '@/apis/cartService';

function Contents() {
    const {
        containerContent,
        boxFooter,
        boxCoupon,
        boxBtnDelete,
        boxEmptyCart,
        titleEmty,
        descEmpty,
        boxBtnEmpty
    } = styles;

    const {
        listProductsCart,
        handleGetListProductsCart,
        isLoading,
        setIsLoading,
        userId,
        setListProductsCart
    } = useContext(SideBarContext);

    const navigate = useNavigate();

    const handleReplaceQuantity = (data) => {
        setIsLoading(true);
        //console.log('data', data);
        addProductToCart(data)
            .then((res) => {
                handleGetListProductsCart(data.userId, 'cart');
            })
            .catch((err) => {
                console.log('err', err);
                setIsLoading(false);
            });
    };

    const handleDeleteItemCart = (data) => {
        setIsLoading(true);
        deleteItem(data)
            .then((res) => {
                handleGetListProductsCart(data.userId, 'cart');
            })
            .catch((err) => {
                console.log('err', err);
                setIsLoading(false);
            });
    };

    const handleDeleteAllItemCart = () => {
        //console.log(userId);
        setIsLoading(true);
        deleteAllItem({ userId })
            .then((res) => {
                handleGetListProductsCart(userId, 'cart');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleNavigateToShop = () => {
        navigate('/shop');
    };

    useEffect(() => {
        getCart(userId)
            .then((res) => {
                setListProductsCart(res.data.data);
                setIsLoading(false);
            })
            .catch((err) => {
                setListProductsCart([]);
                setIsLoading(false);
            });
    }, []);

    //console.log('listProductsCart', listProductsCart);

    return (
        <>
            {listProductsCart.length > 0 && userId ? (
                <div className={containerContent}>
                    <div>
                        <CartTable
                            listProductsCart={listProductsCart}
                            getData={handleReplaceQuantity}
                            isLoading={isLoading}
                            handleDeleteItemCart={handleDeleteItemCart}
                        />

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
                                    onClick={handleDeleteAllItemCart}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <CartSummary />
                    </div>
                </div>
            ) : (
                <div className={boxEmptyCart}>
                    <IoCartOutline style={{ fontSize: '50px' }} />
                    <div className={titleEmty}>YOUR SHOPPING CART IS EMPTY</div>
                    <div className={descEmpty}>
                        We invite you to get acquainted with an assortment of
                        our shop. Surely you can find something for yourself!
                    </div>
                    <div className={boxBtnEmpty}>
                        <Button
                            content={'RETURN TO SHOP'}
                            onClick={handleNavigateToShop}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default Contents;
