import React from 'react';
import styles from './PageHeader.module.css';
import SiteInfoContext from '../../lib/SiteInfoContext'

class PageHeader extends React.Component {
    render () {
        return (
            <div className={styles.container}>
                <SiteInfoContext.Consumer>
                    {context => (
                        <h1>{context.siteTitle}</h1>
                    )}
                </SiteInfoContext.Consumer>
            </div>
        )
    }
}

export default PageHeader;