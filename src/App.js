import React from 'react';
import Home from './pages/Home';
import SiteInfoProvider from './lib/SiteInfoProvider';
import SiteInfoContext from './lib/SiteInfoContext';
import styles from './App.module.css';

class App extends React.Component {
  render () {
    let renderRoute = (route) => {
      switch(route) {
        default:
          return <Home />;
      }
    }
    return (
      <SiteInfoProvider>
        <SiteInfoContext.Consumer>
          {context => (
            <div className={styles.container} style={context.theme.cssProperties}>
              {renderRoute(context.route)}
            </div>
          )}
        </SiteInfoContext.Consumer>
      </SiteInfoProvider>
    )
  }
}

export default App;
