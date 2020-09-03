import React, { Component } from 'react'

class CommentBox extends Component {
    state = { comment: '' }

    handleChange = (e) => {
        this.setState({ comment: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        /**
         * todo
         * call an action creator
         * and save the comment
        */

        this.setState({ comment: '' })
    }

    render() {
        const { comment } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea value={comment} onChange={this.handleChange} />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default CommentBox