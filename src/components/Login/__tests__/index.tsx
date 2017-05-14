import * as React from 'react';
import { Login } from '../';
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const login = create(
    <Login />
  ).toJSON();
  expect(login).toMatchSnapshot();
});