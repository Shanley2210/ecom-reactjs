import { deleteItem } from '@/apis/cartService';
import styles from './styles.module.scss';
import { IoMdClose } from 'react-icons/io';
import { useContext, useState } from 'react';
import { SideBarContext } from '@contexts/SideBarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function ItemProduct({
    src,
    nameProduct,
    priceProduct,
    skuProduct,
    sizeProduct,
    quantity,
    productId,
    userId
}) {
    const {
        container,
        boxContent,
        title,
        price,
        boxClose,
        size,
        overlayLoading
    } = styles;
    const [isDelete, setIsDelete] = useState(false);
    const { handleGetListProductsCart } = useContext(SideBarContext);

    const handleRemoveItem = () => {
        //console.log(productId, userId);

        setIsDelete(true);
        deleteItem({ productId, userId })
            .then((res) => {
                // console.log(res);
                setIsDelete(false);
                handleGetListProductsCart(userId, 'cart');
            })
            .catch((err) => {
                // console.log(err);
                setIsDelete(false);
            });
    };

    return (
        <div className={container}>
            <img src={src} alt={nameProduct} />
            <div className={boxClose} onClick={handleRemoveItem}>
                <IoMdClose style={{ fontSize: '20px', color: 'c1c1c1' }} />
            </div>
            <div className={boxContent}>
                <div className={title}>{nameProduct}</div>
                <div className={size}>{sizeProduct}</div>
                <div className={price}>
                    {quantity} x ${priceProduct}
                </div>
                <div className={price}>{skuProduct}</div>
            </div>

            {isDelete && (
                <div className={overlayLoading}>
                    <LoadingTextCommon />
                </div>
            )}
        </div>
    );
}

export default ItemProduct;
