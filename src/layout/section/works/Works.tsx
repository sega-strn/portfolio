import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/png_project/rectangle18.png'
import lendinglImg from '../../../assets/images/png_project/rectangle18.png'
import CRMImg from '../../../assets/images/png_project/rectangle.png'

const worksItems = ['ALL', 'LANDIING PAGE', 'REACT', 'SPA']

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Projects</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={'space-around'}>
                <Work title={'Project Tile goes here'}
                      text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content. This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                      imgSrc={socialImg}
                      iconSrc={'githubSVG'}
                      width={'20px'}
                      height={'20px'}

                />
                <Work title={'Project Tile goes Landing'}
                      text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                      imgSrc={lendinglImg}
                      iconSrc={'githubSVG'}
                      width={'20px'}
                      height={'20px'}

                />
                <Work title={'Project Tile goes CRMSistem'}
                      text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                      imgSrc={CRMImg}
                      iconSrc={'githubSVG'}
                      width={'20px'}
                      height={'20px'}


                />
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    
`