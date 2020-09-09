import React from 'react'
import Enzyme,{ mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moxios from 'moxios'

import Root from 'Root'
import App from 'components/App'

beforeEach(() => {
    Enzyme.configure({ adapter: new Adapter() })
    moxios.install()
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments',{
        status:200,
        response:[{name:'Fetch #1'},{name:'Fetch #2'}]
    })
})

afterEach(()=>{
    moxios.uninstall()
})

it('should fetch a list of comments and display them ', (done) => {
    //Attemp to render the *entire* app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )

    //find the 'fetchComments' button and click it
    wrapped.find('.fetch-comments').simulate('click')

    //introduce tiny little pause, maxios needs to do its work
        moxios.wait(()=>{
            wrapped.update()
            //Expect to find a list of comments! 500 LI's
            expect(wrapped.find('li').length).toEqual(2)
            done()
            wrapped.unmount()
        })
})
