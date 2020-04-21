import React from 'react';
import styles from './PageMain.module.css';

class PageMain extends React.Component {
    render () {
        return (
            <main class={styles.container}>
                {this.props.children}
            </main>
        )
    }
}

export default PageMain