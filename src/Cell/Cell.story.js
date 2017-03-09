import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Cell from './Cell';

storiesOf('Cell', module)
  .add('default', () => (
    <Cell customStyle={{ padding: '30px' }}>
      <div>Child</div>
    </Cell>
  ));
