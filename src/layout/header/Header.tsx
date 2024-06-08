import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper>
                <Menu/>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: rgba(52, 52, 67, 0.35);
    display: flex;
    justify-content: center;
    width: 921px;
    height: 64px;
    margin: 50px auto;
    border-radius: 100px;

`
