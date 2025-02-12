import { useContext, useState } from 'react';
import styles from '../styles.module.scss';
import { StoreContext } from '@/contexts/storeProvider';

function Menu({ content, href, setIsOpen, setType }) {
    const { menu, subMenu } = styles;
    const { userInfo, handleLogOut } = useContext(StoreContext);
    const [isShowSubMenu, setisShowSubMenu] = useState(false);

    const hanleClickShowLogin = () => {
        if (content === 'Sign in' && !userInfo) {
            setIsOpen(true);
            setType('login');
        }
    };

    const handleRenderText = (content) => {
        if (content === 'Sign in' && userInfo)
            return `Hello: ${userInfo?.username}`;
        else return content;
    };

    const handleHover = () => {
        //console.log(content);
        if (content === 'Sign in' && userInfo) {
            setisShowSubMenu(true);
        }
    };

    return (
        <div
            className={menu}
            onMouseEnter={handleHover}
            onClick={hanleClickShowLogin}
        >
            {handleRenderText(content)}
            {isShowSubMenu && (
                <div
                    className={subMenu}
                    onMouseLeave={() => setisShowSubMenu(false)}
                    onClick={handleLogOut}
                >
                    LOG OUT
                </div>
            )}
        </div>
    );
}

export default Menu;
