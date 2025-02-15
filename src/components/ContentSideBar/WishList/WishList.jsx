import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import { CiHeart } from 'react-icons/ci';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function WishList() {
    const { container, boxBtn, Btn } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<CiHeart style={{ fontSize: '30px' }} />}
                    title={'WISHLIST'}
                />
                <ItemProduct />
            </div>
            <div className={boxBtn}>
                <div className={Btn}>
                    <Button content={'VIEW WISHLIST'} />
                </div>
                <div className={Btn}>
                    <Button content={'ADD ALL TO CART'} isPrimary={false} />
                </div>
            </div>
        </div>
    );
}

export default WishList;
