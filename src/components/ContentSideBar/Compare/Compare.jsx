import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import { TfiReload } from 'react-icons/tfi';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';

function Compare() {
    const { container } = styles;
    return (
        <div className={container}>
            <HeaderSideBar
                icon={<TfiReload style={{ fontSize: '30px' }} />}
                title='COMPARE'
            />
            <ItemProduct />
        </div>
    );
}

export default Compare;
