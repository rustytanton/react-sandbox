import React from 'react'
import Grid from '../components/grid/Grid'
import GridCol from '../components/grid/GridCol'
import Intro from '../components/intro/Intro';
import ListBasic from '../components/list-basic/ListBasic'
import PageContainer from '../components/page-container/PageContainer'
import PageHeader from '../components/page-header/PageHeader'
import PageMain from '../components/page-main/PageMain'

class Home extends React.Component {
    render () {
        return (
            <PageContainer title={this.props.title}>
                <PageHeader />
                <PageMain>
                    <Grid>
                        <GridCol width='50%' halign='center'>
                            <Intro />
                        </GridCol>
                        <GridCol width='50%' halign='center'>
                            <Grid>
                                <GridCol width='50%'>
                                    <p>Another basic list:</p>
                                    <ListBasic items={[
                                        (<a href="http://www.google.com">Google</a>),
                                        (<a href="http://www.facebook.com">Facebook</a>),
                                        (<a href="http://www.twitter.com">Twitter</a>)
                                    ]} />
                                </GridCol>
                                <GridCol stretch={true} width='50%'>
                                    <p>Another basic list:</p>
                                    <ListBasic items={[
                                        (<a href="http://www.google.com">Google</a>),
                                        (<a href="http://www.facebook.com">Facebook</a>),
                                        (<a href="http://www.twitter.com">Twitter</a>)
                                    ]} />
                                </GridCol>
                            </Grid>
                        </GridCol>
                    </Grid>
                </PageMain>
            </PageContainer>
        )
    }
}

export default Home