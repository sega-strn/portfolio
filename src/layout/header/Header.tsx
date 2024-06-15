import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {SocialHeader} from "../../components/social/Social";

const items = ['lucasviga', 'education', 'experience']
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'center'} gap={'50px'}>
                    <Menu menuItems={items}/>
                    <SocialHeader/>
                </FlexWrapper>
            </Container>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    background-color: rgba(52, 52, 67, 0.35);
    max-width: 921px;
    height: 100%;
    padding: 10px;
    margin: 50px auto;
    border-radius: 100px;

`
