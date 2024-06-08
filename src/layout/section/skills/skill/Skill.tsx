import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconSrc: string
    title?: string
    text?: string
    viewBox?: string
    width?: string
    height?: string

}


export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillContainer>
                <Icon iconSrc={props.iconSrc} width={props.width} height={props.height} viewBox={props.viewBox}/>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.text}</SkillText>
            </SkillContainer>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;



`

const SkillTitle = styled.h3`
    color: red;
    font-size: 30px;
    text-align: center

`

const SkillText = styled.p`
    color: red;

`
const SkillContainer = styled.div`
    width: 40%;

    justify-content: center;
    align-items: center;
`