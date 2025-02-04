import InfoCard from '@components/Info/InfoCard/InfoCard';
import { dataInfo } from './contants';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function Info() {
    const { container } = styles;
    return (
        <div>
            <MainLayout>
                <div className={container}>
                    {dataInfo.map((item, index) => {
                        return (
                            <InfoCard
                                key={index}
                                content={item.title}
                                description={item.descriptio}
                                src={item.src}
                            />
                        );
                    })}
                </div>
            </MainLayout>
        </div>
    );
}

export default Info;
