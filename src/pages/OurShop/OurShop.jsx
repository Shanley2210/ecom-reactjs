import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import Banner from '@pages/OurShop/components/Banner';
import { OurShopProvider } from '@contexts/OurShopProvider';
import Filter from '@pages/OurShop/components/Filter';
import ListProducts from '@pages/OurShop/components/ListProducts';

function OurShop() {
    const { container, funcBox, specialTex, btnBack } = styles;
    const navigate = useNavigate();

    const handleBackPrevPage = () => {
        navigate(-1);
    };

    return (
        <OurShopProvider>
            <MyHeader />
            <MainLayout>
                <div className={container}>
                    <div className={funcBox}>
                        <div>
                            Home &gt; <span className={specialTex}>Shop</span>
                        </div>{' '}
                        <div
                            className={btnBack}
                            onClick={() => handleBackPrevPage()}
                        >
                            {' '}
                            &lt; Return to previous pages{' '}
                        </div>
                    </div>
                    <Banner />

                    <div>
                        <Filter />
                        <ListProducts />
                    </div>
                </div>
            </MainLayout>
        </OurShopProvider>
    );
}

export default OurShop;
