import React from 'react';
import styles from './PageHeader.module.css';

class PageHeader extends React.Component {
    constructor (props) {
        super(props)
        this.state = { pageTitleDefault: 'pageTitle default text' }
    }

    render () {
        return (
            <div className={styles.container}>
                <h1 className={styles.title} data-testid='pageTitle'>{this.props.pageTitle ? this.props.pageTitle : this.state.pageTitleDefault}</h1>
            </div>
        )
    }
}

export default PageHeader;