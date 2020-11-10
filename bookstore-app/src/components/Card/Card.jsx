import React from 'react';
import {
  CardContainer,
  CardWrapper,
  DescriptionContainer,
  ImageWrapper
} from './CardStyles';

export const Card = ({image, title}) => {
  return (
    <CardWrapper>
      <CardContainer>
        <ImageWrapper image={image} />
        <DescriptionContainer>
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam est
            necessitatibus, sit totam quis asperiores consequuntur obcaecati, ipsam ad voluptatem
            quo magni magnam a repudiandae nobis id hic vero.
          </p>
        </DescriptionContainer>
      </CardContainer>
    </CardWrapper>
  );
};
