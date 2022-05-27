import DriverCard from '../components/cards/driver/DriverCard';
import { mockDriverCardProps } from '../components/cards/driver/DriverCard.mocks';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/Sidebar';
import Header from '../components/navigation/header/Header';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <DriverCard {...mockDriverCardProps.base} />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Header />
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
