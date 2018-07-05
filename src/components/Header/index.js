import React, { Component } from 'react';
import styled from 'styled-components';

import { Colors } from '../../variables';
import { media } from '../../helpers/media-query';

import { Anchor } from '../styled-components';

const MenuItem = styled.div`
  padding: 0 10px;
  :not(:last-child) {
    margin-right: 20px;
  }
  :hover {
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.5);
  }
`;

const Navigation = props => {
  const { isToggleMenu } = props;
  let contents = '|||';

  if (isToggleMenu) contents = 'メニューが開く予定';

  return (
    <span
      style={{ fontSize: isToggleMenu ? '11px' : 'inherit', cursor: 'pointer' }}
      onClick={() => props.toggleMenu()}
    >
      {contents}
    </span>
  );
};

const HeaderContainer = styled.div`
  font-size: .8em;
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 50px;
  background: rgba(250,250,250,.8);
  color: ${Colors.black};
  padding: 0 80px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  ${media.phone`
    padding: 0 16px;
  `};
`;

const LogoWrapper = styled.div`
  letter-spacing: 1.5px;
  display: inline;
`;

export default props => {
  return (
    <HeaderContainer>
      <LogoWrapper>syunsukekobashi.co</LogoWrapper>
      <Navigation isToggleMenu={props.isToggleMenu} toggleMenu={props.toggleMenu} />
    </HeaderContainer>
  );
};
