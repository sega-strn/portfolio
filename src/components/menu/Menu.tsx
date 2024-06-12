import React from 'react';
import styled from "styled-components";
import {SocialHeader} from "../social/Social";


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return <li key={index}><a href="#">{item}</a></li>
                })}

            </ul>

            <SocialHeader/>

        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 80px;

    a {
        color: #B292FF;
        text-decoration: none;
    }

    ul {
        display: flex;
        justify-content: center;
        list-style: none;
        gap: 42px;
    }
`

