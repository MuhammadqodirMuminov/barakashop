import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Slider } from '@/UI';
export const PageLayout: FC<PropsWithChildren> = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <Slider
                items={[
                    {
                        title: 'Qaynoq yozda qaynoq aksiyalar',
                        description: 'Olingan har bir mahsulot uchun chegirma',
                        image: '',
                    },
                    {
                        title: 'Qaynoq qishda qaynoq aksiyalar',
                        description: 'Olingan har bir mahsulot uchun chegirma',
                        image: '',
                    },
                ]}
            />
        </>
    );
};
