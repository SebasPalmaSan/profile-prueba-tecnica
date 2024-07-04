import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import imageUser from "../../public/images/messi_avatar.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.profilePic}>
        <Link href="/">
          <Image
            src={imageUser}
            alt="Profile Picture"
            width={50}
            height={50}
            className={styles.profilePic}
          />
        </Link>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/about">
              <span className={styles.navLink}>Sobre mí</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/interests">
              <span className={styles.navLink}>Intereses</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">
              <span className={styles.navLink}>Contacto</span>
            </Link>
          </li>
        </ul>
      </nav>
      <h1>Lionel Andrés</h1>
    </header>
  );
};

export default Header;
