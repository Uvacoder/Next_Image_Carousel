import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>FRAMER MOTION IMAGE CAROUSEL</a>
        </Link>
      </div>
    </header>
  );
}
