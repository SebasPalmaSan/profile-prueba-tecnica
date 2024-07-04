import styles from "../../styles/About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>Sobre mí</h2>
      <p>
        Mi nombre es Lionel Andrés, soy jugador de fútbol prefesional, con una
        carrera extensa en varios clubes importantes a nivel mundial.
      </p>
      <p>
        En mi trayectoria formé parte de River Plate, FC Barcelona, Paris Saint
        Germain, Inter FC y fui durante 20 años participe de la Selección
        Argentina de Fútbol.
      </p>
    </section>
  );
};

export default About;
