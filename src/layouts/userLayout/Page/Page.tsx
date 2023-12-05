import { FC, PropsWithChildren } from 'react';
<<<<<<< HEAD
import { Box } from '@chakra-ui/react';
=======
>>>>>>> a0a529ea3c00a04cc3dceb8ccff6a93b22bcd660
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
