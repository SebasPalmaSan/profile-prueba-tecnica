import styles from "../../styles/Interests.module.css";

const Interests = () => {
  return (
    <section className={styles.interests}>
      <h2 className={styles.title}>Intereses</h2>
      <div>Fútbol</div>
      <div>Basquet</div>
      <div>Pesca</div>
      <div>Música</div>
      <div>Reuniones familiares</div>
    </section>
  );
};

export default Interests;
