import CatCard from '../components/Atoms/cards/cat/CatCard';
import { mockCatCardProps } from '../components/Atoms/cards/cat/CatCard.mocks';
import PrimaryLayout from '../components/Organisms/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/Organisms/layouts/sidebar/SidebarLayout';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <CatCard {...mockCatCardProps.base} />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};