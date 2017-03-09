/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Cell from './Cell';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <Cell customStyle={{ padding: '30px' }}>
      <div>Child</div>
    </Cell>
  );

  expect(wrapper).toMatchSnapshot();
});
