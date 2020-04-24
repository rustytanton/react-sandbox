import React from 'react';
import SiteInfoContext  from './SiteInfoContext';
import Themes from '../themes/Themes';
import ThemeTennessee from '../themes/ThemeTennessee';

class SiteInfoProvider extends React.Component {
    componentDidMount () {
        let self = this
        this.routeListener = window.addEventListener('popstate', () => {
            self.setRoute();
        })
        self.setRoute();
    }

    componentWillUnmount () {
        window.removeEventListener('popstate', this.routeListener)
    }

    setRoute () {
        this.setState({
            route: window.location.pathname
        });
    }

    constructor (props) {
        super(props)
        this.state = {
            siteTitle: 'Rusty\'s React Sandbox',
            siteDescription: 'A sandbox where I am going to post random React modules I build as I learn React.',
            theme: ThemeTennessee.id,
            themes: Themes
        };
    }

    render () {
        let currentTheme = () => {
            let theme = ThemeTennessee
            let self = this
            this.state.themes.forEach(t => {
                if (t.id === self.state.theme) {
                    theme = t
                }
            })
            return theme
        }
        return (
            <SiteInfoContext.Provider
                value={{
                    route: this.state.route,
                    siteTitle: this.state.siteTitle,
                    siteDescription: this.state.siteDescription,
                    theme: this.state.theme,
                    themes: this.state.themes,
                    themeBreakpoints: currentTheme().breakpoints,
                    themeTitle: currentTheme().title,
                    themeProperties: currentTheme().properties,
                    themeSet: newTheme => {
                        this.setState({
                            theme: newTheme
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