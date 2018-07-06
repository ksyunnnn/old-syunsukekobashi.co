import React, { Component } from 'react';
import numeral from 'numeral';

import { Button, Icon, Label } from 'semantic-ui-react';

export default props => {
  const { cheerCount, pushCheerCount } = props;
  return (
    <Button as="div" labelPosition="right" onClick={() => pushCheerCount()}>
      <Button style={{ borderColor: '#22A2BA', color: '#fafafa', background: '#22A2BA' }}>
        <Icon name="bullhorn" />
        応援
      </Button>
      <Label as="a" basic style={{ borderColor: '#22A2BA', color: '#22A2BA' }} pointing="left">
        {numeral(cheerCount).format('0,0')}
      </Label>
    </Button>
  );
};
