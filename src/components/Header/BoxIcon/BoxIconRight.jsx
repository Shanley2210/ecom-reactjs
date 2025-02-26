import styles from '../styles.module.scss';
import { TfiReload } from 'react-icons/tfi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';

function BoxIconRight({ type, href }) {
    const { boxIconRight, boxCart, quantity } = styles;

    const {
        setIsOpen,
        setType,
        listProductsCart,
        userId,
        handleGetListProductsCart
    } = useContext(SideBarContext);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    const handleOpenCartSideBar = () => {
        handleGetListProductsCart(userId, 'cart');
        handleOpenSideBar('cart');
    };

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'compare':
                return (
                    <TfiReload
                        style={{ fontSize: '20px' }}
                        onClick={() => handleOpenSideBar(type)}
                    />
                );
            case 'wishlist':
                return (
                    <IoMdHeartEmpty
                        style={{ fontSize: '25px' }}
                        onClick={() => handleOpenSideBar(type)}
                    />
                );
            case 'cart':
                return (
                    <div className={boxCart}>
                        <BsCart3
                            style={{ fontSize: '20px' }}
                            onClick={() => handleOpenCartSideBar()}
                        />
                        <div className={quantity}>
                            {listProductsCart.length}
                        </div>
                    </div>
                );
        }
    };

    return <div className={boxIconRight}>{handleRenderIcon(type)}</div>;
}

export default BoxIconRight;
