import { Box } from '@chakra-ui/react';
import React, { FC, PropsWithChildren } from 'react';
import { SectionProps } from './section-props';

export const Section: FC<PropsWithChildren> = (props: SectionProps) => {
    return (
        <section>
            <Box
                {...props}
                mt={{
                    base: '10px',
                    sm: '13px',
                    md: '15px',
                    lg: '18px',
                    xl: '30px',
                }}
            >
                {props.children}
            </Box>
        </section>
    );
};
