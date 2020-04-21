import React from 'react';
import styles from './PageContainer.module.css';

class PageContainer extends React.Component {

    componentDidMount () {
        document.title = this.props.title
    }

    render () {
        return (
            <div className={styles.container}>
                {this.props.children}
            </div>
        )
    }
}

export default PageContainer