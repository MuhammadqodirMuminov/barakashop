import styled from 'styled-components';

export const CategoryCardBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    max-width: 407px;
    max-height: 250px;
    padding: 30px;
    padding-right: 0;
    background-color: #e9edfa;
    background-image: url('/src/assets/img/placeholders/category-bg.png');
    background-position: center right;
    background-repeat: no-repeat;
`;

export const CategoryImage = styled.img`
    width: 100%;
    margin-top: 50px;
    max-width: 190px;
    object-fit: cover;
    image-resolution: auto;
`;
