import React from 'react';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import SiteInfoProvider from './lib/SiteInfoProvider';
import SiteInfoContext from './lib/SiteInfoContext';
import styles from './App.module.css';

class App extends React.Component {
  render () {
    let renderRoute = (route) => {
      console.log('route', route)
      switch(route) {
        case '/page2':
          return <Page2 />;
        default:
          return <Home />;
      }

    }
    return (
      <SiteInfoProvider>
        <SiteInfoContext.Consumer>
          {context => (
            <div className={styles.container} style={context.themeProperties}>
              {renderRoute(context.route)}
            </div>
          )}
        </SiteInfoContext.Consumer>
      </SiteInfoProvider>
    )
  }
}

export default App;
