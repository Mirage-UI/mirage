import { Container } from '@/components/container';
import { HomepageHero } from '@/components/section/hero-section';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <section className="overflow-hidden">
        <Container className="pt-[9.4rem]">
          <HomepageHero />
        </Container>
      </section>
    </>
  );
}
