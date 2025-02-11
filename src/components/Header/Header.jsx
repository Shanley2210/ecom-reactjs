import useScrollHanding from '@/hooks/useScrollHanding';
import BoxIconLeft from './BoxIcon/BoxIconLeft';
import BoxIconRight from './BoxIcon/BoxIconRight';
import { dataBoxIconLeft, dataBoxIconRight, dataMenu } from './contants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import logo from '@icons/images/Logo-retina.png';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';

function MyHeader() {
    const {
        container,
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        fixedHeader,
        topHeader
    } = styles;

    const { scrollPosition } = useScrollHanding();
    const [fixedPositition, setFixedPositition] = useState(false);
    const { setIsOpen, setType } = useContext(SideBarContext);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };
    // console.log(isOpen);

    useEffect(() => {
        // if (scrollPosition > 80) {
        //     setFixedPositition(true);
        // } else {
        //     setFixedPositition(false);
        // }

        // setFixedPositition(scrollPosition > 80 ? true : false);

        setFixedPositition(scrollPosition > 80);
    }, [scrollPosition]);

    // console.log(scrollPosition);

    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedPositition
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIconLeft.map((item) => {
                            return (
                                <BoxIconLeft
                                    type={item.type}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={logo}
                        alt='Logo'
                        style={{
                            width: '153px',
                            height: '53px',
                            cursor: 'pointer'
                        }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.lengh).map((item) => {
                            return (
                                <Menu
                                    content={item.content}
                                    href={item.href}
                                    setIsOpen={setIsOpen}
                                    setType={setType}
                                />
                            );
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        {dataBoxIconRight.map((item) => {
                            return (
                                <BoxIconRight
                                    type={item.type}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
