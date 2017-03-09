/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Image from './Image';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <Image
      customStyle={{width: '250px'}}
      value="http://imgur.com/7YG1YAU.png"
    />
  );

  expect(wrapper).toMatchSnapshot();
});
