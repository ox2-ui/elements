/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Box from './Box';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <Box customStyle={{ padding: '30px' }}>
      <div>Child</div>
    </Box>
  );

  expect(wrapper).toMatchSnapshot();
});
