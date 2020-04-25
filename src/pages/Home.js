import React from 'react'
import Intro from '../components/intro/Intro';
import PageContainer from '../components/page-container/PageContainer'
import PageHeader from '../components/page-header/PageHeader'
import PageMain from '../components/page-main/PageMain'
import ContentfulClient from '../lib/ContentfulClient'

class Home extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
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
            <PageContainer title={this.state.fields.title}>
                <PageHeader />
                <PageMain>
                    <Intro />
                </PageMain>
            </PageContainer>
        )
    }
}

export default Home