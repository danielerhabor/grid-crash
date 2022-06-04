import { FC } from 'react';
import { Person } from './data/people';

import styles from './Card.module.css';

const Card: FC<{person: Person}> = ({person, ...props}) => {
  return (
    <div className={`${styles.card} ${styles.cardBgPurple}`}>
      <header className={styles.cardHeader}>
        <img src={person.url} alt="" />
        <div>
          <h3>{person.nameof}</h3>
          <p>{person.status}</p>
        </div>
      </header>
    </div>
  );
};

export default Card;
