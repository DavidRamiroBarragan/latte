import {Badge} from 'components/UI/Badges';
import {RowMax4Items} from 'components/UI/Layout';
import React from 'react';
import {
  CardContainer,
  CardWrapper,
  DescriptionContainer,
  ImageWrapper,
  TitleLikeImageWrapper
} from './CardStyles';

const Card = ({image, title, categories, id, categoryView = false}) => {
  const newData = title
    .split(' ', 2)
    .reduce((acc, value) => acc + value.substring(0, 1), '')
    .toUpperCase();
  return (
    <CardWrapper categoryView={categoryView} to={`/books/${id}`}>
      <CardContainer categoryView={categoryView}>
        {image ? (
          <ImageWrapper image={image} categoryView={categoryView} />
        ) : (
          <TitleLikeImageWrapper categoryView={categoryView}>{newData}</TitleLikeImageWrapper>
        )}
        <DescriptionContainer categoryView={categoryView}>
          <h2>{title}</h2>
          <RowMax4Items>
            {categories.map((value) => (
              <Badge key={`${value}-${value.id}`} modifiers="success">
                {value.name}
              </Badge>
            ))}
          </RowMax4Items>
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

export default Card;