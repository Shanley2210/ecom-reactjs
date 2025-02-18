import Button from '@components/Button/Button';
import styles from '../../styles.module.scss';
import SelectBox from '@pages/OurShop/components/SelectBox';
import { TfiTrash } from 'react-icons/tfi';

function CartTable() {
    const {
        cartContainer,
        cartTable,
        product,
        deleteItem,
        price,
        sku,
        boxSelect
    } = styles;

    const showOption = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
    ];

    const getValueSelect = (value, type) => {
        console.log(value);
        console.log(type);

        // if (type === 'sort') {
        //     setSortId(value);
        // } else {
        //     setShowId(value);
        // }
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
                    <tr>
                        <td className={product}>
                            <img
                                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.1-min.jpg'
                                alt=''
                            />
                            <div>
                                <p>Amet faucibus nunc</p>
                                <span>
                                    Size: <p>M</p>
                                </span>
                            </div>
                        </td>
                        <td>
                            <div className={deleteItem}>
                                <TfiTrash />
                            </div>
                        </td>
                        <td className={price}>$1,879.99</td>
                        <td className={sku}>87654</td>
                        <td className={boxSelect}>
                            <SelectBox
                                options={showOption}
                                getValue={getValueSelect}
                                type={'show'}
                            />
                        </td>
                        <td className={price}>$3,759.98</td>
                    </tr>

                    {/* Test */}
                    <tr>
                        <td className={product}>
                            <img
                                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.1-min.jpg'
                                alt=''
                            />
                            <div>
                                <p>Amet faucibus nunc</p>
                                <span>
                                    Size: <p>M</p>
                                </span>
                            </div>
                        </td>
                        <td>
                            <div className={deleteItem}>
                                <TfiTrash />
                            </div>
                        </td>
                        <td className={price}>$1,879.99</td>
                        <td className={sku}>87654</td>
                        <td className={boxSelect}>
                            <SelectBox
                                options={showOption}
                                getValue={getValueSelect}
                                type={'show'}
                            />
                        </td>
                        <td className={price}>$3,759.98</td>
                    </tr>
                    <tr>
                        <td className={product}>
                            <img
                                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.1-min.jpg'
                                alt=''
                            />
                            <div>
                                <p>Amet faucibus nunc</p>
                                <span>
                                    Size: <p>M</p>
                                </span>
                            </div>
                        </td>
                        <td>
                            <div className={deleteItem}>
                                <TfiTrash />
                            </div>
                        </td>
                        <td className={price}>$1,879.99</td>
                        <td className={sku}>87654</td>
                        <td className={boxSelect}>
                            <SelectBox
                                options={showOption}
                                getValue={getValueSelect}
                                type={'show'}
                            />
                        </td>
                        <td className={price}>$3,759.98</td>
                    </tr>
                    {/* Test */}
                </tbody>
            </table>
        </div>
    );
}

export default CartTable;
