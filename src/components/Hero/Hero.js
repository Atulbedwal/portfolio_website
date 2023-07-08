import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome <br />
          Explore My World of Web Development
        </SectionTitle>
        <SectionText>
        Welcome to my portfolio, where creativity meets functionality. Discover my expertise in front-end development, API integration, responsive design, and agile methodology. Let's navigate the digital realm together.
        </SectionText>
        <Button onClick={()=>window.location='https://www.linkedin.com/in/atul-bedwal/'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;