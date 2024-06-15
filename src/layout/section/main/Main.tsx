import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import myPhoto from '../../../assets/images/my_foto.png'
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <TextContainer>
                        <MainSubTitle>Hi, I’m Sergey</MainSubTitle>
                        <MainTitle>Fronted Develop</MainTitle>
                        <DescriptionText>
                            During these 4 years as Front-End Software Engineer. My role has extended beyond coding to
                            effective
                            communication with various departments, to define new features and spearheading the
                            development
                            of
                            new apps.
                        </DescriptionText>
                    </TextContainer>
                    <PhotoWrapper>
                        <Photo src={myPhoto} alt={'фото на сайте'}/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    display: flex;
    min-height: 700px;

`

const TextContainer = styled.div`

`
const PhotoWrapper = styled.div`
    margin: 0 10px 0 70px;
    position: relative;

    &::before {
        display: block;
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 50%;
        background: linear-gradient(90.00deg, rgb(19, 176, 245), rgb(231, 15, 170)); // Градиентная обводка
        z-index: 0;
    }
`

const Photo = styled.img`
    position: relative;
    max-width: 400px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;
    border: 10px solid transparent;


`
const MainTitle = styled.h1`
    color: rgb(255, 255, 255);
    font-size: 36px;
    font-weight: 100;
    padding: 0 0 40px 0;

`
const MainSubTitle = styled.h2`
    color: rgb(255, 255, 255);
    font-size: 75px;
    font-weight: 100;
    padding: 0 0 10px 0;

`

const DescriptionText = styled.p`
    font-size: 24px;
    font-weight: 100;
    line-height: 48px;
    text-align: left;
    color: ${theme.colors.font};
`


