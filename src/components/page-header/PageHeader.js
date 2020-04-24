import React from 'react';
import styles from './PageHeader.module.css';
import SiteInfoContext from '../../lib/SiteInfoContext';
import Grid from '../grid/Grid';
import GridCol from '../grid/GridCol';

class PageHeader extends React.Component {
    render () {
        let navLink = function (route, currentRoute, title) {
            if (currentRoute && route !== currentRoute) {
                return (
                    <a href={route}>{title}</a>
                )
            } else {
                return (
                    <span>{title}</span>
                )
            }
        }

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
                                <div className={styles.themePicker}>
                                    <p>Current theme: <span className={styles.themeName}>{context.themeTitle}</span></p>
                                    <p>Set theme to:</p>
                                    {context.themes.map((theme, index) =>
                                        <>
                                            {context.theme !== theme.id &&
                                                <button className={styles.button} style={theme.properties} onClick={() => { context.themeSet(theme.id) }}>{theme.title}</button>
                                            }
                                        </>
                                    )}
                                </div>
                            </GridCol>
                            <GridCol width='100%'>
                                <ul className={styles.navList}>
                                    <li className={styles.navItem}>
                                        {navLink('/', context.route, 'Home')}
                                    </li>
                                    <li className={styles.navItem}>
                                        {navLink('/page2', context.route, 'Page 2')}
                                    </li>
                                    <li className={styles.navItem}>
                                        <a href="/Page3.html">
                                            Page 3
                                        </a>
                                    </li>
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