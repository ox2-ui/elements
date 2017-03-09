import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Image from './Image';

storiesOf('Image', module)
  .add('default', () => (
    <Image
      customStyle={{width: '250px'}}
      value="http://imgur.com/7YG1YAU.png"
    />
  ));
