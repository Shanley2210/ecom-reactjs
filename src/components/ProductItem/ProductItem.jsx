import styles from './styles.module.scss';
import { TfiReload } from 'react-icons/tfi';
import { CiHeart } from 'react-icons/ci';
import { SlBag } from 'react-icons/sl';
import { IoEyeOutline } from 'react-icons/io5';
import classNames from 'classnames';
import Button from '@components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SideBarContext } from '@contexts/SideBarProvider';
import { ToastContext } from '@contexts/ToastProvider';
import { addProductToCart } from '@/apis/cartService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomepage = true
}) {
    //const { isShowGrid } = useContext(OurShopContext);
    const [sizeChoose, setSizeChoose] = useState('');
    const ourShopStore = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
    const userId = Cookies.get('userId');
    const {
        setIsOpen,
        setType,
        handleGetListProductsCart,
        setDetailProduct
    } = useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);

    const {
        boxImg,
        showImgWhenHover,
        showFnWhenHover,
        boxIcon,
        title,
        priceClass,
        boxSize,
        size,
        textCenter,
        boxBtn,
        content,
        containerItem,
        leftBtn,
        largImg,
        containerMargin,
        isActiveSize,
        btnClear
    } = styles;

    const handleChooseSize = (size) => {
        setSizeChoose(size);
    };

    const hanldClearSize = (size) => {
        setSizeChoose('');
    };

    useEffect(() => {
        if (isHomepage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomepage, ourShopStore?.isShowGrid]);

    const handleAddToCart = () => {
        if (!userId) {
            setIsOpen(true);
            setType('login');
            toast.warning('Please login to add products to cart');
            return;
        }
        if (!sizeChoose) {
            toast.warning('Please choose size');
            return;
        }

        //console.log(details);

        const data = {
            userId,
            productId: details._id,
            quantity: 1,
            size: sizeChoose
        };

        //console.log(data);

        setIsLoading(true);

        addProductToCart(data)
            .then((res) => {
                setIsOpen(true);
                setType('cart');
                toast.success('Add Product to cart successfully');
                setIsLoading(false);
                handleGetListProductsCart(userId, 'cart');
            })
            .catch((err) => {
                toast.error('Add Product to cart failed');
                setIsLoading(false);
            });
    };

    const handleShowDetailProductSideBar = () => {
        setIsOpen(true);
        setType('detail');

        setDetailProduct(details);
    };

    //console.log(sizeChoose);

    return (
        <div className={isShowGrid ? containerMargin : containerItem}>
            <div className={classNames(boxImg, { [largImg]: !isShowGrid })}>
                <img src={src} alt='' />
                <img src={prevSrc} alt='' className={showImgWhenHover} />
                <div className={showFnWhenHover}>
                    <div className={boxIcon}>
                        <SlBag style={{ fontSize: '17px' }} />
                    </div>
                    <div className={boxIcon}>
                        <CiHeart style={{ fontSize: '23px' }} />
                    </div>
                    <div className={boxIcon}>
                        <TfiReload />
                    </div>
                    <div
                        className={boxIcon}
                        onClick={handleShowDetailProductSideBar}
                    >
                        <IoEyeOutline style={{ fontSize: '20px' }} />
                    </div>
                </div>
            </div>

            <div className={isShowGrid ? '' : content}>
                {!isHomepage && (
                    <div className={boxSize}>
                        {details.size.map((item, index) => {
                            return (
                                <div
                                    index={index}
                                    className={classNames(size, {
                                        [isActiveSize]: sizeChoose === item.name
                                    })}
                                    onClick={() => handleChooseSize(item.name)}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                )}

                {sizeChoose && (
                    <div onClick={() => hanldClearSize()} className={btnClear}>
                        Clear
                    </div>
                )}

                <div
                    className={classNames(title, { [textCenter]: !isHomepage })}
                >
                    {name}
                </div>

                {!isHomepage && (
                    <div
                        className={textCenter}
                        style={{ color: '#888', marginBottom: '5px' }}
                    >
                        Brach01
                    </div>
                )}
                <div
                    className={classNames(priceClass, {
                        [textCenter]: !isHomepage
                    })}
                    style={{ color: isHomepage ? '#333' : '#888' }}
                >
                    ${price}
                </div>

                {!isHomepage && (
                    <div
                        className={classNames(boxBtn, {
                            [leftBtn]: !isShowGrid
                        })}
                    >
                        <Button
                            content={
                                isLoading ? (
                                    <LoadingTextCommon />
                                ) : (
                                    'ADD TO CARD'
                                )
                            }
                            onClick={handleAddToCart}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
