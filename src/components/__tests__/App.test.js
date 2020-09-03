import { shallow } from 'enzyme';
import React from 'react';
import App from 'components/App';
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import '../setupTests'

//const doesnt work please use let
let wrapped

beforeEach(() => {
    wrapped = shallow(<App />)
})

it('should show a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
})

it('should show a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
})