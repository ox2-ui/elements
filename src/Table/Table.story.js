import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Table from './Table';

storiesOf('Table', module)
  .add('default', () => (
    <Table customStyle={{ padding: '30px' }}>
      <div>Child</div>
    </Table>
  ));
