import React from 'react'
import ContentfulClient from '../../lib/ContentfulClient';
import styles from './BlogPostsIndex.module.css';

class BlogPostsIndex extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            blogPosts: []
        }
    }

    componentDidMount () {
        const c = new ContentfulClient()
        const self = this
        let query = {
            content_type: 'blogPost',
            limit: 10,
            order: '-sys.updatedAt'
        }
        if (this.props.limit) {
            query.limit = this.props.limit
        }
        if (this.props.pageNumber > 0) {
            query.skip = this.props.pageNumber * query.limit
        }
        c.getEntries(query)
            .then(data => {
                if (data && data.items) {
                    self.setState({
                        blogPosts: data.items
                    })
                }
            })
    }

    render () {
        return (
            <div className={styles.container}>
                {this.state.blogPosts.map(blogPost => {
                    return (
                        <div className={styles.post} key={blogPost.sys.id.toString()}>
                            <h2 className={styles.postTitle}>
                                <a href={"/blog/" + blogPost.sys.id}>{blogPost.fields.title}</a>
                            </h2>
                            <div className={styles.updatedAt}>
                                {new Intl.DateTimeFormat(blogPost.sys.locale).format()}
                            </div>
                            <div className={styles.postPreview}>{blogPost.fields.previewText}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BlogPostsIndex