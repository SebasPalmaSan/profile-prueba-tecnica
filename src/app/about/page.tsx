import Image from "next/image";
import styles from "../../styles/About.module.css";

import imageMessi from "../../../public/images/messi-removebg-preview.png";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.leftColumn}>
        <h2 className={styles.title}>Sobre mí</h2>
        <p className={styles.paragraph}>
          Mi nombre es Lionel Andrés Messi, un futbolista argentino nacido el 24
          de junio de 1987 en Rosario, Santa Fe. Desde pequeño, el fútbol ha
          sido mi pasión, y a los 13 años me mudé a España para unirme a La
          Masía, la academia de fútbol del FC Barcelona. Mi carrera en el Barça
          ha sido un sueño hecho realidad, donde he tenido la oportunidad de
          jugar y crecer profesionalmente, ganando numerosos títulos y
          reconocimientos. Mi estilo de juego se caracteriza por mi agilidad,
          precisión y visión del campo. A lo largo de los años, he desarrollado
          una capacidad única para driblar a los defensores y crear
          oportunidades de gol, tanto para mí como para mis compañeros de
          equipo. He tenido el honor de ser nombrado el Mejor Jugador del Mundo
          en varias ocasiones, ganando múltiples Balones de Oro y otros premios
          individuales que reflejan mi dedicación y amor por el deporte. Además
          de mi carrera en el club, he tenido el privilegio de representar a mi
          país en competiciones internacionales. Jugar para la selección
          argentina ha sido un desafío y un honor indescriptible. A lo largo de
          los años, he participado en varias Copas del Mundo y Copas América,
          logrando finalmente levantar el trofeo de la Copa América en 2021, un
          momento que siempre recordaré con orgullo. Fuera del campo, soy una
          persona muy familiar y disfruto pasar tiempo con mi esposa Antonela y
          nuestros tres hijos. También me dedico a diversas actividades
          benéficas a través de la Fundación Leo Messi, que apoya a niños en
          situaciones vulnerables alrededor del mundo. El fútbol me ha dado
          mucho, y siempre he sentido la responsabilidad de devolver algo a la
          sociedad, especialmente a aquellos que más lo necesitan.
        </p>
      </div>
      <div className={styles.rightColumn}>
        <Image
          src={imageMessi}
          alt="Profile Picture"
          width={550}
          height={550}
          className={styles.profilePicHome}
        />
      </div>
    </section>
  );
};

export default About;
