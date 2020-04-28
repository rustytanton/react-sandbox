import React from 'react';
import styles from './PageHeader.module.css';
import SiteInfoContext from '../../lib/SiteInfoContext';
import Grid from '../grid/Grid';
import GridCol from '../grid/GridCol';

class PageHeader extends React.Component {
    render () {
        return (
            <SiteInfoContext.Consumer>
                {context => (
                    <div className={styles.container}>
                        <Grid>
                            <GridCol stretch={true} valign='center'>
                                <div className={styles.text}>
                                    <h1 className={styles.title}>{context.siteTitle}</h1>
                                    <div className={styles.description}>{context.siteDescription}</div>
                                </div>
                            </GridCol>
                            <GridCol>
                                {/* @todo this should be a separate component */}
                                <div className={styles.themePicker}>
                                    <p>Current theme: <span className={styles.themeName}>{context.theme.title}</span></p>
                                    <p>Set theme to:</p>
                                    {context.themes.map((theme, index) => {
                                        if (context.theme.title !== theme.title) {
                                            return (<button style={theme.cssProperties} key={index.toString()} className={styles.button} onClick={() => { context.themeSet(theme.title) }}>{theme.title}</button>)
                                        } else {
                                            return ''
                                        }
                                    })}
                                </div>
                            </GridCol>
                            <GridCol width='100%'>
                                <ul className={styles.navList}>
                                    {this.props.navLinks.map((navLink, index) => {
                                        return (<li key={index.toString()} className={styles.navItem}>{navLink}</li>)
                                    })}
                                </ul>
                            </GridCol>
                        </Grid>
                    </div>
                )}
            </SiteInfoContext.Consumer>
        )
    }
}

export default PageHeader;