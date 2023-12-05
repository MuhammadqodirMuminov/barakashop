import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { SectionTitle } from '@/UI/section-title/section-title';
export const PageLayout: FC<PropsWithChildren> = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <SectionTitle title='Recomended' link='/product/rec' link_title='Recomended all'/>
        </>
    );
};
