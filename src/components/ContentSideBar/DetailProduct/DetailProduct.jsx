import { useContext, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import styles from './styles.module.scss';
import SilderCommon from '@components/SliderCommon/SilderCommon';
import SelectBox from '@pages/OurShop/components/SelectBox';
import Button from '@components/Button/Button';
import { BsCart3 } from 'react-icons/bs';
import { TfiReload } from 'react-icons/tfi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FaXTwitter } from 'react-icons/fa6';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaVk } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaSkype } from 'react-icons/fa';
import ClassNames from 'classnames';
import { addProductToCart } from '@/apis/cartService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function DetailProduct() {
    const {
        container,
        title,
        price,
        des,
        lableSize,
        boxSize,
        size,
        boxAddToCart,
        boxOr,
        line,
        or,
        boxButtonSelectOption,
        boxAddOther,
        boxFooter,
        isActive
    } = styles;
    const {
        detailProduct,
        userId,
        setType,
        handleGetListProductsCart,
        isLoading,
        setIsLoading,
        setIsOpen
    } = useContext(SideBarContext);
    const [chooseSize, setChooseSize] = useState('M');
    const [quantity, setQuantity] = useState(1);

    const showOption = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
    ];

    const handleGetSize = (value) => {
        //console.log(value);
        setChooseSize(value);
    };

    const handleClearSize = () => {
        setChooseSize('');
    };

    const handleChooseQuantity = (value) => {
        setQuantity(value);
    };

    const handleAddToCart = () => {
        console.log(detailProduct);

        const data = {
            userId: userId,
            productId: detailProduct._id,
            quantity: quantity,
            size: chooseSize,
            isMultiple: true
        };

        //console.log(data);
        setIsLoading(true);
        {
            isLoading ? setIsOpen(false) : setIsOpen(true);
        }
        addProductToCart(data)
            .then((res) => {
                setType('cart');
                setIsOpen(true);
                handleGetListProductsCart(userId, 'cart');
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

    //console.log(detailProduct);
    //console.log(chooseSize);
    //console.log(quantity);

    return (
        <div className={container}>
            <SilderCommon data={detailProduct.images} />

            <div className={title}>{detailProduct.name}</div>
            <div className={price}>${detailProduct.price}</div>
            <div className={des}>{detailProduct.description}</div>

            <div className={lableSize}>Size:{chooseSize}</div>
            <div className={boxSize}>
                {detailProduct.size.map((item, index) => (
                    <div
                        key={index}
                        className={ClassNames(size, {
                            [isActive]: chooseSize === item.name
                        })}
                        onClick={() => handleGetSize(item.name)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>

            {chooseSize && (
                <div
                    style={{
                        fontSize: '12px',
                        color: '#222',
                        marginTop: '10px',
                        cursor: 'pointer'
                    }}
                    onClick={handleClearSize}
                >
                    Clear
                </div>
            )}

            <div className={boxAddToCart}>
                <SelectBox
                    options={showOption}
                    defaultValue={quantity}
                    getValue={handleChooseQuantity}
                />

                <Button
                    content={
                        <div>
                            {isLoading ? (
                                <LoadingTextCommon />
                            ) : (
                                <div>
                                    {' '}
                                    <BsCart3 /> ADD TO CART{' '}
                                </div>
                            )}
                        </div>
                    }
                    onClick={handleAddToCart}
                />
            </div>

            <div className={boxOr}>
                <div className={line} />
                <div className={or}>OR</div>
                <div className={line} />
            </div>

            <div className={boxButtonSelectOption}>
                <Button
                    content={
                        <div>
                            <BsCart3 /> SELECT OPTION
                        </div>
                    }
                />
            </div>

            <div className={boxAddOther}>
                <TfiReload style={{ fontSize: '20px', marginLeft: '2px' }} />{' '}
                Add to compare
            </div>
            <div className={boxAddOther}>
                <IoMdHeartEmpty style={{ fontSize: '25px' }} /> Add to wishlist
            </div>

            <div className={boxFooter}>
                SKU: <span>12349</span>
            </div>

            <div className={boxFooter}>
                Category: <span>Pulloves</span>
            </div>

            <div className={boxFooter}>
                Estimated delivery: <span>5 - 7 days</span>
            </div>

            <div className={boxFooter}>
                Share:
                <div>
                    <FaXTwitter />
                </div>
                <div>
                    <BiLogoFacebook />
                </div>
                <div>
                    <FaVk />
                </div>
                <div>
                    <FaPinterestP />
                </div>
                <div>
                    <FaLinkedinIn />
                </div>
                <div>
                    <FaWhatsapp />
                </div>
                <div>
                    <FaSkype />
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;
