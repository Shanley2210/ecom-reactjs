import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { CiHeart } from 'react-icons/ci';
import { TfiReload } from 'react-icons/tfi';
import MethodPayment from '@components/MethodPayment/MethodPayment';
import AccordionMenu from '@components/AccordionMenu/AccordionMeni';
import { useContext, useEffect, useState } from 'react';
import InfomationProduct from '@pages/DetailProduct/Components/Infomation';
import ReViewProduct from '@pages/DetailProduct/Components/ReView';
import SilderCommon from '@components/SliderCommon/SilderCommon';
import ReactImageMagnifier from 'simple-image-magnifier/react';
import ClassNames from 'classnames';
import { getDetailProduct, getRelatedProduct } from '@/apis/productsService';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { handleaddProductToCartCommon } from '@/utils/helper';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import Cookies from 'js-cookie';
import { addProductToCart } from '@/apis/cartService';

function DetailProduct() {
    const {
        container,
        navigateSection,
        contentSection,
        boxImages,
        boxInfoProduct,
        price,
        des,
        boxSize,
        size,
        titleSize,
        funcInfo,
        boxBtn,
        incrQuantity,
        titleQuantity,
        orSection,
        addFunction,
        infoProduct,
        activeSive,
        clearSize,
        disableBtn,
        loading,
        emptyData
    } = styles;

    const [menuSelected, setMenuSelected] = useState(1);
    const [sizeSelected, setSizeSelected] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [dataRelated, setDataRelated] = useState([]);
    const param = useParams();
    const navigate = useNavigate();
    const { setIsOpen, setType, handleGetListProductsCart, setDetailProduct } =
        useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const userId = Cookies.get('userId');
    const [isLoadingBtn, setIsLoadingBtn] = useState(false);
    const [isLoadingBtnBuyNow, setIsLoadingBtnBuyNow] = useState(false);

    const dataAccordion = [
        {
            id: 1,
            titleMenu: 'ADDITONAL INFORMATION',
            content: <InfomationProduct />
        },
        {
            id: 2,
            titleMenu: 'REVIEWS(0)',
            content: <ReViewProduct />
        }
    ];

    // const tempDataSilder = [
    //     {
    //         image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg',
    //         name: 'TestProduct',
    //         price: 1000,
    //         size: [{ name: 'L' }, { name: 'S' }, { name: 'M' }]
    //     },
    //     {
    //         image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg',
    //         name: 'TestProduct',
    //         price: 1000,
    //         size: [{ name: 'L' }, { name: 'S' }, { name: 'M' }]
    //     },
    //     {
    //         image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg',
    //         name: 'TestProduct',
    //         price: 1000,
    //         size: [{ name: 'L' }, { name: 'S' }, { name: 'M' }]
    //     }
    // ];

    // const dataImageDetails = [
    //     'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg',
    //     'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg',
    //     'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg',
    //     'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
    // ];

    // const tempSizeData = [
    //     { name: 'L', amount: '1000' },
    //     { name: 'M', amount: '1000' },
    //     { name: 'S', amount: '1000' }
    // ];

    const handleSetMenuSelected = (id) => {
        // console.log(id);
        setMenuSelected(id);
    };

    const handleRenderZoomImages = (src) => {
        return (
            <ReactImageMagnifier
                srcPreview={src}
                srcOriginal={src}
                width={295}
                height={350}
                //objectFit='contain'
            />
        );
    };

    const handleChooseSize = (size) => {
        //console.log(size);
        setSizeSelected(size);
    };

    const handleClearSize = () => {
        setSizeSelected('');
    };

    const handleSetQuantity = (type) => {
        //console.log(type);

        if (type === 'decrement') {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleAdd = () => {
        handleaddProductToCartCommon(
            userId,
            setIsOpen,
            setType,
            toast,
            sizeSelected,
            param.id,
            quantity,
            setIsLoadingBtn,
            handleGetListProductsCart
        );
    };

    const handleBuyNow = () => {
        const data = {
            userId,
            productId: param.id,
            quantity,
            size: sizeSelected
        };

        setIsLoadingBtnBuyNow(true);
        addProductToCart(data)
            .then((res) => {
                navigate('/cart');

                toast.success('Add Product to cart successfully');
                setIsLoadingBtnBuyNow(false);
            })
            .catch((err) => {
                toast.error('Add Product to cart failed');
                setIsLoadingBtnBuyNow(false);
            });
    };

    const fetchDataDetail = async (id) => {
        setIsLoading(true);
        try {
            const data = await getDetailProduct(id);
            // console.log(data);

            setData(data);
            setIsLoading(false);
        } catch (err) {
            // console.log(err);
            toast.error('Có lỗi khi tải dữ liệu');
            setData();
            setIsLoading(false);
        }
    };

    const fetchDataRelatedProduct = async (id) => {
        setIsLoading(true);
        try {
            const data = await getRelatedProduct(id);
            //console.log(data);

            setDataRelated(data);
            setIsLoading(false);
        } catch (err) {
            // console.log(err);
            setDataRelated([]);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (param.id) {
            fetchDataDetail(param.id);
            fetchDataRelatedProduct(param.id);
        }
    }, [param]);

    console.log(data);
    // console.log(param);
    // console.log(dataRelated);

    return (
        <div>
            <MyHeader />

            <div className={container}>
                <MainLayout>
                    <div className={navigateSection}>
                        <div>Home {'>'} Men</div>
                        <div style={{ cursor: 'pointer' }}>
                            {'<'} Return to previous pages
                        </div>
                    </div>
                    {isLoading ? (
                        <div className={loading}>
                            <LoadingTextCommon />
                        </div>
                    ) : (
                        <>
                            {!data ? (
                                <div className={emptyData}>
                                    <p>No result</p>
                                    <div>
                                        <Button
                                            content={'BACK TO OUR SHOP'}
                                            onClick={() => navigate('/shop')}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className={contentSection}>
                                    <div className={boxImages}>
                                        {data?.images.map((src) =>
                                            handleRenderZoomImages(src)
                                        )}
                                    </div>

                                    <div className={boxInfoProduct}>
                                        <h1>{data?.name}</h1>
                                        <p className={price}>${data?.price}</p>
                                        <p className={des}>
                                            {data?.description}
                                        </p>

                                        <p className={titleSize}>
                                            Size: {sizeSelected}
                                        </p>
                                        <div className={boxSize}>
                                            {data?.size.map(
                                                (sizeItem, index) => {
                                                    return (
                                                        <div
                                                            className={ClassNames(
                                                                size,
                                                                {
                                                                    [activeSive]:
                                                                        sizeItem.name ===
                                                                        sizeSelected
                                                                }
                                                            )}
                                                            key={index}
                                                            onClick={() =>
                                                                handleChooseSize(
                                                                    sizeItem.name
                                                                )
                                                            }
                                                        >
                                                            {sizeItem.name}
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>

                                        {sizeSelected && (
                                            <div
                                                className={clearSize}
                                                onClick={handleClearSize}
                                            >
                                                Clear
                                            </div>
                                        )}

                                        <div className={funcInfo}>
                                            <div className={incrQuantity}>
                                                <div
                                                    onClick={() =>
                                                        handleSetQuantity(
                                                            'decrement'
                                                        )
                                                    }
                                                    style={{
                                                        userSelect: 'none'
                                                    }}
                                                >
                                                    -
                                                </div>
                                                <div className={titleQuantity}>
                                                    {quantity}
                                                </div>
                                                <div
                                                    onClick={() =>
                                                        handleSetQuantity(
                                                            'increment'
                                                        )
                                                    }
                                                    style={{
                                                        userSelect: 'none'
                                                    }}
                                                >
                                                    +
                                                </div>
                                            </div>

                                            <div className={boxBtn}>
                                                <Button
                                                    content={
                                                        isLoadingBtn ? (
                                                            <LoadingTextCommon />
                                                        ) : (
                                                            'ADD TO CART'
                                                        )
                                                    }
                                                    customClassName={
                                                        !sizeSelected &&
                                                        disableBtn
                                                    }
                                                    onClick={handleAdd}
                                                />
                                            </div>
                                        </div>

                                        <div className={orSection}>
                                            <div></div>
                                            <span>OR</span>
                                            <div></div>
                                        </div>

                                        <div>
                                            <Button
                                                style={{ height: '40px' }}
                                                content={
                                                    isLoadingBtnBuyNow ? (
                                                        <LoadingTextCommon />
                                                    ) : (
                                                        'BUY NOW'
                                                    )
                                                }
                                                customClassName={
                                                    !sizeSelected && disableBtn
                                                }
                                                onClick={handleBuyNow}
                                            />
                                        </div>

                                        <div className={addFunction}>
                                            <div>
                                                <CiHeart
                                                    style={{ fontSize: '25px' }}
                                                />
                                            </div>
                                            <div>
                                                <TfiReload
                                                    style={{ fontSize: '22px' }}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <MethodPayment />
                                        </div>

                                        <div className={infoProduct}>
                                            <div>
                                                Brand: <span>Brand 01</span>
                                            </div>
                                            <div>
                                                SKU:<span> 12345</span>
                                            </div>
                                            <div>
                                                Category: <span>Men</span>
                                            </div>
                                        </div>

                                        <div>
                                            {dataAccordion.map(
                                                (item, index) => (
                                                    <AccordionMenu
                                                        key={index}
                                                        titleMenu={
                                                            item.titleMenu
                                                        }
                                                        content={item.content}
                                                        onClick={() =>
                                                            handleSetMenuSelected(
                                                                item.id
                                                            )
                                                        }
                                                        isSelected={
                                                            menuSelected ===
                                                            item.id
                                                        }
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                    <div>
                        <h2>Related Products</h2>

                        {dataRelated.length ? (
                            <SilderCommon
                                data={dataRelated}
                                isProductItem
                                showItem={4}
                            />
                        ) : (
                            <>
                                <p>There are no related products</p>
                            </>
                        )}
                    </div>
                </MainLayout>
            </div>

            <MyFooter />
        </div>
    );
}

export default DetailProduct;
