/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Table from './Table';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <Table customStyle={{ padding: '30px' }}>
      <div>Child</div>
    </Table>
  );

  expect(wrapper).toMatchSnapshot();
});
