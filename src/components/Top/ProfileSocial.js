import React, { Component } from 'react';

import { ProfileCard, TitleName, DescriptionList, Term, Description } from './';
import { AnchorStyled, FlexWrapper } from '../styled-components';

export default props => {
  return (
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
  );
}
