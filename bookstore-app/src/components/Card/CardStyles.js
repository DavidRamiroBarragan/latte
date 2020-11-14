import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {defaultTheme, neutral} from 'styles';
import {boxSadow} from 'styles/helpers';

export const CardWrapper = styled(Link)`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 0;
  margin: 0;
  max-width: 300px;
  min-width: 300px;
  background-color: ${neutral[100]};
  box-shadow: ${boxSadow};
  border-radius: 4px;
  text-decoration: none;
  color: ${defaultTheme.textColor};

  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-font-smoothing: antialiased;
  min-height: 250px;
`;

export const CardContainer = styled.button`
  display: ${(props) => (props.categoryView ? 'flex' : 'block')};
  flex-flow: row no-wrap;
  text-align: inherit;
  text-decoration: none;
  color: inherit;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  padding: ${(props) => (props.categoryView ? '10px' : 0)};
  height: -webkit-fill-available;
`;

export const ImageWrapper = styled.div`
  height: ${(props) => (props.categoryView ? '100%' : '150px')};
  width: ${(props) => (props.categoryView ? '100%' : 'inherit')};
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.image});
  text-align: inherit;
  color: inherit;
  cursor: pointer;
  user-select: none;
`;

export const TitleLikeImageWrapper = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  font-weight: bolder;
`;

export const DescriptionContainer = styled.div`
  padding: 1rem;
  text-align: inherit;
  .description {
    display: ${(props) => (props.categoryView ? 'none' : 'inherit')};
  }
`;
