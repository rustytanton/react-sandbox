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
                        </Grid>
                    </div>
                )}
            </SiteInfoContext.Consumer>
        )
    }
}

export default PageHeader;