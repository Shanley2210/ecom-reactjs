import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';

function HeadingListProducts() {
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <CountDownBanner />
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProducts;
