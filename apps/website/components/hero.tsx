import classNames from 'classnames';

interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return (
    <h1
      className={classNames(
        ' text-gradient my-6 text-h3 font-medium leading-[38px] md:leading-[60px] md:text-core60',
        className
      )}
    >
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return (
    <p
      className={classNames(
        'mb-12 text-lg font-light leading-[24px] md:leading-[26px] md:text-h5',
        className
      )}
    >
      {children}
    </p>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center ">{children}</div>;
};
