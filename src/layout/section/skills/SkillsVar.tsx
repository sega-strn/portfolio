import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SkillsListWrapper} from "./skill/SkillsListWrapper";


export const SkillsVar = () => {
    return (
        <StyledSkills>
            <FlexWrapper align={'center'} justify={'space-around'} direction={'row'}>

                <SectionTitle>These are the technologies I’ve been using</SectionTitle>
                <SkillsListWrapper urlSrc={'reactSvg'}/>
                <SkillsListWrapper/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #262726;
    min-height: 100vh;
`

const Spisok = styled.ol`
    list-style-type: none;
    color: snow;
    font-size: 16px;

    margin: 0 0 0 80px;



`



