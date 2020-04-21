import React from 'react'
import Intro from '../components/intro/Intro'
import ListBasic from '../components/list-basic/ListBasic'

class Home extends React.Component {
    render () {
        return (
            <>
                <Intro />
                <p>A basic list:</p>
                <ListBasic items={[
                    (<a href="http://www.google.com">Google</a>),
                    (<a href="http://www.facebook.com">Facebook</a>),
                    (<a href="http://www.twitter.com">Twitter</a>)
                ]} />
            </>
        )
    }
}

export default Home