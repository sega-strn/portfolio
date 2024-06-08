import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";


export const SocialHeader = () => {
    return (
        <SocialHeaderStyled>
            <a href=""><Icon iconSrc={"figmaBoldSvg"} width={'30px'} height={'30px'}/></a>
            <a href=""><Icon iconSrc={"githubSVG"} width={'30px'} height={'30px'}/></a>
            <a href=""><Icon iconSrc={"linkendingSvg"} width={'30px'} height={'30px'}/></a>
            <a href=""><Icon iconSrc={"mailSvg"} width={'30px'} height={'30px'}/></a>
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

