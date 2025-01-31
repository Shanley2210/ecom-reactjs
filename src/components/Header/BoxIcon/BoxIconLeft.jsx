import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import instaIcon from '@icons/svgs/instaIcon.svg';
import ytbIcon from '@icons/svgs/youtubeIcon.svg';

function BoxIconLeft({ type, href }) {
    const { boxIconLeft } = styles;

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'ins':
                return instaIcon;
            case 'ytb':
                return ytbIcon;
        }
    };

    return (
        <div className={boxIconLeft}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
}

export default BoxIconLeft;
