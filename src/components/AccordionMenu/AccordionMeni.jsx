import { useState } from 'react';
import styles from './styles.module.scss';
import ClassNames from 'classnames';
import { IoIosArrowDown } from 'react-icons/io';
import { BsDashLg } from 'react-icons/bs';

function AccordionMenu({ titleMenu, content, onClick, isSelected }) {
    const {
        container,
        title,
        activeTitle,
        contentMenu,
        isVisibility,
        boderBottom
    } = styles;

    const hanldeToggle = () => {
        onClick();
    };

    return (
        <div className={container}>
            <div
                className={ClassNames(title, {
                    [activeTitle]: isSelected
                })}
                onClick={hanldeToggle}
            >
                {isSelected ? (
                    <BsDashLg style={{ fontSize: '17px' }} />
                ) : (
                    <IoIosArrowDown style={{ fontSize: '17px' }} />
                )}
                {titleMenu}
            </div>

            <div
                className={ClassNames(contentMenu, boderBottom, {
                    [isVisibility]: isSelected
                })}
            >
                <div className={isVisibility}>{content}</div>
            </div>
        </div>
    );
}

export default AccordionMenu;
