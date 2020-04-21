import React from 'react';
import SiteInfoContext  from './SiteInfoContext';

class SiteInfoProvider extends React.Component {
    render () {
        return (
            <SiteInfoContext.Provider
                value={{
                    siteTitle: 'Rusty\'s React Sandbox'
                }}
            >
                {this.props.children}
            </SiteInfoContext.Provider>
        )
    }
}

export default SiteInfoProvider