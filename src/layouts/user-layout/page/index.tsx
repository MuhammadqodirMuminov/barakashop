import { useActions } from '@/hooks';
import { FC, PropsWithChildren, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../header';
export const PageLayout: FC<PropsWithChildren> = () => {
    const { getAllCategory } = useActions();

    useEffect(() => {
        getAllCategory({
            callback: () => {},
        });
    }, []);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
