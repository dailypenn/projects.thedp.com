import React from 'react'
import s from 'styled-components'

import { 
    MoreStories, 
    ColumnTitle, 
    Author, 
    StyledStoryLink, 
    SecondaryStory, 
    SectionHeader, 
    MoreStoriesHeader,
    SectionDescription } from './Typograph'
import { OPEN_SANS_REGULAR, DM_SERIF_DISPLAY_REGULAR } from '../../../utils/font'

const Wrapper = s.div`
    background-color: #F1F5FF;
    padding: 120px 0px;

    .right-border-op {
        border-right: 1px solid rgba(0, 0, 0, 0.3);
    }

    .narrow-col-left {
        padding-left: 24px;
    }
`

const OpinionImg = s.div`
    background-image: url(${({background}) => background});
    height: 54px;
    width: 54px;
    background-color: #f9f9f9;
    float: left;
    border-radius: 50%;
    background-size: cover;
    background-position: top;
    flex-shrink: 0;
`

const OpinionCard = s.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 60px;
    padding-bottom: 30px;
    padding-right: 20px;
    ${OPEN_SANS_REGULAR}
`

const OpinionCardImg = s.img`
    margin-bottom: 20px;
    width: auto;
`

const AuthorImg = s.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        margin-bottom: 0px;
        margin-left: 16px;
        color: #8E929F;
        font-weight: bold;
        font-size: 14px;
    }

    p:hover {
        color: #ABAFBA;
    }
`

const OpinionTitle = s.h4`
    color:#131313;
    ${DM_SERIF_DISPLAY_REGULAR}
    font-size: 28px;
    margin-bottom: 12px;
    
    :hover {
        color: #505050;
    }
`

const Opinion = () => (
      <Wrapper id="opinion">
          <div class="container">
            <SectionHeader>Opinion</SectionHeader>
            <SectionDescription>
                This year, our columnists reacted to some of the most pressing issues affecting Penn students and the
                    Philadelphia area. Here are some of the year’s strongest pieces.
            </SectionDescription>
            <div class="row">
                <div class="col-md-4">
                    <OpinionCard>
                        <OpinionCardImg className="img-fluid" src="https://snworksceo.imgix.net/dpn/19aff961-4141-4811-bb5b-86d4e8910a9b.sized-1000x1000.jpg?w=1000"/>
                        <ColumnTitle>UROOBA UNPLUGGED</ColumnTitle>
                        <a href="https://www.thedp.com/article/2019/02/public-school-ivy-league-children-alumni-urooba-abid-upenn-philadelphia">
                            <OpinionTitle>All Penn alumni should send their kids to public schools</OpinionTitle>
                        </a>
                        <p>Penn graduates sending their kids to private schools is an inherently selfish decision</p>
                        <AuthorImg>
                            <OpinionImg
                                background={"https://snworksceo.imgix.net/dpn/416973f1-cfe6-4915-ad58-a2f69c16a950.sized-1000x1000.jpg?w=1000"}/>
                            <a href="https://www.thedp.com/staff/urooba-abid">
                                <p class>UROOBA ABID</p>
                            </a>
                        </AuthorImg>
                    </OpinionCard>
                </div>
                <div class="col-md-4">
                    <OpinionCard>
                        <OpinionCardImg className="img-fluid" src="https://snworksceo.imgix.net/dpn/6a305591-bdf8-4a0c-9e5e-7e3eb1c9cf30.sized-1000x1000.jpg?w=1000"/>
                        <ColumnTitle>THE OXFORD C'MON</ColumnTitle>
                        <a href="https://www.thedp.com/article/2019/01/gillette-ad-metoo-masculinity-sophia-durose-upenn-philadelphia">
                            <OpinionTitle>Toxic masculinity runs deeper than the Gillette ad</OpinionTitle>
                        </a>
                        <p>What Penn can learn from the Gillette ad</p>
                        <AuthorImg>
                            <OpinionImg background={"https://snworksceo.imgix.net/dpn/debec73b-b048-4d5c-90fa-1892021d2c37.sized-1000x1000.png?w=1000"}/>
                            <a href="https://www.thedp.com/staff/sophia-durose">
                                <p class>SOPHIA DUROSE</p>
                            </a>    
                        </AuthorImg>
                    </OpinionCard>
                </div>
                <div class="col-md-4">
                    <OpinionCard>
                        <OpinionCardImg className="img-fluid" src="https://snworksceo.imgix.net/dpn/9f96ee6f-0004-4bd9-9999-7e9e4e7994da.sized-1000x1000.png?w=1000"/>
                        <ColumnTitle>EDITORIAL</ColumnTitle>
                        <a href="https://www.thedp.com/article/2019/12/mckinsey-upenn-consulting-editorial-human-rights-immigration-ivy-league-philadelphia">
                            <OpinionTitle>Penn students must boycott McKinsey in light of its work with ICE</OpinionTitle>
                        </a>
                        <AuthorImg>
                            <OpinionImg background={"https://pbs.twimg.com/profile_images/913471917004222464/nfI7Z1AG_400x400.jpg"}/>
                            <a href="https://www.thedp.com/staff/the-daily-pennsylvanian">
                                <p class>THE DAILY PENNSYLVANIAN EDTIORIAL BOARD</p>
                            </a>   
                        </AuthorImg>
                    </OpinionCard>
                </div>
                    
                <MoreStories inverse={true}>
                    <MoreStoriesHeader opinion inverse>MORE COLUMNS</MoreStoriesHeader>
                    <div class="row">
                        <div class="col-md-3 right-border-op">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/10/penn-sexual-assault-survey-administration-gutmann-ivy-league-editorial"  >
                                <SecondaryStory inverse={true}>It's not enough to be 'troubled.' Penn must step up to address sexual assault.</SecondaryStory>
                            </StyledStoryLink>
                            <Author opinion={true}>THE DAILY PENNSYLVANIAN EDTIORIAL BOARD</Author>
                        </div>
                        <div class="col-md-3 right-border-op narrow-col-left">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/03/admissions-bribery-jerome-allen-basketball-ivy-league-upenn-philadelphia"  >
                                <SecondaryStory inverse={true}>Jerome Allen must be removed from the Penn Athletics Hall of Fame</SecondaryStory>
                            </StyledStoryLink>
                            <Author opinion={true}>THE DAILY PENNSYLVANIAN EDTIORIAL BOARD</Author>
                        </div>
                        <div class="col-md-3 right-border-op narrow-col-left">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/10/philadelphia-gentrification-penn-bubble-ivy-league-upenn-philadelphia"  >
                                <SecondaryStory inverse={true}> Our relationship with Philadelphia is broken. Here’s how we fix it. </SecondaryStory>
                            </StyledStoryLink>
                            <Author opinion={true}>ALFREDO PRATICÒ</Author>
                        </div>
                        <div class="col-md-3 narrow-col-left">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/01/admissions-ivy-league-harvard-duke-christy-qiu-upenn-philadelphia"  >
                                <SecondaryStory inverse={true}> I looked at my Penn admissions file, and you should too </SecondaryStory>
                            </StyledStoryLink>
                            <Author opinion={true}> CHRISTY QIU </Author>
                        </div>
                    </div>
                </MoreStories>
            </div>
        </div>
      </Wrapper>
  )


export default Opinion