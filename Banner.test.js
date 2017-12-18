import React from 'react';
import Banner from '../Banner';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Banner />).toJSON();
  expect(rendered).toBeTruthy();
  expect(rendered).toMatchSnapshot();
});
