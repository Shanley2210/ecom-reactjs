import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import ProductItem from '@components/ProductItem/ProductItem';

function SilderCommon({ data, isProductItem = false, showItem = 1 }) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: showItem,
        slidesToScroll: 1,
        nextArrow: <IoIosArrowForward />,
        prevArrow: <IoIosArrowBack />
    };

    //console.log(data);

    return (
        <Slider {...settings}>
            {data.map((item, index) => {
                const src = !item.image ? item.images[0] : item.image;
                return (
                    <>
                        {isProductItem ? (
                            <ProductItem
                                src={src}
                                prevSrc={src}
                                name={item.name}
                                price={item.price}
                                details={item}
                                isHomepage={false}
                                slideItem={true}
                            />
                        ) : (
                            <div key={index}>
                                <img src={item} alt='' />
                            </div>
                        )}
                    </>
                );
            })}
        </Slider>
    );
}

export default SilderCommon;
