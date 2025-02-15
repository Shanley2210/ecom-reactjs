import MainLayout from '@components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';

function ListProducts() {
    const { products, isShowGrid, isLoading } = useContext(OurShopContext);
    const { containerProduct } = styles;

    //console.log(products);

    return (
        <>
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
                        <div
                            style={{
                                display: 'grid',
                                width: '180px',
                                height: '37px',
                                margin: '0 auto'
                            }}
                        >
                            <Button
                                content={'LOAD MORE PRODUCTS'}
                                isPrimary={false}
                            />
                        </div>
                    </>
                )}
            </MainLayout>
        </>
    );
}

export default ListProducts;
