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