import { FC } from 'react';

const Footer: FC<{}> = ({ ...props }) => {
  const url =
    'https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7';
  return (
    <footer style={{ textAlign: 'center' }}>
      <h3>
        Project from <a href={url}>Frontend Mentor</a>
      </h3>
    </footer>
  );
};

export default Footer;
