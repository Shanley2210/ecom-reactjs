import styles from './styles.module.scss';

function MyButton() {
    return (
        <div>
            <button className={styles.btnSize}>M</button>
            <button className={styles.btnAddWishlist}>X</button>
            <button className={styles.btnAddToCart}>ADD TO CART</button>
        </div>
    );
}

export default MyButton;
