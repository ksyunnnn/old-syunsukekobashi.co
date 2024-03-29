import styled, { injectGlobal } from 'styled-components';
import { Colors } from '../variables';
import { media } from '../helpers/media-query';

import { Link } from 'react-router-dom';

injectGlobal`

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: ${Colors.white}!important;
    font-size: 18px!important;
    font-family: "Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif!important;
  }
`;

export const Anchor = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 2px;
  :hover,
  :active {
    color: inherit;
  }
`;

export const AnchorStyled = styled.a`
  color: inherit;
  text-decoration: none;
  padding: 4px;
  border-radius: 20%;
  :hover,
  :active {
    color: inherit;
    border-bottom: 1px solid;
  }
`;

export const MainContainer = styled.div`
  padding: 160px 160px;
  ${media.phone`
    padding: 20vh 16px;
  `};
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.between ? 'space-between' : 'none')};
`;

export const OnlySPWrapper = styled.div`
  display: none;
  ${media.phone`
    display: inline;
  `};
`;

export const OnlyPCWrapper = styled.div`
  display: inline;
  ${media.phone`
    display: none;
  `};
`;

export const Footer = styled.footer`
  line-height: 80px;
  padding: 0 160px;
  ${media.phone`
    padding: 0 16px;
  `};
`;
