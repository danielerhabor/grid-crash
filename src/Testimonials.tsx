import styles from './Testimonials.module.css';
import { people } from './data/people';
import Card from './Card';

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      {people.map((p) => (
        <Card key={p.nameof} person={p}/>
      ))}
    </div>
  );
};

export default Testimonials;
