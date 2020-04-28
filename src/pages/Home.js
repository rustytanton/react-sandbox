import React from 'react'
import BlogPostsIndex from '../components/blog-posts-index/BlogPostsIndex'
import PageMain from '../components/page-main/PageMain'
import ContentfulClient from '../lib/ContentfulClient'

class Home extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            pageNumber: 0,
            fields: {
                title: ''
            }
        }
    }

    componentDidMount () {
        const c = new ContentfulClient()
        const self = this
        c.getEntries({
            content_type: 'page',
            limit: 1,
            order: '-sys.updatedAt',
            'fields.isHomepage': true
        })
            .then(data => {
                if (data.items && data.items[0]) {
                    self.setState(data.items[0])
                }
            })
    }

    render () {
        return (
            <PageMain>
                <BlogPostsIndex pageNumber={this.state.pageNumber} />
            </PageMain>
        )
    }
}

export default Home