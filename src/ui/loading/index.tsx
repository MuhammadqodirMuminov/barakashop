import LoadingIcon from '@/assets/icons/loading.svg';
import * as S from './styled';

export const Loading = () => {
    return (
        <S.Wrapper>
            <S.Image src={LoadingIcon} />
        </S.Wrapper>
    );
};
