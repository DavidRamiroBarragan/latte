import styled from 'styled-components';

export const RowMax4Items = styled.div`
  display: flex;
  gap: 5px;
  flex: 1 0 21%;
  flex-flow: row wrap;
`;

export const Container = styled.main`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
`;

export const RowFlexEnd = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
`;
