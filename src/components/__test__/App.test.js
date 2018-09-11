import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it ('should display the comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it ('should display the comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
