import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

type SkillsContainerPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
}

export const Skills = () => {
    return (
        <SectionSkills>

            <SectionTitle>These are the technologies I’ve been using</SectionTitle>
            <FlexWrapper direction={'row'} align={'center'} justify={'space-around'}>

                <Skill
                    iconSrc={'reactSvg'}
                    title={'React'}
                />

                <Skill
                    iconSrc={'appSvg'}
                    title={'App'}
                />

                <Skill
                    iconSrc={'reactNativeSvg'}
                    title={'React Native'}
                />

                <Skill
                    iconSrc={'nextJs'}
                    title={'Next.js'}
                />

                <Skill
                    iconSrc={'nextJs'}
                    title={'Next.js'}
                />

                <Skill
                    iconSrc={'nextJs'}
                    title={'Next.js'}
                />

            </FlexWrapper>
        </SectionSkills>
    );
};

const SectionSkills = styled.section`
    min-height: 50vh;
    background-color: antiquewhite;

`

const SectionSkillContainer = styled.div<SkillsContainerPropsType>`
    display: flex;
    flex-direction: row;
    min-width: 1220px;
    gap: 50px;
`