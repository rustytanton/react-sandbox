import React from 'react'
import styles from './Intro.module.css'

class Intro extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            showMore: false
        }
        this.toggleShowMore = this.toggleShowMore.bind(this)
    }

    toggleShowMore () {
        this.setState(state => {
            return {
                showMore: !state.showMore
            }
        })
    }

    render () {
        return (
            <div className={styles.container} data-show-more={this.state.showMore}>
                <p>Hi! If you got here it was probably from <a href="http://rustytanton.com">my website</a> or browsing my <a href="https://github.com/rustytanton">Github profile</a>. This site is a sandbox where I am going to post random React modules I build as I learn React.</p>
                {!this.state.showMore && 
                    <button className={styles.button} onClick={this.toggleShowMore}>Show more</button>
                }
                <div className={styles.more}>
                <p>About this site:</p>
                <ul>
                    <li>The site was bootstrapped with <a href="https://github.com/facebook/create-react-app">Create React App</a>. As I learn React I am otherwise trying to avoid using third-party libraries, even when it would make sense to do so in a production setting. If I do I'll note where I do so at minimum in code comments.</li>
                    <li>This site builds in Travis CI whenever I push commits to <a href="https://github.com/rustytanton/react-sandbox/tree/master">the Github repo master branch</a></li>
                    <li><a href="https://travis-ci.com/github/rustytanton/react-sandbox">The build</a> (with unit tests) has to pass before updates are deployed here</li>
                    <li>Uses <a href="https://github.com/css-modules/css-modules">CSS Modules</a></li>
                </ul>
                {this.state.showMore && 
                    <button className={styles.button} onClick={this.toggleShowMore}>Show less</button>
                }
                </div>
            </div>
        )
    }
}

export default Intro