import styles from './Testimonials.module.css';
import { people } from './data/people';

import Card from './Card';
import bgColors from './Card.module.css';

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <Card person={people[0]} bgColor={bgColors.cardBgPurple} />
      <Card person={people[1]} bgColor={bgColors.cardBgGreyBlue} />
      <Card person={people[2]} />
      <Card person={people[3]} bgColor={bgColors.cardBgBlackBlue} />
      <Card person={people[4]} />
    </div>
  );
};

export default Testimonials;
