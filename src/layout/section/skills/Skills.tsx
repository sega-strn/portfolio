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
            <FlexWrapper wrap={'wrap'} justify={'space-around'}>
                <SectionSkillContainer justify={'space-around'}>
                    <Skill
                        iconSrc={'reactSvg'}
                        title={'React'}
                        width={'150px'}
                        height={'150px'}

                    />
                    <Skill
                        iconSrc={'appSvg'}
                        title={'App'}
                        width={'150px'}
                        height={'150px'}
                        viewBox={'0 0 18 24'}
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
                </SectionSkillContainer>
            </FlexWrapper>
        </SectionSkills>
    );
};

const SectionSkills = styled.section`
    background-color: antiquewhite;

`

const SectionSkillContainer = styled.div<SkillsContainerPropsType>`
    display: flex;
    flex-direction: row;
    
    min-width: 1220px;
    gap: 50px;
`