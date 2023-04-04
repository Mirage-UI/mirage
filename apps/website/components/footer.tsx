import { Container, FooterContainer } from './container';

export const Footer = () => {
  return (
    <footer className=" py-[5.6rem] text-sm">
      <Container>
        <FooterContainer>
          Powered By Vercel <br /> Built with Nextjs & TailwindCss
        </FooterContainer>
      </Container>
    </footer>
  );
};
