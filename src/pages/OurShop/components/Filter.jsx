import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { CiBoxList } from 'react-icons/ci';
import styles from '../styles.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import SelectBox from '@pages/OurShop/components/SelectBox';

function Filter() {
    const { containerFilter, boxLeft, boxIcon, selectBox, show, sort } = styles;
    const { sortOption, showOption, setSortId, setShowId, setIsShowGrid } =
        useContext(OurShopContext);

    const getValueSelect = (value, type) => {
        // console.log(value);
        // console.log(type);

        if (type === 'sort') {
            setSortId(value);
        } else {
            setShowId(value);
        }
    };

    const handleGetShowGrid = (type) => {
        // console.log(type);
        if (type === 'Grid') {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(false);
        }
    };

    // console.log(sortOption);
    //console.log(showOption);

    return (
        <div className={containerFilter}>
            <div className={boxLeft}>
                <SelectBox
                    options={sortOption}
                    getValue={getValueSelect}
                    type='sort'
                />

                <div className={boxIcon}>
                    <TfiLayoutGrid4
                        style={{ fontSize: '20px', cursor: 'pointer' }}
                        onClick={() => {
                            handleGetShowGrid('Grid');
                        }}
                    />
                    <div
                        style={{
                            height: '20px',
                            width: '1px',
                            backgroundColor: '#e1e1e1'
                        }}
                    />
                    <CiBoxList
                        style={{
                            fontSize: '25px',
                            color: '#222',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            handleGetShowGrid('List');
                        }}
                    />
                </div>
            </div>
            <div className={boxLeft}>
                <div style={{ fontSize: '14px', color: '#555' }}>Show</div>
                <SelectBox
                    options={showOption}
                    getValue={getValueSelect}
                    type='show'
                />
            </div>
        </div>
    );
}

export default Filter;
