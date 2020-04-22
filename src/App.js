import React from 'react';
import Home from './pages/Home';
import SiteInfoProvider from './lib/SiteInfoProvider';
import SiteInfoContext from './lib/SiteInfoContext';
import styles from './App.module.css';

class App extends React.Component {
  render () {
    return (
      <SiteInfoProvider>
        <SiteInfoContext.Consumer>
          {context => (
            <div className={styles.container} style={context.themeProperties}>
              <Home title="Home" />
            </div>
          )}
        </SiteInfoContext.Consumer>
      </SiteInfoProvider>
    )
  }
}

export default App;
