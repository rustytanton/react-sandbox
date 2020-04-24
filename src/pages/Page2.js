import React from 'react'
import PageContainer from '../components/page-container/PageContainer'
import PageHeader from '../components/page-header/PageHeader'
import PageMain from '../components/page-main/PageMain'

class Home extends React.Component {
    render () {
        return (
            <PageContainer title={this.props.title}>
                <PageHeader />
                <PageMain>
                    <p>This is a second page</p>
                </PageMain>
            </PageContainer>
        )
    }
}

export default Home