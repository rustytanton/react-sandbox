import React from 'react'
import Grid from '../components/grid/Grid'
import GridCol from '../components/grid/GridCol'
import Intro from '../components/intro/Intro';
import ListBasic from '../components/list-basic/ListBasic'
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
        const query = {
            content_type: 'page',
            limit: 1,
            order: '-sys.updatedAt',
            'fields.isHomepage': true
        }
        const self = this
        c.getEntries(query)
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
                    <Grid>
                        <GridCol width='70%' halign='center'>
                            <Intro />
                        </GridCol>
                        <GridCol width='30%'>
                            <p>Site Navigation:</p>
                            <ListBasic items={[
                                (<a href="/page2">Page 2</a>),
                                (<a href="/Page3.html">Page 3</a>)
                            ]} />
                        </GridCol>
                    </Grid>
                </PageMain>
            </PageContainer>
        )
    }
}

export default Home