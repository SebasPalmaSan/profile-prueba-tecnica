import Image from "next/image";
import styles from "./page.module.css";

import imageUser from "../../public/images/messi_avatar.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Bienvenido a mi perfil</h1>
      <Image
        src={imageUser}
        alt="Profile Picture"
        width={250}
        height={250}
        className={styles.profilePicHome}
      />
      <p className={styles.textBottom}>
        Esta es la página de inicio. Navega usando el menú superior.
      </p>
    </main>
  );
}
