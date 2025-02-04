import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingListProducts() {
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <CountDownBanner />
                <div className={containerItem}>
                    <div>
                        <ProductItem />
                    </div>
                    <div>
                        <ProductItem />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProducts;
