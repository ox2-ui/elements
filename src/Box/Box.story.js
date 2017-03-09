import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Box from './Box';

storiesOf('Box', module)
  .add('default', () => (
    <Box customStyle={{ padding: '30px' }}>
      <div>Child</div>
    </Box>
  ));
