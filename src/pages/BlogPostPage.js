import React from 'react'
import PageMain from '../components/page-main/PageMain'
import ContentfulClient from '../lib/ContentfulClient'
import ContentfulRichText from '../components/contentful-rich-text/ContentfulRichText'
import styles from './BlogPostPage.module.css'

class BlogPostPage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    componentDidMount () {
        const c = new ContentfulClient()
        const self = this
        const postId = this.props.match.params.postId
        if (postId) {
            c.getEntry(postId)
                .then(data => {
                    self.setState({
                        updatedAt: data.sys.updatedAt,
                        title: data.fields.title,
                        content: data.fields.content
                    })
                })
        }
    }

    render () {
        return (
            <PageMain>
                <div className={styles.container}>
                    {this.state.title &&
                       <h2 className={styles.title}>{this.state.title}</h2>
                    }
                    {this.state.updatedAt &&
                        <div className={styles.updatedAt}>{this.state.updatedAt}</div>
                    }
                    <ContentfulRichText data={this.state.content} />
                </div>
            </PageMain>
        )
    }
}

export default BlogPostPage