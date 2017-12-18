import React from 'react';
//import flickrviewer from '../flickrviewer';
jest.mock('../flickrviewer');
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<flickrviewer />).toJSON();
  expect(rendered).toBeTruthy();
  expect(rendered).toMatchSnapshot();
});
