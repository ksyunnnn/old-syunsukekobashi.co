import React, { Component } from 'react';

import { Transition, Image } from 'semantic-ui-react';

export default props => {
  const { isToggleHands } = props;
  return (
    <Transition animation="jiggle" duration={500} visible={isToggleHands}>
      <Image centered size="small" src="https://react.semantic-ui.com/images/leaves/3.png" />
    </Transition>
  );
};
