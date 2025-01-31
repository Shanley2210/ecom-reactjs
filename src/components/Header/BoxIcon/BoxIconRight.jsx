import styles from '../styles.module.scss';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function BoxIconRight({ type, href }) {
    const { boxIconRight } = styles;

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'reload':
                return reloadIcon;
            case 'heart':
                return heartIcon;
            case 'cart':
                return cartIcon;
        }
    };

    return (
        <div className={boxIconRight}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
}

export default BoxIconRight;
