import Image from "next/image";
import styles from "./page.module.css";
import Buttons from "@/components/Buttons";

import imageUser from "../../public/images/pelota.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.leftColumn}>
        <h1 className={styles.title}>Soy Lionel Messi</h1>
        <p className={styles.textBottom}>
          "El talento y la elegancia no significan nada sin rigor y precisión"
        </p>
        <Link href="/about">
          <Buttons variant="primary">Ver mi perfil</Buttons>
        </Link>
      </div>
      <div className={styles.rightColumn}>
        <Image
          src={imageUser}
          alt="Profile Picture"
          width={450}
          height={450}
          className={styles.profilePicHome}
        />
      </div>
    </main>
  );
}
