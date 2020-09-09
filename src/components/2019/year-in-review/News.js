import React from 'react'
import s from 'styled-components'

import { 
    Section,
    MoreStories, 
    PhotoGallery, 
    Date, 
    SectionMainText, 
    PrimaryStory, 
    StyledStoryLink, 
    SecondaryStory, 
    MoreStoriesHeader,
    PrimaryStoryLine, 
    SubSectionHeader, 
    MainHeader } 
    from './Typograph'

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

const News = () => (
    <Wrapper>
        <Section id="news">
            <div class="container">
                <SubSectionHeader>PENN ADMISSIONS SCANDAL</SubSectionHeader>
                <div class="row">
                    <div class="col-md-6 right-border narrow-col-right">
                        <img class="img-fluid" src="https://s3.amazonaws.com/snwceomedia/dpn/f880ab9e-bc8a-4f3d-a44b-541a31e6c13c.sized-1000x1000.jpg" />
                        <MainHeader>College admissions scandal hits Penn men’s basketball</MainHeader>
                        <SectionMainText>Former Penn men’s basketball coach Jerome Allen has remained a key witness for the investigation into the college admissions bribery scandal that came to light in March 2019. He plead guilty in October 2018 to accepting bribes in exchange for recruitment of a player. In March, Allen testified in a federal trial that Philip Esformes paid him to facilitate his son’s recruitment in 2015. Although the national scandal that broke days after Allen's testimony did not name Penn, Dean of Admissions Eric Furda said Penn would consider revising its recruitment process. During Esformes' trial, news broke that he had also sent more than $400,000 to the consultant at the center of the national scandal after contacting him about his son’s recruitment. Esformes’ trial ended in April when he was found guilty on 20 charges, including bribery. In July, a judge sentenced Allen to four years probation, community service, and a fine, avoiding jail time. The next day, Penn Athletics removed Allen from its Hall of Fame.</SectionMainText>
                    </div>
                    <div class="col-md-6 narrow-col-left">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/03/upenn-admissions-bribery-eric-furda-jerome-allen-college">
                                    <PrimaryStory> Furda says Penn will revisit admissions procedures in light of national bribery scandal </PrimaryStory>
                                </a>
                                <Date> Mar. 14 </Date>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid" 
                                    src="https://snworksceo.imgix.net/dpn/e5056ee4-a56c-4e68-9a6c-03306604ee29.sized-1000x1000.png?w=1000" />
                            </div>
                        </div>
                        <PrimaryStoryLine/>
                            <div class="row">
                                <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/03/admissions-scandal-upenn-singer-esformes-basketball-bribery">
                                        <PrimaryStory> Penn parent sent more than $400,000 to consultant at center of national admissions scandal </PrimaryStory>
                                    </a>
                                    <Date> Mar. 18 </Date>
                                </div>
                                <div class="col-md-6">
                                    <img class="img-fluid"
                                        src="https://snworksceo.imgix.net/dpn/b5b78f08-7bf1-425b-8b18-8b222d87c8f7.sized-1000x1000.jpg?w=1000" />
                                </div>
                            </div>
                        <PrimaryStoryLine/>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/04/penn-jerome-allen-philip-esformes-trial-jury-convicts-usc-yale-admissions-20-federal-charges">
                                    <PrimaryStory> Penn parent found guilty in case involving bribery of Jerome Allen for college admission </PrimaryStory>
                                </a>
                                <Date> Apr. 5 </Date>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/b5b78f08-7bf1-425b-8b18-8b222d87c8f7.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                        <PrimaryStoryLine/>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/07/penn-athletics-jerome-allen-removed-hall-of-fame-trial-bribery-esformes-mens-basketball">
                                    <PrimaryStory> Penn Athletics removes Jerome Allen from its Hall of Fame after federal conviction </PrimaryStory>
                                </a>
                                <Date> July 2 </Date>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                src="https://snworksceo.imgix.net/dpn/a9f9468c-3601-4dbc-b59b-13f9abd1d03e.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                    </div>
                </div>
                <MoreStories>
                    <MoreStoriesHeader>MORE STORIES</MoreStoriesHeader>
                    <div class="row">
                        <div class="col-md-3 right-border">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/03/penn-athletics-jerome-allen-philip-esformes-trial-update-bribery-basketball-morris">
                                <SecondaryStory> Updated: Former Penn coach Jerome Allen testifies, implicating former assistant </SecondaryStory>
                            </StyledStoryLink>
                            <Date> Mar. 10 </Date>
                        </div>
                        <div class="col-md-3 right-border narrow-col-left">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/03/ivy-league-college-admissions-bribery-justice-department-jerome-allen"  >
                                <SecondaryStory> Penn not among schools named in nationwide college admissions scandal </SecondaryStory>
                            </StyledStoryLink>
                            <Date> Mar. 12 </Date>
                        </div>
                        <div class="col-md-3 right-border narrow-col-left">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/03/bribery-esformes-scandal-william-singer-college-admissions"  >
                                <SecondaryStory> Parent who bribed former Penn coach contacted consultant at center of admissions scandal </SecondaryStory>
                            </StyledStoryLink>
                            <Date> Mar. 16 </Date>
                        </div>
                        <div class="col-md-3 narrow-col-left">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/07/jerome-allen-probation-accepting-bribes-penn-mens-basketball-college-admissions-scandal-esformes"  >
                                <SecondaryStory> Former Penn coach Jerome Allen avoids jail time in admissions bribery scandal </SecondaryStory>
                            </StyledStoryLink>
                            <Date> July 2 </Date>
                        </div>
                    </div>
                </MoreStories>
            </div>
        </Section>

        <Section inverse>
            <div class="container">
                <SubSectionHeader>SCHOOL RENAMINGS</SubSectionHeader>
                <div class="row">
                    <div class="col-md-6 right-border-inverse narrow-col-right">
                        <img class="img-fluid"
                            src="https://s3.amazonaws.com/snwceomedia/dpn/e96e9108-c45b-468e-94c6-dde38d382089.sized-1000x1000.jpg" />
                        <MainHeader inverse>Penn Design and Penn Law renamed after large donations</MainHeader>
                        <SectionMainText inverse>Penn renamed two of their twelve schools this year after receiving large donations. In February, Penn’s School of Design was renamed the University of Pennsylvania Stuart Weitzman School of Design after the fashion icon and 1963 Wharton alumnus. Students voiced anger over the renaming, arguing that Weitzman’s career as a designer has no relation to any academic program at Penn. Students added administrators should have considered student input before the decision. In November, the University renamed Penn Law School to the University of Pennsylvania Carey Law School after the largest donation to any law school. A petition demanding the school change its short-form name from “Carey Law” back to “Penn Law” garnered over 500 signatures from students and alumni within two days of the announcement. Ten days after the initial announcement of the name change, Penn Law Dean Ted Ruger announced the school will change its short-form name back to “Penn Law” after widespread backlash from students and alumni.</SectionMainText>
                    </div>
                    <div class="col-md-6 narrow-col-left">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/10/stuart-weitzman-school-of-design-penn-wharton"><PrimaryStory inverse> ‘We were completely blindsided': PennDesign students frustrated by the school’s renaming </PrimaryStory></a>
                                    <Date inverse> Oct. 2 </Date>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/d1ada725-0263-4c46-8371-8a5a252d8e90.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                        <PrimaryStoryLine inverse/>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/11/penn-carey-law-school-ruger-donation-renaming"><PrimaryStory inverse> Hundreds sign petition calling to change new 'Carey Law' name back to 'Penn Law' </PrimaryStory></a>
                                    <Date inverse> Nov. 10 </Date>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/5310ad2b-76cb-425a-9d77-fe407f8d0161.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                        <PrimaryStoryLine inverse/>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/11/penn-carey-law-twitter-parody-accounts"><PrimaryStory inverse> A student took over the @PennLaw Twitter. Now, the school has shut down the parody account. </PrimaryStory></a>
                                    <Date inverse> Nov. 18 </Date>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/7cc33872-8190-43f4-815b-779365b9c883.sized-1000x1000.png?w=1000" />
                            </div>
                        </div>
                        <PrimaryStoryLine inverse/>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/11/penn-law-carey-renaming-change"><PrimaryStory inverse> ‘Carey Law’ changes its shortened name back to ‘Penn Law’ after extensive backlash </PrimaryStory></a>
                                    <Date inverse> Nov. 18 </Date>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/0d4576c9-3211-4213-b1c9-20068b954eeb.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                    </div>
                </div>

                <MoreStories inverse>
                    <MoreStoriesHeader inverse>MORE STORIES</MoreStoriesHeader>
                    <div class="row">
                        <div class="col-md-3 right-border-inverse">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/02/penn-design-stuart-weitzman-donation-fashion-philadelphia"  >
                                <SecondaryStory inverse> PennDesign renamed after fashion icon Stuart Weitzman — relieving financial uncertainty </SecondaryStory>
                            </StyledStoryLink>
                            <Date inverse> Feb. 26 </Date>
                        </div>
                        <div class="col-md-3 right-border-inverse narrow-col-left">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/11/penn-law-carey-foundation-donation-renaming"  >
                                <SecondaryStory inverse> Penn Law renamed ‘Carey Law School’ following record $125 million donation </SecondaryStory>
                            </StyledStoryLink>
                            <Date inverse> Nov. 8 </Date>
                        </div>
                        <div class="col-md-3 right-border-inverse narrow-col-left">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/11/penn-carey-law-ruger-rename-backlash-student-alumni"  >
                                <SecondaryStory inverse> 'A complete nightmare': Penn Law students and alums reflect on name-change process </SecondaryStory>
                            </StyledStoryLink>
                            <Date inverse> Nov. 19 </Date>
                        </div>
                        <div class="col-md-3 narrow-col-left">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/11/penn-law-carey-ruger-rename-town-hall"  >
                                <SecondaryStory inverse> Admin considers changing 'Carey Law' back to 'Penn Law' after student backlash </SecondaryStory>
                            </StyledStoryLink>
                            <Date inverse> Nov. 12 </Date>
                        </div>
                    </div>
                </MoreStories>
            </div>
        </Section>

        {/* NEWS 3 */}
        <Section>
            <div class="container">
                <SubSectionHeader>AMY WAX BACKLASH</SubSectionHeader>
                <div class="row">
                    <div class="col-md-6 right-border narrow-col-right">
                        <img class="img-fluid"
                            src="https://s3.amazonaws.com/snwceomedia/dpn/ba12e558-4276-446d-b046-7a8442a60a54.sized-1000x1000.jpg" />
                        <MainHeader>Students demand University to reprimand Wax for “racist” statements</MainHeader>
                        <SectionMainText>Penn Law professor Amy Wax sparked controversy again this summer after claiming that the United States would be “better off with more whites and fewer nonwhites.” Her comments prompted student activism through marching protests and petitions calling for the University to relieve her of all teaching duties. In October, the Undergraduate Assembly passed a resolution demanding the administration fire Wax. Wax previously caused controversy in 2017 when she claimed that white, Anglo-Saxon cultural norms are superior, and that she had never seen a black Penn Law student graduate in the top quarter of their class.</SectionMainText>
                    </div>
                    <div class="col-md-6 narrow-col-left">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/07/amy-wax-penn-law-dean-immigration">
                                    <PrimaryStory> Penn Law Dean Ted Ruger on Amy Wax’s remarks: 'bigoted' at best, 'racist' at worst </PrimaryStory>
                                </a>
                                <Date> July 23 </Date>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/bd14c6b0-77e5-4843-ad76-a8fe201f868a.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                        <PrimaryStoryLine/>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/07/amy-wax-penn-petition-racism-immigration-conservativism-conference">
                                    <PrimaryStory> Thousands petition for Amy Wax to be reprimanded by Penn over racist remarks </PrimaryStory>
                                </a>
                                <Date> July 24 </Date>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/a01cd39a-1ab7-4452-aef7-f85b8708aaea.sized-1000x1000.PNG?w=1000" />
                            </div>
                        </div>
                        <PrimaryStoryLine/>
                        <div class="row">
                            <div class="col-md-6">
                                <a href="https://www.thedp.com/article/2019/10/penn-amy-wax-protest-law-philadelphia">
                                    <PrimaryStory> Marching together, Penn Law students call on University to fire Amy Wax </PrimaryStory>
                                </a>
                                <Date> Oct. 14 </Date>
                            </div>
                            <div class="col-md-6">
                                <img class="img-fluid"
                                    src="https://snworksceo.imgix.net/dpn/8b5c32c9-9b2e-487d-b69c-947a4030c5e4.sized-1000x1000.jpg?w=1000" />
                            </div>
                        </div>
                    </div>
                </div>

                <MoreStories>
                    <MoreStoriesHeader>MORE STORIES</MoreStoriesHeader>
                    <div class="row">
                        <div class="col-md-3 right-border">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/07/penn-amy-wax-national-conservatism-conference-immigration-racism"  >
                                <SecondaryStory> Penn Law prof Amy Wax claims America is 'better off with more whites and fewer nonwhites' </SecondaryStory>
                            </StyledStoryLink>
                            <Date> July 18 </Date>
                        </div>
                        <div class="col-md-3 right-border narrow-col-left">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/10/amy-wax-tenure-undergraduate-assembly-resolution"  >
                                <SecondaryStory> Undergraduate Assembly demands that Penn fire Amy Wax for violating University policy </SecondaryStory>
                            </StyledStoryLink>
                            <Date> Oct. 7 </Date>
                        </div>
                        <div class="col-md-3 narrow-col-left">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/11/amy-wax-resolution-undergraduate-assembly-penn-law-update"  >
                                <SecondaryStory> NEC amends UA resolution to demand Penn bar Amy Wax from teaching instead of firing her </SecondaryStory>
                            </StyledStoryLink>
                            <Date> Nov. 14 </Date>
                        </div>
                        <div class="col-md-3 narrow-col-left">
                            <StyledStoryLink href="#"  >
                                <SecondaryStory></SecondaryStory>
                            </StyledStoryLink>
                            <Date/>
                        </div>
                    </div>
                </MoreStories>
            </div>
        </Section>

        {/* <!-- NEWS 4--> */}
        <Section inverse>
                <div class="container">
                    <SubSectionHeader>STUDENTS PUSH FOR CLIMATE CHANGE</SubSectionHeader>
                    <div class="row">
                        <div class="col-md-6 right-border-inverse narrow-col-right">
                            <img class="img-fluid"
                                src="https://s3.amazonaws.com/snwceomedia/dpn/fdc1e3a4-09e6-42fa-a884-6c7a229fb3c2.sized-1000x1000.jpg" />
                            <MainHeader inverse>Students pressure University to address the climate crisis</MainHeader>
                            <SectionMainText inverse>Pressure mounted this semester from students opposing Penn’s investment in the fossil fuel industry. In light of Penn's Board of Trustees' refusal to review Fossil Free Penn’s most recent divestment proposal last year, leaders said the club had no choice but to rethink its strategy and engage in direct action. FFP began holding weekly sit-ins outside of Penn President Amy Gutmann’s office in September. Weeks after the first sit-in, the University announced a Climate Action Plan 3.0, outlining more incremental steps to reduce Penn’s carbon emissions. Some student climate activists criticized the plan for its vagueness and potential harm to disadvantaged Philadelphia communities. In November, FFP protested at Penn’s annual Board of Trustees meeting, ultimately shutting the meeting down. Student protesters aim to pressure Penn to host a climate town hall, with Chief Investment Officer Peter Ammon, Chair of the Board of Trustees David Cohen, and Gutmann all in attendance.</SectionMainText>
                        </div>
                        <div class="col-md-6 narrow-col-left">
                            <div class="row">
                                <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/09/penn-fossil-free-fridays-sit-ins-climate-change">
                                        <PrimaryStory inverse> Weekly Fossil Free Penn sit-ins demand a public town hall on University's investments </PrimaryStory>
                                    </a>
                                    <Date inverse> Sep. 29 </Date>
                                </div>
                                <div class="col-md-6">
                                    <img class="img-fluid"
                                        src="https://snworksceo.imgix.net/dpn/e2a1bb84-33af-4a53-9a52-f7c31e2567e3.sized-1000x1000.jpg?w=1000" />
                                </div>
                            </div>
                            <PrimaryStoryLine inverse/>
                            <div class="row">
                                <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/10/climate-sustainability-action-plan-3-0-environment-upenn">
                                        <PrimaryStory inverse> Penn's third climate action plan incorporates sustainability and student outreach </PrimaryStory>
                                    </a>
                                    <Date inverse> Oct. 16 </Date>
                                </div>
                                <div class="col-md-6">
                                    <img class="img-fluid"
                                        src="https://snworksceo.imgix.net/dpn/d7db5dbe-f2b2-498b-9a05-d56affc3322b.sized-1000x1000.JPG?w=1000" />
                                </div>
                            </div>
                            <PrimaryStoryLine inverse/>
                            <div class="row">
                                <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/11/penn-board-of-trustees-meeting-fossil-free-protest">
                                        <PrimaryStory inverse> About 100 Fossil Free Penn members shut down Board of Trustees meeting </PrimaryStory>
                                    </a>
                                    <Date inverse> Nov. 8 </Date>
                                </div>
                                <div class="col-md-6">
                                    <img class="img-fluid"
                                        src="https://snworksceo.imgix.net/dpn/31817325-b341-4be7-adec-315ab261772e.sized-1000x1000.JPG?w=1000" />
                                </div>
                            </div>
                        </div>
                    </div>

                <MoreStories inverse>
                    <MoreStoriesHeader inverse>MORE STORIES</MoreStoriesHeader>
                    <div class="row">
                        <div class="col-md-3 right-border-inverse">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/09/climate-strike-philadelphia-fossil-free-penn"  >
                                <SecondaryStory inverse> Students and faculty march in 'Philly Climate Strike' to demand action on climate change </SecondaryStory>
                            </StyledStoryLink>
                            <Date inverse> Sep. 21 </Date>
                        </div>
                        <div class="col-md-3 right-border-inverse narrow-col-left">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/11/fossil-free-penn-fossil-fuels-ivy-league-upenn-philadelphia"  >
                                <SecondaryStory inverse> Guest Column by seven Penn faculty members | We support student climate change action </SecondaryStory>
                            </StyledStoryLink>
                            <Date inverse> Nov. 11 </Date>
                        </div>
                        <div class="col-md-3 narrow-col-left">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/12/penn-environmental-innovations-initiative-amy-gutmann-pritchett"  >
                                <SecondaryStory inverse> Penn announces new 'Environmental Innovations Initiative' for climate change research </SecondaryStory>
                            </StyledStoryLink>
                            <Date inverse>Dec. 4</Date>
                        </div>
                        <div class="col-md-3 narrow-col-left">
                            <StyledStoryLink href="#"  >
                                <SecondaryStory inverse></SecondaryStory>
                            </StyledStoryLink>
                            <Date inverse/>
                        </div>
                    </div>
                </MoreStories>
                <MoreStories inverse>
                    <MoreStoriesHeader inverse>PHOTO GALLERIES</MoreStoriesHeader>
                    <div class="row">
                        <div class="col-md-6">
                            <a href="https://www.thedp.com/article/2019/09/climate-change-strike-philadelphia-philly-penn-protest-march-photo-gallery">
                                <PhotoGallery className="img-fluid" src="https://snworksceo.imgix.net/dpn/708b89e3-630c-477b-bc3a-5d05932b1427.original.jpg" />
                                <PrimaryStory inverse>Highlights from the 2019 Philadelphia Climate Strike</PrimaryStory>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <a href="https://www.thedp.com/article/2019/11/photo-essay-fossil-free-penn-board-of-trustees-meeting">
                                <PhotoGallery className="img-fluid" src="https://snworksceo.imgix.net/dpn/0c0aae5d-a26c-4fbb-8693-c2abc211ab2b.original.jpg" />
                                <PrimaryStory inverse>The Fossil Free Penn protest that shut down Board of Trustees meeting</PrimaryStory>
                            </a>
                        </div>
                    </div>
                </MoreStories>
            </div>
        </Section>

        {/* <!-- NEWS 5--> */}
        <Section class="section">
                <div class="container">
                    <SubSectionHeader>2020 PRESIDENTIAL CAMPAIGNS</SubSectionHeader>
                    <div class="row">
                        <div class="col-md-6 right-border narrow-col-right">
                            <img class="img-fluid"
                                src="https://s3.amazonaws.com/snwceomedia/dpn/d530ada1-ab07-4ca3-90cf-582389d5273a.sized-1000x1000.jpg" />
                            <MainHeader>Two former Penn professors launch presidential campaigns</MainHeader>
                            <SectionMainText>Two of the front-runners for the Democratic presidential nomination have served as Penn professors – former United States Vice President Joe Biden and current U.S. Senator Elizabeth Warren (D-Mass.). The two candidates launched their campaigns earlier this year, aiming to win in 2020 against incumbent President Donald Trump in 2020 — a 1968 Wharton graduate. Penn President Amy Gutmann announced on Feb. 7, 2017 that Biden would serve as a Benjamin Franklin Presidential Practice Professor and lead the Penn Biden Center for Diplomacy and Global Engagement. Warren taught contract and bankruptcy law at the University of Pennsylvania Carey Law School from 1987 to 1995, when she left to teach at Harvard Law School.</SectionMainText>
                        </div>
                        <div class="col-md-6 narrow-col-left">
                            <div class="row">
                                <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/01/elizabeth-warren-president-penn-law-professor-students">
                                        <PrimaryStory> 'Whip-smart' and 'well-liked': Elizabeth Warren's Penn Law students remember their professor </PrimaryStory>
                                    </a>
                                    <Date> Jan. 22 </Date>
                                </div>
                                <div class="col-md-6">
                                    <img class="img-fluid"
                                        src="https://snworksceo.imgix.net/dpn/a83270c2-27b4-40e0-a32c-b9a2febe7a1f.sized-1000x1000.jpg?w=1000" />
                                </div>
                            </div>
                            <PrimaryStoryLine/>
                            <div class="row">
                                <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/04/joe-biden-president-2020-penn-center-democrat">
                                        <PrimaryStory> Joe's leaving Penn for now. But the Biden Center isn't going anywhere. </PrimaryStory>
                                    </a>
                                    <Date> Apr. 28 </Date>
                                </div>
                                <div class="col-md-6">
                                    <img class="img-fluid"
                                        src="https://snworksceo.imgix.net/dpn/f6beec97-98e5-46b8-92d2-fa0d6c69eaf0.sized-1000x1000.jpg?w=1000" />
                                </div>
                            </div>
                        </div>
                    </div>    

                <MoreStories>
                    <MoreStoriesHeader>MORE STORIES</MoreStoriesHeader>
                    <div class="row">
                        <div class="col-md-3 right-border">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/02/michael-cohen-testimony-donald-trump-wharton-penn-college-grades"  >
                                <SecondaryStory> Michael Cohen testifies that he threatened Penn not to release Trump's grades </SecondaryStory>
                            </StyledStoryLink>
                            <Date> Feb. 27 </Date>
                        </div>
                        <div class="col-md-3 right-border narrow-col-left">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/08/penn-for-joe-biden-president-2020-democrat-campaign"  >
                                <SecondaryStory> Meet Penn for Biden: the group backing the former vice president’s bid for the White House </SecondaryStory>
                            </StyledStoryLink>
                            <Date> Aug. 22 </Date>
                        </div>
                        <div class="col-md-3 narrow-col-left">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/02/elizabeth-warren-presidential-campaign-2020-launch-penn-law"  >
                                <SecondaryStory> Former Penn prof. Elizabeth Warren officially launches 2020 presidential bid </SecondaryStory>
                            </StyledStoryLink>
                            <Date> Feb. 9 </Date>
                        </div>
                        <div class="col-md-3 narrow-col-left">
                            <StyledStoryLink href="#"  >
                                <SecondaryStory></SecondaryStory>
                            </StyledStoryLink>
                            <Date/>
                        </div>
                    </div>
                </MoreStories>
            </div>
        </Section>

        {/* <!-- NEWS 6--> */}
        <Section inverse>
                <div class="container">
                    <SubSectionHeader>NEW BUILDINGS</SubSectionHeader>
                    <div class="row">
                        <div class="col-md-6 right-border-inverse narrow-col-right">
                            <img class="img-fluid"
                                src="https://s3.amazonaws.com/snwceomedia/dpn/291c3ee4-a6d6-4a05-955a-b6444e51837c.sized-1000x1000.jpg" />
                            <MainHeader inverse>Campus construction noise prompts student criticism</MainHeader>
                            <SectionMainText inverse>Penn announced plans to create a slate of new buildings this year and continued constructing its record-breaking $163 million dorm New College House West, shaping up major changes to campus. Additionally, Penn continued construction of the Pavilion at the Hospital of the University of Pennsylvania, Tangen Hall, and the Wharton Academic Research Building. Residents living near construction zones criticized the noise, claiming they were frequently woken up by construction early in the morning. Students said they felt their concerns were largely unaddressed by administrators. Penn's construction of NCHW will provide more room to house students once sophomores will be required to live on campus in 2021. Students who criticized the sophomore housing policy voiced concerns about the costs of on-campus housing and its impact on Greek Life.</SectionMainText>
                        </div>
                        <div class="col-md-6 narrow-col-left">
                            <div class="row">
                                <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/08/penn-new-college-house-west-construction-noise">
                                        <PrimaryStory inverse> Students protest 'ridiculous' New College House West construction noise </PrimaryStory>
                                    </a>
                                    <Date inverse> Oct. 27 </Date>
                                </div>
                                <div class="col-md-6">
                                    <img class="img-fluid"
                                        src="https://snworksceo.imgix.net/dpn/10a66465-25bf-4d15-8d21-b42787a52618.sized-1000x1000.jpg?w=1000" />
                                </div>
                            </div>
                            <PrimaryStoryLine inverse/>
                            <div class="row">
                                <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/09/penn-new-college-house-west-construction">
                                        <PrimaryStory inverse> Dining porch, courtyard, meditation rooms: Penn reveals NCHW details </PrimaryStory>
                                    </a>
                                    <Date inverse> Sep. 20 </Date>
                                </div>
                                <div class="col-md-6">
                                    <img class="img-fluid"
                                        src="https://snworksceo.imgix.net/dpn/c04fb1c8-8cab-49ba-8d30-fab7c7190f81.sized-1000x1000.JPG?w=1000" />
                                </div>
                            </div>
                            <PrimaryStoryLine inverse/>
                            <div class="row">
                                <div class="col-md-6">
                                    <a href="https://www.thedp.com/article/2019/11/quad-residents-wharton-building-noise-construction-penn">
                                        <PrimaryStory inverse> Quad residents upset with noisy construction of the Wharton Academic Research Building </PrimaryStory>
                                    </a>
                                    <Date inverse> Nov. 25 </Date>
                                </div>
                                <div class="col-md-6">
                                    <img class="img-fluid"
                                        src="https://snworksceo.imgix.net/dpn/5ea7cd52-1b49-4228-9500-fc2607b87008.sized-1000x1000.jpg?w=1000" />
                                </div>
                            </div>
                        </div>
                    </div>

                <MoreStories inverse>
                    <MoreStoriesHeader inverse>MORE STORIES</MoreStoriesHeader>
                    <div class="row">
                        <div class="col-md-3 right-border-inverse">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/01/new-college-house-west-construction-penn-january-update"  >
                                <SecondaryStory inverse> New College House West construction on schedule for fall 2021 opening </SecondaryStory>
                            </StyledStoryLink>
                            <Date inverse> Jan. 15 </Date>
                        </div>
                        <div class="col-md-3 right-border-inverse narrow-col-left">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/02/pavilion-upenn-hospital-university-of-pennsylvania-2021-floorplan-design"  >
                                <SecondaryStory inverse> Penn Medicine changes design for $1.5 billion Pavilion to optimize patient room layouts </SecondaryStory>
                            </StyledStoryLink>
                            <Date inverse> Feb. 12 </Date>
                        </div>
                        <div class="col-md-3 narrow-col-left">
                            <StyledStoryLink href="https://www.thedp.com/article/2019/03/penn-wharton-tangen-hall-student-entrepreneurship-amy-gutmann"  >
                                <SecondaryStory inverse> Construction for Tangen Hall, $46 million student entrepreneurial hub, will finish by 2020 </SecondaryStory>
                            </StyledStoryLink>
                            <Date inverse> Feb. 28 </Date>
                        </div>
                        <div class="col-md-3 narrow-col-left">
                            <StyledStoryLink href="#"  >
                                <SecondaryStory inverse></SecondaryStory>
                            </StyledStoryLink>
                            <Date inverse/>
                        </div>
                    </div>
                </MoreStories>
            </div>
        </Section>
    </Wrapper>
  )


export default News