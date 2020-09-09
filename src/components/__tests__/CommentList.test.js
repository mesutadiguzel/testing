import React from 'react'
import Enzyme,{ mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentList from 'components/CommentList'
import Root from 'Root'

let wrapped

beforeEach(() => {

    const initialState = {
        comments:['Comment 1', 'Comment 2']
    }
    Enzyme.configure({ adapter: new Adapter() })
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList  />
        </Root>
    )
})

it('should create one LI per comment', () => {
   expect(wrapped.find('li').length).toEqual(2)
})

it('should show text for each comment ', () => {
    expect(wrapped.render().text()).toContain('Comment 1')
    expect(wrapped.render().text()).toContain('Comment 2')
})


