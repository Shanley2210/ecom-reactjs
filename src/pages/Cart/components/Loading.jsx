import styles from '../styles.module.scss';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function LoadingCart() {
    const { loadingCart } = styles;

    return (
        <div className={loadingCart}>
            <LoadingTextCommon />
        </div>
    );
}

export default LoadingCart;
