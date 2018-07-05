import React, { Component } from 'react';
import styled from 'styled-components';

import { Colors } from '../../variables';
import { media } from '../../helpers/media-query';

import { AnchorStyled, FlexWrapper, OnlySPWrapper, OnlyPCWrapper } from '../styled-components';

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

export const DescriptionList = styled.dl`
  font-size: 1.8rem;
  line-height: 2em;
  letter-spacing: 8px;
`;

export const Term = styled.dt`
  margin-right: 80px;
  ${media.phone`
    margin-right: 16px;
  `};
`;

export const Description = styled.dd`
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
  max-width: 940px;
  margin-bottom: 160px;
`;

export default props => {
  return (
    <TopContainer>
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
