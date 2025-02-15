import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import { IoCartOutline } from 'react-icons/io5';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function Cart() {
    const { container, total, boxBtn, Btn } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<IoCartOutline style={{ fontSize: '30px' }} />}
                    title='CART'
                />

                <ItemProduct />
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
