import React from 'react';
import styles from './PageContainer.module.css';

class PageContainer extends React.Component {
    render () {
        document.title = this.props.title
        return (
            <div className={styles.container}>
                {this.props.children}
            </div>
        )
    }
}

export default PageContainer