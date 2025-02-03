import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import Info from '@components/Info/Info';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts';

function HomePage() {
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadingListProducts />
            </div>
        </div>
    );
}

export default HomePage;
