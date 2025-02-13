import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import Banner from '@pages/OurShop/components/Banner';

function OurShop() {
    const { container, funcBox, specialTex, btnBack } = styles;
    const navigate = useNavigate();

    const handleBackPrevPage = () => {
        navigate(-1);
    };

    return (
        <>
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
                </div>
            </MainLayout>
        </>
    );
}

export default OurShop;
