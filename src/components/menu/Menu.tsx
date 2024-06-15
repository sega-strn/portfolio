import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return <ListItem key={index}><Link href="#">
                        {item}
                    </Link></ListItem>
                })}
            </ul>

        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
    display: flex;

    align-items: center;


    ul {
        display: flex;
        justify-content: center;
        list-style: none;
        gap: 42px;
    }
`
const Link = styled.a`
    color: ${theme.colors.accent};
    font-family: Roboto, sans-serif;
    font-size: 20px;
    font-weight: 100;
`
const ListItem = styled.li`
    position: relative;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.2)

    }
`

