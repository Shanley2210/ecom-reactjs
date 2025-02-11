import styles from '../styles.module.scss';

function Menu({ content, href, setIsOpen, setType }) {
    const { menu } = styles;
    return (
        <div
            className={menu}
            onClick={() => {
                setIsOpen(true);
                setType('login');
            }}
        >
            {content}
        </div>
    );
}

export default Menu;
