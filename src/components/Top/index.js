import React, { Component } from 'react';
import styled from 'styled-components';

import { Colors } from '../../variables';
import { media } from '../../helpers/media-query';

import { AnchorStyled, FlexWrapper } from '../styled-components';

const TopContainer = styled.div`
  ${media.phone`
    padding: 2vh 16px;
  `};
`;

const ProfileContainer = styled.div`
  max-width: 940px;
`;
const ProfileCard = styled.div`
  padding: 20px;
  margin-bottom: 80px;
`;
const TitleName = styled.div`
  font-size: 6rem;
  line-height: normal;
  letter-spacing: 8px;
  margin-bottom: 40px;
`;
const DescriptionList = styled.dl`
  font-size: 1.8rem;
  line-height: 2em;
  letter-spacing: 8px;
`;
const Term = styled.dt`
  margin-right: 80px;
`;
const Description = styled.dd``;

export default props => {
  return (
    <TopContainer>
      <ProfileContainer>
        <ProfileCard>
          <TitleName>
            SYUNSUKE<br />KOBASHI
          </TitleName>

          <DescriptionList>
            {[
              {
                term: '名前',
                desc: '小橋俊介(コバシ シュンスケ)',
              },
              {
                term: '誕生日',
                desc: '1992/02/23',
              },
              {
                term: '職業',
                desc: 'フリーランス',
              },
            ].map((v, i) => {
              return (
                <FlexWrapper between key={i}>
                  <Term>{v.term}</Term>
                  <Description>{v.desc}</Description>
                </FlexWrapper>
              );
            })}
          </DescriptionList>
        </ProfileCard>

        <ProfileCard>
          <TitleName>Social Account</TitleName>

          <DescriptionList>
            {[
              {
                term: (
                  <AnchorStyled href="https://twitter.com/ksyunnnn" target="_blank">
                    Twitter
                  </AnchorStyled>
                ),
                desc: (
                  <AnchorStyled href="https://twitter.com/ksyunnnn" target="_blank">
                    <i className="fab fa-twitter-square" />
                  </AnchorStyled>
                ),
              },
              {
                term: (
                  <AnchorStyled href="https://www.facebook.com/ksyunnnn" target="_blank">
                    Facebook
                  </AnchorStyled>
                ),
                desc: (
                  <AnchorStyled href="https://www.facebook.com/ksyunnnn" target="_blank">
                    <i className="fab fa-facebook-square" />
                  </AnchorStyled>
                ),
              },
              {
                term: (
                  <AnchorStyled href="https://medium.com/syunsukekobashi" target="_blank">
                    Medium
                  </AnchorStyled>
                ),
                desc: (
                  <AnchorStyled href="https://medium.com/syunsukekobashi" target="_blank">
                    <i className="fab fa-medium" />
                  </AnchorStyled>
                ),
              },
              {
                term: (
                  <AnchorStyled href="https://github.com/ksyunnnn" target="_blank">
                    Github
                  </AnchorStyled>
                ),
                desc: (
                  <AnchorStyled href="https://github.com/ksyunnnn" target="_blank">
                    <i className="fab fa-github-square" />
                  </AnchorStyled>
                ),
              },
            ].map((v, i) => {
              return (
                <FlexWrapper between key={i}>
                  <Term>{v.term}</Term>
                  <Description>{v.desc}</Description>
                </FlexWrapper>
              );
            })}
          </DescriptionList>
        </ProfileCard>
      </ProfileContainer>
    </TopContainer>
  );
};
