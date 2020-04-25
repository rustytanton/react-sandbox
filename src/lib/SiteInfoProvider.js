import React from 'react';
import SiteInfoContext  from './SiteInfoContext';
import ContentfulClient from './ContentfulClient';

class SiteInfoProvider extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            siteTitle: '',
            siteDescription: '',
            theme: '',
            themes: []
        };
    }

    componentDidMount () {
        const self = this
        this.routeListener = window.addEventListener('popstate', () => {
            self.setRoute();
        })
        self.setRoute();
        this.doQuery()
    }

    doQuery () {
        const c = new ContentfulClient()
        const query = {
            content_type: 'siteInformation',
            limit: 1,
            order: '-sys.updatedAt',
            include: 4
        }
        const self = this
        c.getEntries(query)
            .then(data => {
                if (data.items && data.items[0] && data.items[0].fields) {
                    let defaultTheme = {}
                    let fields = data.items[0].fields
                    let themes = []
                    if (fields.themes) {
                        fields.themes.forEach(theme => {
                            theme = self.themeSetCssProperties(theme.fields)
                            themes.push(theme)
                            if (theme.isDefaultTheme) {
                                defaultTheme = theme
                            }
                        })
                    }
                    self.setState({
                        siteTitle: fields.siteTitle,
                        siteDescription: fields.siteDescription,
                        themes: themes,
                        theme: defaultTheme
                    })
                }
            })
    }

    componentWillUnmount () {
        window.removeEventListener('popstate', this.routeListener)
    }

    setRoute () {
        this.setState({
            route: window.location.pathname
        });
    }

    themeSetCssProperties (theme) {
        theme.cssProperties = {}
        if (theme.colors && theme.colors.fields) {
            Object.keys(theme.colors.fields).forEach(key => {
                if (key !== 'title') {
                    theme.cssProperties[`--${key}`] = theme.colors.fields[key]
                }
            })
        }
        return theme
    }

    themeByTitle (title) {
        let defaultTheme = {}
        let newTheme
        this.state.themes.forEach(theme => {
            if (theme.isDefaultTheme) {
                defaultTheme = theme
            }
            if (theme.title === title) {
                newTheme = theme
            }
        })
        if (newTheme) {
            return newTheme
        } else {
            return defaultTheme
        }
    }

    render () {
        let self = this
        return (
            <SiteInfoContext.Provider
                value={{
                    route: this.state.route,
                    siteTitle: this.state.siteTitle,
                    siteDescription: this.state.siteDescription,
                    theme: this.state.theme,
                    themes: this.state.themes,
                    themeSet: newThemeTitle => {
                        this.setState({
                            theme: self.themeByTitle(newThemeTitle)
                        })
                    }
                }}
            >
                {this.props.children}
            </SiteInfoContext.Provider>
        )
    }
}

export default SiteInfoProvider