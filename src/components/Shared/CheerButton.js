import React, { Component } from 'react';

import { Button, Icon, Label } from 'semantic-ui-react';

export default props => {
  return (
    <Button as="div" labelPosition="right">
      <Button style={{ borderColor: '#22A2BA', color: '#fafafa', background: '#22A2BA' }}>
        <Icon name="bullhorn" />
        応援
      </Button>
      <Label as="a" basic style={{ borderColor: '#22A2BA', color: '#22A2BA' }} pointing="left">
        2,048
      </Label>
    </Button>
  );
};
