import { Button } from '../button';
import { Hero, HeroTitle, HeroSubtitle } from '../hero';
import { Ico } from '../images/Icons/ico';
import TimerCard from '../timer-card';

export const HomepageHero = () => (
  <>
    <Hero>
      <Button className="" href="/" variant="secondary" size="medium">
        <Ico />
        <span>
          {' '}
          Release 2023.05 | <span className="text-primary600">Coming Soon</span>
        </span>
      </Button>
      <HeroTitle className="">
        The Ultimate Design <br /> System for <br /> Devs and Designers!
        {/* <br />
        Designers! */}
      </HeroTitle>
      <HeroSubtitle className="">
        Elevate your designs with Mirage's extensive library of
        <br />
        customisable components and styles
      </HeroSubtitle>
      <TimerCard />
    </Hero>
  </>
);
