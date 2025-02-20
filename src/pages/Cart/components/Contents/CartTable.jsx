import styles from '../../styles.module.scss';
import SelectBox from '@pages/OurShop/components/SelectBox';
import { TfiTrash } from 'react-icons/tfi';
import LoadingCart from '@pages/Cart/components/Loading';

function CartTable({
    listProductsCart,
    getData,
    isLoading,
    handleDeleteItemCart
}) {
    const {
        cartContainer,
        cartTable,
        product,
        deleteItem,
        price,
        sku,
        boxSelect
    } = styles;

    //console.log('listProductsCart', listProductsCart);

    const showOption = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
    ];

    const getValueSelect = (userId, productId, quantity, size) => {
        const data = {
            userId,
            productId,
            quantity,
            size,
            isMultiple: true
        };

        getData(data);
    };

    return (
        <div className={cartContainer}>
            <table className={cartTable}>
                <thead>
                    <tr>
                        <th>PRODUCT</th>
                        <th />
                        <th>PRICE</th>
                        <th>SKU</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {listProductsCart.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td className={product}>
                                    <img src={item.images[0]} alt={item.name} />
                                    <div>
                                        <p>{item.name}</p>
                                        <span>
                                            Size: <p>{item.size}</p>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div
                                        className={deleteItem}
                                        onClick={() =>
                                            handleDeleteItemCart({
                                                userId: item.userId,
                                                productId: item.productId
                                            })
                                        }
                                    >
                                        <TfiTrash />
                                    </div>
                                </td>
                                <td className={price}>
                                    ${item.price.toFixed(2)}
                                </td>
                                <td className={sku}>{item.sku}</td>
                                <td className={boxSelect}>
                                    <SelectBox
                                        options={showOption}
                                        getValue={(e) =>
                                            getValueSelect(
                                                item.userId,
                                                item.productId,
                                                e,
                                                item.size
                                            )
                                        }
                                        type={'show'}
                                        defaultValue={item.quantity}
                                    />
                                </td>
                                <td className={price}>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {isLoading && <LoadingCart />}
        </div>
    );
}

export default CartTable;
