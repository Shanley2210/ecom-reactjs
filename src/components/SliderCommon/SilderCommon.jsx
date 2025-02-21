import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

function SilderCommon({ data }) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <IoIosArrowForward />,
        prevArrow: <IoIosArrowBack />
    };

    console.log(data);

    return (
        <Slider {...settings}>
            {data.map((src, index) => {
                return (
                    <div key={index}>
                        <img src={src} alt='' />
                    </div>
                );
            })}
        </Slider>
    );
}

export default SilderCommon;
