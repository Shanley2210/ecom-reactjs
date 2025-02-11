import styles from './styles.module.scss';
import { IoMdClose } from 'react-icons/io';

function ItemProduct() {
    const { container, boxContent, title, price, boxClose, size } = styles;
    return (
        <div className={container}>
            <img
                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg'
                alt=''
            />
            <div className={boxClose}>
                <IoMdClose style={{ fontSize: '20px', color: 'c1c1c1' }} />
            </div>
            <div className={boxContent}>
                <div className={title}>Title product</div>
                <div className={size}>Size: M</div>
                <div className={price}>$10.00</div>
                <div className={price}>SKU:12345</div>
            </div>
        </div>
    );
}

export default ItemProduct;
