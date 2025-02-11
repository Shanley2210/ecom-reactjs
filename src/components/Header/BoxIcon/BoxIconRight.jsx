import styles from '../styles.module.scss';
import { TfiReload } from 'react-icons/tfi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';

function BoxIconRight({ type, href }) {
    const { boxIconRight } = styles;

    const { setIsOpen, setType } = useContext(SideBarContext);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
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
                    <BsCart3
                        style={{ fontSize: '20px' }}
                        onClick={() => handleOpenSideBar(type)}
                    />
                );
        }
    };

    return <div className={boxIconRight}>{handleRenderIcon(type)}</div>;
}

export default BoxIconRight;
