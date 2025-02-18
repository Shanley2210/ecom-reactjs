import MainLayout from '@components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';

import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function ListProducts() {
    const {
        products,
        isShowGrid,
        isLoading,
        hanldeLoadMore,
        total,
        isLoadMore
    } = useContext(OurShopContext);
    const { containerProduct, sectionListProduct, rotate } = styles;

    //console.log(products);

    return (
        <div className={sectionListProduct}>
            <MainLayout>
                {isLoading ? (
                    <>Loading...</>
                ) : (
                    <>
                        <div className={isShowGrid ? containerProduct : ''}>
                            {products.map((item) => (
                                <ProductItem
                                    key={item.id}
                                    src={item.images[0]}
                                    prevSrc={item.images[1]}
                                    name={item.name}
                                    price={item.price}
                                    details={item}
                                    isHomepage={false}
                                />
                            ))}
                        </div>
                        {products.length < total && (
                            <div
                                style={{
                                    display: 'grid',
                                    width: '180px',
                                    height: '37px',
                                    margin: '0 auto'
                                }}
                            >
                                <Button
                                    content={
                                        isLoadMore ? (
                                            <LoadingTextCommon />
                                        ) : (
                                            'LOAD MORE PRODUCTS'
                                        )
                                    }
                                    isPrimary={false}
                                    onClick={hanldeLoadMore}
                                />
                            </div>
                        )}
                    </>
                )}
            </MainLayout>
        </div>
    );
}

export default ListProducts;
