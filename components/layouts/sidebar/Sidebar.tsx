import Link from 'next/link';
import styles from './Sidebar.module.css';

export interface ISidebar {}

const SidebarLayout: React.FC<ISidebar> = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Beranda</a>
      </Link>
      <Link href="/">
        <a>Driver Management</a>
      </Link>
      <Link href="/">
        <a>Pickup</a>
      </Link>
    </nav>
  );
};

export default SidebarLayout;
