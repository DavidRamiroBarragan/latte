import {neutral} from 'styles';

const {default: styled} = require('styled-components');

export const CardWrapper = styled.div`
  background-color: ${neutral[100]};
  border-radius: 4px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 345px;
  -webkit-font-smoothing: antialiased;
`;

export const CardContainer = styled.button`
  width: 100%;
  display: block;
  text-align: inherit;
  color: inherit;
  border: 0;
  cursor: pointer;
  position: relative;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
`;

export const ImageWrapper = styled.div`
  height: 140px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.image});
  text-align: inherit;
  color: inherit;
  cursor: pointer;
  user-select: none;
`;

export const DescriptionContainer = styled.div`
  padding: 16px;
  text-align: inherit;
  display: block;
`;
