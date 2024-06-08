import React from 'react';
import styled from "styled-components";
import iconsSprite from "../../../../assets/images/icons-srite.svg";

type IconSkillPropsType = {
    urlSrc?: string
    width?: string
    height?: string
    viewBox?: string
    title?: string
    gap?: string
}


export const SkillsListWrapper = (props: IconSkillPropsType) => {
    return (
        <SkillWrapper>
            <p>Front-end Engineer Design</p>

            <SkillItem>
                <SkillsList urlSrc={'figmaBoldSvg'} title={'TesT Figma'}/>
                <SkillsList urlSrc={'reactSvg'} title={'TesT Figma'}/>
                <SkillsList urlSrc={'reactNativeSvg'} title={'TesT Figma'}/>
                <SkillsList urlSrc={'nextJs'} title={'TesT Figma'}/>
                <SkillsList urlSrc={'testingReactSvg'} title={'TesT Figma'}/>
            </SkillItem>
        </SkillWrapper>
    );
};

export const SkillsList = (props: IconSkillPropsType) => {
    return (

        <SkillsListStyled>
            <svg width={props.width || "50px"} height={props.height || "50px"} viewBox={props.viewBox || "0 0 24 24"}
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${props.urlSrc}`}/>
            </svg>
            <ItemTtitle>{`${props.title}`}</ItemTtitle>
        </SkillsListStyled>


    );
};

const SkillWrapper = styled.div`
    display: flex;
    min-height: 440px;
    min-width: 300px;
    border: 0.1rem solid snow;
    border-radius: 5px;
    padding: 20px;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    gap: 20px;


`
const SkillsListStyled = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    margin: 0 auto;
    gap: 20px;




`
const ItemTtitle = styled.h3`

    color: #ffffff;
    font-size: 16px;
    font-weight: 400;


`

const SkillItem = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

`
const ItemIccon = styled.img`


`





