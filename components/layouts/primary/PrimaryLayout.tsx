import Head from 'next/head';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {
  children: any;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Driver App Management</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
