import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import myPhoto from '../../../assets/images/my_foto.png'

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <TextContainer>
                    <MainSubTitle>Hi, I’m Sergey</MainSubTitle>
                    <MainTitle>Fronted Develop</MainTitle>
                    <DescriptionText>
                        During these 4 years as Front-End Software Engineer. My role has extended beyond coding to
                        effective
                        communication with various departments, to define new features and spearheading the development
                        of
                        new apps.
                    </DescriptionText>
                </TextContainer>
                <Photo src={myPhoto} alt={'фото на сайте'}/>
            </FlexWrapper>
        </StyledMain>
    );
};

const TextContainer = styled.div`

`


const Photo = styled.img`
    max-width: 500px;
    object-fit: cover;
    margin: 0 10px 0 70px;

`
const MainTitle = styled.h1`
    color: rgb(255, 255, 255);
    font-size: 36px;
    font-weight: 100;
    margin: 0 0 40px 16px;

`
const MainSubTitle = styled.h2`
    color: rgb(255, 255, 255);
    font-size: 75px;
    font-weight: 100;
    margin: 0 0 10px 16px;

`

const DescriptionText = styled.p`
    color: rgb(255, 255, 255);
    max-width: 662px;
    font-size: 24px;
    font-weight: 100;
    margin: 0 0 0 16px;
`
const StyledMain = styled.div`
    background-color: black;
`

