import styles from '../styles.module.scss';

function InfomationProduct() {
    const dataInfo = [
        { id: 1, title: 'Zise', content: 'S, M, L' },
        { id: 2, title: 'Material', content: 'Fleece' },
        { id: 3, title: 'Color  ', content: 'Black, Blue' }
    ];

    const { itemInfo, containerInfo, title, content } = styles;

    return (
        <div className={containerInfo}>
            {dataInfo.map((item, index) => (
                <div className={itemInfo} key={index}>
                    <div className={title}>{item.title}</div>
                    <div className={content}>{item.content}</div>
                </div>
            ))}
        </div>
    );
}

export default InfomationProduct;
