import { FC, PropsWithChildren } from 'react';
<<<<<<<<< Temporary merge branch 1
=========
import { Box } from '@chakra-ui/react';
>>>>>>>>> Temporary merge branch 2
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
export const PageLayout: FC<PropsWithChildren> = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
