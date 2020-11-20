import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContainer,
  CardWrapper,
  DescriptionContainer,
  ImageWrapper,
  TitleLikeImageWrapper
} from './CardStyles';

const Card = ({image, title, footer: Footer, withImageAtTop, to}) => {
  const newData = title
    .split(' ', 2)
    .reduce((acc, value) => acc + value.substring(0, 1), '')
    .toUpperCase();
  return (
    <CardWrapper to={to}>
      <CardContainer withImageAtTop={withImageAtTop}>
        {image ? (
          <ImageWrapper image={image} withImageAtTop={withImageAtTop} />
        ) : (
          <TitleLikeImageWrapper>{newData}</TitleLikeImageWrapper>
        )}
        <DescriptionContainer withImageAtTop={withImageAtTop}>
          <h2>{title}</h2>
          {Footer && <Footer />}
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam est
            necessitatibus, sit totam quis asperiores consequuntur obcaecati, ipsam ad voluptatem
            quo magni magnam a repudiandae nobis id hic vero.
          </p>
        </DescriptionContainer>
      </CardContainer>
    </CardWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  footer: PropTypes.elementType,
  withImageAtTop: PropTypes.bool,
  to: PropTypes.string
};

Card.defaultProps = {
  image: null,
  footer: null,
  withImageAtTop: true,
  to: ''
};

export default Card;
