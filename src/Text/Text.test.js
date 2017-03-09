/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Text from './Text';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <Text
      customStyle={{ fontSize: '25px' }}
      value="My text"
    />
  );

  expect(wrapper).toMatchSnapshot();
});
