import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Hi, I'm Sattyam Samania, a Web developer with a passion for open-source software and contributing to the development community
      </SectionText>
      <Button onClick={() =>  window.location = 'https://www.linkedin.com/in/sattyam-samania-3691711b9/'  }> Learn More </Button>
    </LeftSection>

  </Section>
);

export default Hero;