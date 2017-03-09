import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Text from './Text';

storiesOf('Text', module)
  .add('default', () => (
    <Text
      customStyle={{ fontSize: '25px' }}
      value="My text"
    />
  ));
