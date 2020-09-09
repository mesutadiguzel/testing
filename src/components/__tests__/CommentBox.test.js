
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';
import React from 'react';
import '../setupTests';
import Root from 'Root'

let wrapped;

beforeEach(() => {

    wrapped = mount(<Root><CommentBox /></Root>)
})

afterEach(() => {
    wrapped.unmount()
})

it('should has a text area and two buttons ', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
})

describe('The textarea', () => {

    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        })

        wrapped.update()
    })
    it('has a text area user can type in ', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    })

    it('when form is submitted, text are gets emptied ', () => {
        wrapped.find('form').simulate('submit')
        wrapped.update()
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })
})



