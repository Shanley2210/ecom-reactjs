import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import Info from '@components/Info/Info';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts';

function HomePage() {
    return (
        <>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadingListProducts />
            <div style={{ height: '200px' }}></div>
        </>
    );
}

export default HomePage;
