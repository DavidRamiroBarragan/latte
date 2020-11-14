import styled from 'styled-components';
import {defaultTheme} from 'styles/theme';
import {applyStyleModifiers} from 'styled-components-modifiers';
import {BADGES_MODIFIERS} from 'styles/';
import {typeScale} from 'styles/';

export const Badge = styled.span`
  padding: 4px;
  border-radius: 2px;
  font-family: ${defaultTheme.primaryFont};
  font-size: ${typeScale.helperText};
  margin-left: 2px;
  ${applyStyleModifiers(BADGES_MODIFIERS)};
`;
