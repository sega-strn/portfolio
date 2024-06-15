import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";


export const SocialHeader = () => {
    return (
        <SocialHeaderStyled>
            <Link href=""><Icon iconSrc={"figmaBoldSvg"} width={'30px'} height={'30px'}/></Link>
            <Link href=""><Icon iconSrc={"githubSVG"} width={'30px'} height={'30px'}/></Link>
            <Link href=""><Icon iconSrc={"linkendingSvg"} width={'30px'} height={'30px'}/></Link>
            <Link href=""><Icon iconSrc={"mailSvg"} width={'30px'} height={'30px'}/></Link>
        </SocialHeaderStyled>


    );
};

export const SocialFuter = () => {

    return (
        <div>
            <a href=""><Icon iconSrc={"githubSVG"}></Icon></a>
            <a href=""><Icon iconSrc={"linkendingSvg"}></Icon></a>
            <a href=""><Icon iconSrc={"mailSvg"}></Icon></a>
        </div>
    );
};

const SocialHeaderStyled = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

`

const Link = styled.a`
    transition: transform 0.3s ease;


    &:hover {
        transform: scale(1.2);
        
    }

`

