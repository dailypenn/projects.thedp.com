import React from 'react'
import s from 'styled-components'

import { MoreStories, Date, SectionMainText, PrimaryStory, StyledStoryLink, SecondaryStory, PrimaryStoryLine, SubSectionHeader, MainHeader } from './Typograph'

const Wrapper = s.div`
    /* Util classes */
    .right-border {
        border-right: 1px solid rgba(255, 255, 255, 0.3);
    }

    .right-border-inverse {
        border-right: 1px solid rgba(0, 0, 0, 0.3);
    }

    .narrow-col-right {
        padding-right: 24px;
    }

    .narrow-col-left {
        padding-left: 24px;
    }
`

const Section = s.div`
    background-color: ${({ inverse }) => inverse ? "white" : "#131313"};
    padding: ${({ inverse }) => inverse ? "80px 0px" : "120px 0px"};

`
const Sports = () => {
  return (
    <Wrapper id="sports">
        <Section>
                <div class="container">
                    <SubSectionHeader>VOLLEYBALL</SubSectionHeader>
                    <div class="row">
                        <div class="col-md-6 right-border narrow-col-right">
                            <img class="img-fluid"
                                src="https://s3.amazonaws.com/snwceomedia/dpn/b1fbebf6-e8bf-47d5-9101-8dec2939a32e.sized-1000x1000.jpg" />
                            <MainHeader>Volleyball in Turmoil</MainHeader>
                            <SectionMainText>Penn volleyball’s first season under the direction of coach Iain Braddak was a tumultuous one. Despite several players having reservations about Braddak during the hiring process, Penn Athletics gave him the job in 2018. In addition to being the worst season in program history, eight players filed formal grievances with Penn Athletics against their coach for his conduct during the year. The administration responded to the situation by setting up a team-wide mediation session called restorative justice, in which a third-party firm administered a three-hour meeting attended by all 20 players on the team, Braddak, and Associate Athletic Director Matt Valenti. Braddak returned for the 2019 season with the hope of focusing on the future of the program. However, a different type of setback occurred near the end of the season when Penn Athletics announced that the remaining two games of the team’s season would be canceled following the administration’s discovery of “vulgar, offensive, and disrespectful posters” in the team’s locker room. Multiple athletes on the team did not respond to requests for comment, while Penn Athletics stated that the cancellation had nothing to do with last season’s grievances.</SectionMainText>
                        </div>
                        <div class="col-md-6 narrow-col-left">
                            <div class="row">
                                <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/04/penn-volleyball-iain-braddak-athletics-mistreatment-mental-health-upenn-coach"><PrimaryStory> 'No one is listening': Under new coach, players lose hope amid alleged mistreatment </PrimaryStory></a>
                                        <Date> Apr. 18 </Date>
                                </div>
                                <div class="col-md-6">
                                    <img class="img-fluid"
                                        src="https://s3.amazonaws.com/snwceomedia/dpn/b1fbebf6-e8bf-47d5-9101-8dec2939a32e.sized-1000x1000.jpg" />
                                </div>
                            </div>
                            <PrimaryStoryLine/>
                            <div class="row">
                                <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/05/penn-volleyball-coach-iain-braddak-mistreatment-upenn-hiring-rudy-fuller-valenti"><PrimaryStory> Amid volleyball controversy, Penn Athletics stands with coach despite players' concerns </PrimaryStory></a>
                                    <Date> May 5 </Date>
                                </div>
                                <div class="col-md-6">
                                    <img class="img-fluid"
                                        src="https://s3.amazonaws.com/snwceomedia/dpn/be1d6df5-19a0-4adf-80ff-6b4cd9c0af89.sized-1000x1000.jpg" />
                                </div>
                            </div>
                            <PrimaryStoryLine/>
                            <div class="row">
                                    <div class="col-md-6">
                                        <a href="https://www.thedp.com/article/2019/10/penn-volleyball-post-allegations-focus-margaret-planek-autumn-leak-iain-braddak"><PrimaryStory> After last spring's mediation efforts, Penn volleyball says its focus is on the future </PrimaryStory></a>
                                        <Date> Oct. 2 </Date>
                                    </div>
                                    <div class="col-md-6">
                                        <img class="img-fluid"
                                            src="https://snworksceo.imgix.net/dpn/361e7d67-dacf-4498-9650-783291133c0f.sized-1000x1000.jpg?w=1000" />
                                    </div>
                            </div>
                            <PrimaryStoryLine/>
                            <div class="row">
                                <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/11/penn-volleyball-season-canceled-2019-posters"><PrimaryStory> Remainder of Penn volleyball's season canceled, Penn Athletics announces </PrimaryStory></a>
                                    <Date> Nov. 13 </Date>
                                </div>
                                <div class="col-md-6">
                                    <img class="img-fluid" src="https://snworksceo.imgix.net/dpn/1dc3a81b-b82f-453e-91dc-a38410bb110c.sized-1000x1000.jpg?w=1000" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

        {/* <!-- SPORTS 2--> */}
            <Section inverse={true}>
                <div class="container">
                    <SubSectionHeader>FRANKLIN FIELD</SubSectionHeader>
                    <div class="row">
                        <div class="col-md-6 right-border-inverse narrow-col-right">
                            <img class="img-fluid" src="https://s3.amazonaws.com/snwceomedia/dpn/183bc931-cf87-45eb-bde8-2c315e521412.sized-1000x1000.jpg" />
                            <MainHeader color={"#131313"}>Franklin Field Turns 125</MainHeader>
                            <SectionMainText inverse={true}>Penn’s own Franklin Field turned 125 years old in 2019, and the party lasted all year long. From the Philadelphia Eagles to the service academies to the Red and Blue’s own squads, the Frank has been home to scores of teams across its history. But nowadays the stadium is arguably most full for the annual Penn Relays in late April, where thousands from around the world come to see the world’s best athletes compete in track and field. Penn football ushered in the historic milestone with commemorative all-red throwback uniforms, which they wore for select home games this season. Whether for football, sprint football, lacrosse, or track, Franklin Field will remain one of the nation’s most sacred venues for years to come.</SectionMainText>
                        </div>
                        <div class="col-md-6 narrow-col-left">
                            <div class="row">
                                <div class="col-md-6">
                                        <a href="https://www.thedp.com/article/2019/01/penn-football-125-years-franklin-field-celebration-campaign"><PrimaryStory inverse={true}> Yearlong celebration announced for Penn's Franklin Field </PrimaryStory></a>
                                        <Date inverse={true}> Jan. 17 </Date>
                                </div>
                                <div class="col-md-6">
                                    <img class="img-fluid"
                                        src="https://snworksceo.imgix.net/dpn/285580a4-2ee5-4715-bd17-b0f1b0018d6e.sized-1000x1000.jpg?w=1000" />
                                </div>
                            </div>
                            <PrimaryStoryLine inverse={true}/>
                            <div class="row">
                                <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/04/penn-relays-track-125-history-owens-bannister-batdorf-haines"><PrimaryStory inverse={true}> 125 years strong: A look back at some of the biggest moments in Penn Relays history </PrimaryStory></a>
                                    <Date inverse={true}> Apr. 24 </Date>
                                </div>
                                <div class="col-md-6">
                                    <img class="img-fluid"
                                        src="https://snworksceo.imgix.net/dpn/5e5f7877-e726-4ca4-bb62-356f9716c9dd.sized-1000x1000.jpg?w=1000" />
                                </div>
                            </div>
                            <PrimaryStoryLine inverse={true}/>
                            <div class="row">
                                <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/08/125-years-franklin-field-anniversary-penn-football-ivy-league-ncaa-george-h-woodruff-ray-priore"><PrimaryStory inverse={true}> 125 years of Franklin Field: The home of Penn football </PrimaryStory></a>
                                    <Date inverse={true}> Aug. 8 </Date>
                                </div>
                                <div class="col-md-6">
                                    <img class="img-fluid"
                                        src="https://snworksceo.imgix.net/dpn/0b49deee-8069-446d-83ae-a04e26ae1de5.sized-1000x1000.jpg?w=1000" />
                                </div>
                            </div>
                            <MoreStories inverse={true}>
                                <SubSectionHeader color={"#131313"}>MORE STORIES</SubSectionHeader>
                                <StyledStoryLink href="https://www.thedp.com/article/2019/08/125-years-franklin-field-anniversary-penn-track-and-field-penn-relays-jesse-owens-john-haines"  >
                                        <SecondaryStory inverse={true}> 125 years of Franklin Field: The birthplace of Penn Relays </SecondaryStory>
                                    </StyledStoryLink>
                                <Date inverse={true}> Aug. 16 </Date>
                                <StyledStoryLink href="https://www.thedp.com/article/2019/09/penn-football-throwback-uniforms-red-blue-franklin-field-125-anniversary"  >
                                        <SecondaryStory inverse={true}> Penn football unveils throwback uniforms for 125th anniversary of Franklin Field </SecondaryStory>
                                    </StyledStoryLink>
                            <Date inverse={true}> Sep. 25 </Date>
                            </MoreStories>
                        </div>
                    </div>
                </div>
            </Section>

        {/* <!-- SPORTS 3--> */}
        <Section>
            <div class="container">
                <SubSectionHeader>JEROME ALLEN</SubSectionHeader>
                <div class="row">
                    <div class="col-md-6 right-border narrow-col-right">
                        <img class="img-fluid"
                            src="https://s3.amazonaws.com/snwceomedia/dpn/3bdda7fa-b81f-4a72-9c12-f97b554f0373.sized-1000x1000.jpg" />
                        <MainHeader>Jerome Allen scandal continues</MainHeader>
                        <SectionMainText>While news of the scandal first broke in July of 2018, the Jerome Allen bribery scandal remains unresolved nearly a year and a half later. In March, Allen testified against Penn parent Philip Esformes in federal court, saying that Esformes bribed him in order to secure admission for his son, Morris, who graduated from Wharton in May. Allen’s testimony resulted in Esformes’ conviction, the implication of former Penn men’s basketball assistant coach Ira Bowman, Allen’s removal from the Penn Athletics Hall of Fame, and the avoidance of jail time for the charges against him. Allen, who was forced to pay over $200,000 in fines and forfeitures, pleaded guilty. Penn Athletics has not commented on Allen or its pending investigation into his conduct since July.</SectionMainText>
                    </div>
                    <div class="col-md-6 narrow-col-left">
                        <div class="row">
                            <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/03/penn-athletics-jerome-allen-philip-esformes-trial-update-bribery-basketball-morris"><PrimaryStory> Updated: Former Penn coach Jerome Allen testifies, implicating former assistant </PrimaryStory></a>
                                    <Date> Mar. 10 </Date>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/fc33bfcb-c2b5-4247-b482-fee5946add6e.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                        <PrimaryStoryLine/>
                        <div class="row">
                            <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/03/penn-jerome-allen-esformes-ira-bowman-smrt-investigation-bribery-scandal-ncaa-admission"><PrimaryStory> Penn Athletics declines to further comment on Jerome Allen investigation </PrimaryStory></a>
                                    <Date> Mar. 14 </Date>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/3aa540e0-9f7c-4858-b6a9-6ab2f91e3dbc.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                    <MoreStories>
                        <SubSectionHeader color={"#131313"}>MORE STORIES</SubSectionHeader>
                            <StyledStoryLink href="https://www.thedp.com/article/2019/07/jerome-allen-probation-accepting-bribes-penn-mens-basketball-college-admissions-scandal-esformes"  >
                                <SecondaryStory> Former Penn coach Jerome Allen avoids jail time in admissions bribery scandal </SecondaryStory>
                            </StyledStoryLink>
                        <Date> July 2 </Date>
                        <StyledStoryLink href="https://www.thedp.com/article/2019/07/penn-athletics-jerome-allen-removed-hall-of-fame-trial-bribery-esformes-mens-basketball"  >
                                <SecondaryStory> Penn Athletics removes Jerome Allen from its Hall of Fame after federal conviction </SecondaryStory>
                            </StyledStoryLink>
                        <Date> July 2 </Date>
                        <StyledStoryLink href="https://www.thedp.com/article/2019/07/penn-athletics-jerome-allen-admissions-bribery-scandal-varsity-blues-ncaa-ivy-league-mens-basketball"  >
                            <SecondaryStory> A year after the scandal broke, Penn Athletics remains quiet on Jerome Allen </SecondaryStory>
                        </StyledStoryLink>
                        <Date> July 20 </Date>
                    </MoreStories>
                </div>
                </div>
            </div>
        </Section>


        {/* <!-- SPORTS 4--> */}
        <Section inverse={true}>
            <div class="container">
                <SubSectionHeader>BASKETBALL</SubSectionHeader>
                <div class="row">
                    <div class="col-md-6 right-border-inverse narrow-col-right">
                        <img class="img-fluid"
                            src="https://s3.amazonaws.com/snwceomedia/dpn/ccf77784-1ddd-400d-879f-a48367e7475f.sized-1000x1000.jpg" />
                        <MainHeader color={"#131313"}>Basketball has historic year</MainHeader>
                        <SectionMainText inverse={true}>Penn men’s basketball started 2019 with a major milestone, winning its first Big 5 title since 2002 with a final win over Saint Joseph’s in January. Despite that success, however, the Quakers struggled in Ivy League play, clinching a spot in the Ivy Tournament on the final day of the regular season with a 7-7 record. The Red and Blue then lost to Harvard in the Tournament semifinal. Penn women’s basketball won a title of its own, sharing the Ivy League regular season championship with Princeton. However, the Quakers lost to the Tigers in the Ivy Tournament final, leaving them a game short of March Madness.</SectionMainText>
                    </div>
                    <div class="col-md-6 narrow-col-left">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/01/penn-mens-basketball-saint-josephs-big-5-washington-three-point-shooting-charlie-brown"><PrimaryStory inverse={true}> Penn men's basketball completes sweep of Big 5 opponents by beating Saint Joseph's, 78-70 </PrimaryStory></a>
                                <Date inverse={true}> Jan. 26 </Date>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/03db02a2-838b-4e0d-a3c6-e49aa8536999.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                        <PrimaryStoryLine inverse={true}/>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/03/penn-mens-basketball-brown-recap-ivy-league-tournament-goodman-brodeur"><PrimaryStory inverse={true}> Penn men's basketball clinches Ivy Tournament berth with win over Brown </PrimaryStory></a>
                                <Date inverse={true}> Mar. 9 </Date>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/4bcf5f6e-896e-439a-a390-00304e0ccd83.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                        <PrimaryStoryLine inverse={true}/>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/03/penn-womens-basketball-recap-brown-ivy-league-champions-parker-sterba"><PrimaryStory inverse={true}> Penn women's basketball overpowers last-place Brown to win share of Ivy League title </PrimaryStory></a>
                                <Date inverse={true}> Mar. 9 </Date>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/999b53a1-7e52-420c-9ec4-aaf30a5ffb54.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                    <MoreStories inverse={true}>
                        <SubSectionHeader color={"#131313"}>MORE STORIES</SubSectionHeader>
                        <StyledStoryLink href="https://www.thedp.com/article/2019/03/penn-mens-basketball-ivy-league-tournament-madness-semifinal-recap-harvard"  >
                                <SecondaryStory inverse={true}> Penn men's basketball falls to Harvard, 66-58, in Ivy Tournament semifinals </SecondaryStory>
                            </StyledStoryLink>
                        <Date inverse={true}> Mar. 16 </Date>
                        <StyledStoryLink href="https://www.thedp.com/article/2019/03/penn-womens-basketball-princeton-recap-ivy-league-championship-ncaa"  >
                                <SecondaryStory inverse={true}> Penn women's basketball falls to Princeton in Ivy Tournament final, 65-54 </SecondaryStory>
                            </StyledStoryLink>
                        <Date inverse={true}> Mar. 17 </Date>
                    </MoreStories>
                </div>
                </div>
            </div>
        </Section>
    </Wrapper>
  )
}

export default Sports