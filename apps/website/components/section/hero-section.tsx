import { Button } from '../button';
import { Hero, HeroTitle, HeroSubtitle } from '../hero';

export const HomepageHero = () => (
  <>
    <Hero>
      <Button className="" href="/" variant="secondary" size="medium">
        <span>
          {' '}
          Release 2023.05 | <span className="text-primary600">Coming Soon</span>
        </span>
      </Button>
      <HeroTitle className="">
        The Ultimate Design <br /> System <br /> for Developers and
        <br />
        Designers!
      </HeroTitle>
      <HeroSubtitle className="">
        Elevate your designs with Mirage's extensive library of
        <br />
        customisable components and styles
      </HeroSubtitle>
    </Hero>
  </>
);
