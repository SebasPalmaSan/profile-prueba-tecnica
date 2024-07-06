import Image from "next/image";
import styles from "../../styles/Interests.module.css";
import imageUser from "../../../public/images/messi3-removebg-preview.png";

const Interests = () => {
  return (
    <section className={styles.interests}>
      <h2 className={styles.title}>Intereses</h2>
      <div className={styles.group}>
        <span className={styles.item}>Fútbol</span>
        <span className={styles.item}>Basquet</span>
        <span className={styles.item}>Pesca</span>
        <span className={styles.item}>Música</span>
        <span className={styles.item}>Reuniones familiares</span>
      </div>

      <div>
        <Image
          src={imageUser}
          alt="Profile Picture"
          width={250}
          height={250}
          className={styles.profilePic}
        />
      </div>
    </section>
  );
};

export default Interests;
