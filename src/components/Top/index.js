import React, { Component } from 'react';
import styled from 'styled-components';

import { Colors } from '../../variables';
import { media } from '../../helpers/media-query';

import { AnchorStyled, FlexWrapper, OnlySPWrapper, OnlyPCWrapper } from '../styled-components';
import CheerButton from '../Shared/CheerButton';
import ClapHands from '../Shared/ClapHands';

import ProfileMe from './ProfileMe';
import ProfileWorks from './ProfileWorks';
import ProfileSocial from './ProfileSocial';

import { Button } from 'semantic-ui-react';

export const ProfileCard = styled.div`
  :not(:last-child) {
    margin-bottom: 240px;
  }
`;

export const TitleName = styled.div`
  font-size: 5vw;
  font-weight: 100;
  line-height: normal;
  letter-spacing: 8px;
  margin-bottom: 40px;
  ${media.phone`
    font-size: 8vw;
  `};
`;

export const DescriptionList = styled.div`
  font-size: 1.8rem;
  line-height: 2.5em;
  letter-spacing: 8px;
`;

export const Term = styled.div`
  min-width: 30%;
`;

export const Description = styled.div`
  text-align: right;
  small {
    letter-spacing: 2px;
  }
`;

const TopContainer = styled.div`
  ${media.phone`
    padding: 2vh 16px;
  `};
`;

const ProfileContainer = styled.div`
  max-width: 840px;
  margin-bottom: 160px;
`;

const ActionContainer = styled.div`
  position: fixed;
  top: 160px;
  right: 4vw;
  margin-bottom: 40px;
  box-sizing: border-box;
  ${media.phone`
    top: auto;
    bottom: 0;
    right: 24px;
  `};
`;

export default props => {
  return (
    <TopContainer>
      <ActionContainer>
        <CheerButton {...props} />
        <div>
          <ClapHands {...props} />
        </div>
      </ActionContainer>

      <ProfileContainer>
        <ProfileMe />
        <ProfileWorks />
        <ProfileSocial />
      </ProfileContainer>

      <Button
        onClick={() => window.open('https://m.me/ksyunnnn')}
        size="large"
        style={{ fontWeight: 'normal' }}
      >
        連絡をとる
      </Button>
    </TopContainer>
  );
};
